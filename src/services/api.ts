
/**
 * API service for YouTube downloader
 */

const API_BASE_URL = 'http://localhost:5000/api';

interface VideoInfoResponse {
  videoDetails: {
    title: string;
    thumbnailUrl: string;
    duration: string;
    author: string;
  };
  downloadFormats: Array<{
    id: string;
    quality: string;
    format: string;
    fileSize: string;
    type: 'video' | 'audio';
  }>;
}

/**
 * Fetches video information and available download formats
 * @param youtubeUrl The YouTube video URL
 */
export async function getVideoInfo(youtubeUrl: string): Promise<VideoInfoResponse> {
  const response = await fetch(`${API_BASE_URL}/video-info?url=${encodeURIComponent(youtubeUrl)}`);
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to fetch video info');
  }
  
  return response.json();
}

/**
 * Gets the download URL for a specific format
 * @param youtubeUrl The YouTube video URL
 * @param formatId The format ID to download
 */
export function getDownloadUrl(youtubeUrl: string, formatId: string): string {
  return `${API_BASE_URL}/download?url=${encodeURIComponent(youtubeUrl)}&format_id=${formatId}`;
}
