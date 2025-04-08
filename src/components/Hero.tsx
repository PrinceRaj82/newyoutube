
import React from 'react';
import { Video } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-brand-blue to-brand-blue-light text-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/10 p-2">
          <Video className="h-6 w-6" />
        </div>
        <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Fastest YouTube Video Downloader
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-white/90 md:text-xl">
          Download YouTube videos in MP4, WEBM, or MP3 format with the highest quality for free.
        </p>
      </div>
    </div>
  );
};

export default Hero;
