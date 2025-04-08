
import React from 'react';
import { Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export interface VideoDetails {
  title: string;
  thumbnailUrl: string;
  duration: string;
  author: string;
}

interface VideoPreviewProps {
  video: VideoDetails | null;
  isLoading: boolean;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ video, isLoading }) => {
  if (isLoading) {
    return (
      <Card className="w-full bg-white shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-52 md:h-auto relative bg-gray-200 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-shimmer bg-[length:1000px_100%]"></div>
          </div>
          <CardContent className="p-4 md:p-6 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }

  if (!video) {
    return null;
  }

  return (
    <Card className="w-full bg-white shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 h-52 md:h-auto relative">
          <img 
            src={video.thumbnailUrl} 
            alt={`Thumbnail for ${video.title}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{video.duration}</span>
          </div>
        </div>
        <CardContent className="p-4 md:p-6 flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-lg md:text-xl font-bold line-clamp-2 mb-2">{video.title}</h1>
            <p className="text-sm text-gray-600">
              By {video.author}
            </p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default VideoPreview;
