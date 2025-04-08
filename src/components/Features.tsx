
import React from 'react';
import { Download, Play, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Download className="h-10 w-10 text-brand-blue" />,
      title: 'Fast Downloads',
      description: 'Download videos at maximum speed with our optimized servers.'
    },
    {
      icon: <Play className="h-10 w-10 text-brand-blue" />,
      title: 'Multiple Formats',
      description: 'Choose from various formats and qualities: MP4, WEBM, MP3, and more.'
    },
    {
      icon: <Clock className="h-10 w-10 text-brand-blue" />,
      title: 'No Waiting',
      description: 'No registration required, no countdown timers. Download instantly.'
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why Choose RapidTube
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our tool is designed to make downloading YouTube videos simple and quick
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
