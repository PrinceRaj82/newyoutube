
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Video, DownloadCloud, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <div className="bg-brand-blue py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About RapidTube</h1>
            <p className="max-w-2xl mx-auto text-lg">
              The fastest and most reliable YouTube video downloader service
            </p>
          </div>
        </div>
        
        <section className="py-12 md:py-16 container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At RapidTube, we believe in making digital content accessible to everyone. 
              Our mission is to provide a fast, reliable, and user-friendly tool for downloading YouTube videos 
              for offline viewing. Whether you're a student who needs to save educational content, 
              a traveler preparing for a journey without internet access, or someone who simply wants 
              to build a personal collection of favorite videos, RapidTube is here to help.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-brand-blue/10 p-2 rounded-full">
                  <DownloadCloud className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Simple Process</h3>
                  <p className="text-gray-700">
                    Just paste the YouTube URL into our search box and click the download button. 
                    Our system will quickly analyze the video and provide you with various download options.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-brand-blue/10 p-2 rounded-full">
                  <Clock className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
                  <p className="text-gray-700">
                    Our advanced servers quickly process your request and extract video data, 
                    ensuring minimal waiting time from request to download.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-brand-blue/10 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Options</h3>
                  <p className="text-gray-700">
                    Choose from various quality options to suit your needs, from high-definition 
                    1080p videos to smaller files for devices with limited storage.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 py-6 px-8 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Important Notice</h3>
              <p className="text-gray-700">
                RapidTube is intended for downloading videos for personal use only. 
                Please respect copyright laws and the rights of content creators. 
                We do not host any videos on our servers and provide this tool 
                for educational and personal use purposes.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
