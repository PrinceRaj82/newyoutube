
import React from 'react';
import { Download, Video as VideoIcon, FileVideo, Loader } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from "sonner";

export interface DownloadFormat {
  quality: string;
  format: string;
  fileSize: string;
  type: 'video' | 'audio';
}

interface DownloadOptionsProps {
  formats: DownloadFormat[] | null;
  isLoading: boolean;
  downloadProgress: number | null;
  onDownload: (format: DownloadFormat) => void;
}

const DownloadOptions: React.FC<DownloadOptionsProps> = ({ 
  formats, 
  isLoading,
  downloadProgress,
  onDownload
}) => {
  if (isLoading) {
    return (
      <div className="mt-8">
        <div className="mb-4 flex items-center">
          <div className="h-6 bg-gray-200 rounded animate-pulse w-48"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(4)].map((_, index) => (
            <Card key={index} className="bg-gray-100 animate-pulse">
              <CardContent className="p-4 h-24"></CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!formats || formats.length === 0) {
    return null;
  }

  const handleDownload = (format: DownloadFormat) => {
    // In a real application, this would trigger the actual download
    toast.success(`Starting download: ${format.quality} ${format.format}`);
    onDownload(format);
  };

  const videoFormats = formats.filter(format => format.type === 'video');
  const audioFormats = formats.filter(format => format.type === 'audio');

  return (
    <div className="mt-8 space-y-8">
      {downloadProgress !== null && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-gray-700">Downloading...</span>
            <span className="text-brand-blue">{downloadProgress}%</span>
          </div>
          <Progress value={downloadProgress} className="h-2 bg-gray-200" indicatorClassName="bg-brand-blue" />
        </div>
      )}

      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <VideoIcon className="mr-2 h-5 w-5 text-brand-blue" />
          Video Formats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {videoFormats.map((format, index) => (
            <Card key={index} className="bg-white hover:bg-gray-50 transition-colors">
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <div className="font-medium">{format.quality}</div>
                  <div className="text-sm text-gray-500 flex items-center mt-1">
                    <FileVideo className="h-4 w-4 mr-1" />
                    {format.format} • {format.fileSize}
                  </div>
                </div>
                <Button 
                  onClick={() => handleDownload(format)}
                  className="bg-brand-green hover:bg-opacity-90"
                  disabled={downloadProgress !== null}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FileVideo className="mr-2 h-5 w-5 text-brand-blue" />
          Audio Formats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {audioFormats.map((format, index) => (
            <Card key={index} className="bg-white hover:bg-gray-50 transition-colors">
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <div className="font-medium">{format.quality}</div>
                  <div className="text-sm text-gray-500 flex items-center mt-1">
                    <FileVideo className="h-4 w-4 mr-1" />
                    {format.format} • {format.fileSize}
                  </div>
                </div>
                <Button 
                  onClick={() => handleDownload(format)}
                  className="bg-brand-green hover:bg-opacity-90"
                  disabled={downloadProgress !== null}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadOptions;
