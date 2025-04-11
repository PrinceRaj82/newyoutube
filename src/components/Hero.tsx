
import React from 'react';
import { Video, Youtube } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-red-600 to-red-700 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/10 p-2">
          <Youtube className="h-8 w-8" />
        </div>
        <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          YouTube Video Downloader
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-white/90 md:text-xl">
          Download any YouTube video in MP4, WEBM, or MP3 format with the highest quality for free.
        </p>
        <p className="mx-auto max-w-[700px] text-sm text-white/70 mt-4">
          Simply paste your YouTube URL above and download straight to your device.
        </p>
      </div>
    </div>
  );
};

export default Hero;
