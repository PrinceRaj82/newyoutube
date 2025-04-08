
import React, { useState } from 'react';
import { toast } from "sonner";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import VideoUrlForm from '@/components/VideoUrlForm';
import VideoPreview, { VideoDetails } from '@/components/VideoPreview';
import DownloadOptions, { DownloadFormat } from '@/components/DownloadOptions';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';

// API configuration
const API_BASE_URL = 'http://localhost:5000/api';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const [downloadFormats, setDownloadFormats] = useState<DownloadFormat[] | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);
  const [currentYoutubeUrl, setCurrentYoutubeUrl] = useState<string>('');

  const handleSubmit = async (url: string) => {
    setIsLoading(true);
    setVideoDetails(null);
    setDownloadFormats(null);
    setCurrentYoutubeUrl(url);
    
    try {
      console.log('Fetching video info for:', url);
      const response = await fetch(`${API_BASE_URL}/video-info?url=${encodeURIComponent(url)}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch video info');
      }
      
      const data = await response.json();
      console.log('Received video data:', data);
      
      setVideoDetails(data.videoDetails);
      setDownloadFormats(data.downloadFormats);
    } catch (error) {
      console.error("Error fetching video details:", error);
      toast.error(error instanceof Error ? error.message : "Failed to fetch video details. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async (format: DownloadFormat) => {
    if (!currentYoutubeUrl) {
      toast.error("YouTube URL not found. Please try again.");
      return;
    }
    
    try {
      // Start download progress
      setDownloadProgress(0);
      
      // Construct download URL
      const downloadUrl = `${API_BASE_URL}/download?url=${encodeURIComponent(currentYoutubeUrl)}&format_id=${format.id}`;
      
      // Create a download link and simulate progress
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = '';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      // Simulate progress because we can't track actual download progress from another domain
      const interval = setInterval(() => {
        setDownloadProgress(prev => {
          if (prev === null) return 0;
          if (prev >= 95) {
            clearInterval(interval);
            setTimeout(() => {
              setDownloadProgress(100);
              setTimeout(() => {
                setDownloadProgress(null);
                toast.success("Download started successfully!");
              }, 1000);
            }, 500);
            return 95;
          }
          return prev + 5;
        });
      }, 300);
      
    } catch (error) {
      console.error("Error downloading video:", error);
      toast.error("Failed to download video. Please try again.");
      setDownloadProgress(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <section className="container mx-auto px-4 md:px-6 py-10 -mt-6 sm:-mt-10">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <VideoUrlForm onSubmit={handleSubmit} isLoading={isLoading} />
            
            {(videoDetails || isLoading) && (
              <div className="mt-8">
                <VideoPreview video={videoDetails} isLoading={isLoading} />
                <DownloadOptions 
                  formats={downloadFormats} 
                  isLoading={isLoading} 
                  downloadProgress={downloadProgress}
                  onDownload={handleDownload}
                />
              </div>
            )}
          </div>
        </section>
        
        <Features />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
