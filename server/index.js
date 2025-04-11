
const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Get video info
app.get('/api/video-info', async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    // Use yt-dlp to get video info
    const ytDlp = spawn('yt-dlp', ['--dump-json', url]);
    
    let data = '';
    
    ytDlp.stdout.on('data', (chunk) => {
      data += chunk;
    });
    
    ytDlp.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
    
    ytDlp.on('close', (code) => {
      if (code !== 0) {
        return res.status(500).json({ error: 'Failed to get video info' });
      }
      
      try {
        const videoInfo = JSON.parse(data);
        
        // Transform the data to match our frontend structure
        const videoDetails = {
          title: videoInfo.title,
          thumbnailUrl: videoInfo.thumbnail,
          duration: formatDuration(videoInfo.duration),
          author: videoInfo.uploader
        };
        
        // Format download options
        const downloadFormats = [];
        
        // Add video formats
        videoInfo.formats.forEach(format => {
          if (format.resolution !== 'audio only' && format.filesize) {
            downloadFormats.push({
              id: format.format_id,
              quality: format.resolution || 'unknown',
              format: format.ext.toUpperCase(),
              fileSize: formatFileSize(format.filesize),
              type: 'video'
            });
          }
        });
        
        // Add audio formats
        videoInfo.formats.forEach(format => {
          if (format.resolution === 'audio only' && format.filesize) {
            let quality = "Low";
            if (format.abr) {
              if (format.abr > 128) quality = "High";
              else if (format.abr > 64) quality = "Medium";
            }
            
            downloadFormats.push({
              id: format.format_id,
              quality,
              format: format.ext.toUpperCase(),
              fileSize: formatFileSize(format.filesize),
              type: 'audio'
            });
          }
        });
        
        res.json({ videoDetails, downloadFormats });
      } catch (error) {
        console.error('Error parsing video info:', error);
        res.status(500).json({ error: 'Failed to parse video info' });
      }
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Download video
app.get('/api/download', (req, res) => {
  try {
    const { url, format_id } = req.query;
    if (!url || !format_id) {
      return res.status(400).json({ error: 'URL and format_id are required' });
    }
    
    // Get video info first to set proper filename
    const infoProcess = spawn('yt-dlp', ['--dump-json', url]);
    
    let infoData = '';
    
    infoProcess.stdout.on('data', (chunk) => {
      infoData += chunk;
    });
    
    infoProcess.on('close', (code) => {
      if (code !== 0) {
        return res.status(500).json({ error: 'Failed to get video info' });
      }
      
      try {
        const videoInfo = JSON.parse(infoData);
        const safeFilename = videoInfo.title.replace(/[^\w\s]/gi, '_');
        const format = videoInfo.formats.find(f => f.format_id === format_id);
        const extension = format ? format.ext : 'mp4';
        
        // Set response headers for file download
        res.setHeader('Content-Disposition', `attachment; filename="${safeFilename}.${extension}"`);
        res.setHeader('Content-Type', 'application/octet-stream');
        
        // Stream the download directly to the response
        // const ytDlp = spawn('yt-dlp', [
        //   '-f', format_id,
        //   '-o', '-', // Output to stdout
        //   url
        // ]);
        
        // const ytDlp = spawn('yt-dlp', [
        //   '-f', `${format_id}+bestaudio`,
        //   '--merge-output-format', 'mp4',
        //   '-o', '-', // Output to stdout
        //   url
        // ]);
        
        const ytDlp = spawn('yt-dlp', [
          '-f', `${format_id}+bestaudio[ext=m4a]`,
          '--merge-output-format', 'mp4',
          '-o', '-', // Stream output
          url
        ]);
        
        ytDlp.stdout.pipe(res);
        
        ytDlp.stderr.on('data', (data) => {
          console.error(`stderr: ${data}`);
        });
        
        ytDlp.on('error', (error) => {
          console.error('Download error:', error);
          if (!res.headersSent) {
            res.status(500).json({ error: 'Download failed' });
          }
        });
        
        // Handle client disconnection
        req.on('close', () => {
          ytDlp.kill();
        });
        
      } catch (error) {
        console.error('Error during download:', error);
        if (!res.headersSent) {
          res.status(500).json({ error: 'Download failed' });
        }
      }
    });
    
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Helper functions
function formatDuration(seconds) {
  if (!seconds) return '0:00';
  
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function formatFileSize(bytes) {
  if (!bytes) return 'Unknown';
  
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round((bytes / Math.pow(1024, i)) * 10) / 10 + ' ' + sizes[i];
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
