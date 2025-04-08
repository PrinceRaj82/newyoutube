
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

// Mock data for demonstration
const mockVideoDetails = {
  title: "Amazing Landscapes in 4K UHD - Beautiful Nature Documentary",
  thumbnailUrl: "https://i.ytimg.com/vi/0BIaDVnYp2A/maxresdefault.jpg",
  duration: "10:15",
  author: "Nature Explorer"
};

const mockDownloadFormats = [
  { quality: "1080p", format: "MP4", fileSize: "245.3 MB", type: 'video' as const },
  { quality: "720p", format: "MP4", fileSize: "132.5 MB", type: 'video' as const },
  { quality: "480p", format: "MP4", fileSize: "78.2 MB", type: 'video' as const },
  { quality: "360p", format: "WEBM", fileSize: "45.7 MB", type: 'video' as const },
  { quality: "High", format: "MP3", fileSize: "12.8 MB", type: 'audio' as const },
  { quality: "Medium", format: "MP3", fileSize: "8.5 MB", type: 'audio' as const }
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const [downloadFormats, setDownloadFormats] = useState<DownloadFormat[] | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);

  const handleSubmit = async (url: string) => {
    setIsLoading(true);
    setVideoDetails(null);
    setDownloadFormats(null);
    
    // Simulate API fetch with timeout
    try {
      // This would be a real API call in a production app
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Set mock data
      setVideoDetails(mockVideoDetails);
      setDownloadFormats(mockDownloadFormats);
    } catch (error) {
      console.error("Error fetching video details:", error);
      toast.error("Failed to fetch video details. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = (format: DownloadFormat) => {
    // Simulate download progress
    setDownloadProgress(0);
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev === null) return 0;
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloadProgress(null);
            toast.success("Download completed successfully!");
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 300);
    
    // In a real app, this would trigger the actual download
    // For demo purposes, we just show a progress bar
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
