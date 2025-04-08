
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is this service free to use?",
      answer: "Yes, our YouTube video downloader is completely free to use with no hidden charges or premium plans."
    },
    {
      question: "Can I download videos in HD quality?",
      answer: "Yes, you can download videos in various qualities including HD formats up to 1080p, depending on the original video quality."
    },
    {
      question: "Is it legal to download YouTube videos?",
      answer: "Downloading YouTube videos for personal use is generally acceptable. However, redistributing or using the content commercially may violate copyright laws. Always respect intellectual property rights."
    },
    {
      question: "Do I need to create an account?",
      answer: "No registration or account creation is required. Simply paste the YouTube URL and download your video."
    },
    {
      question: "What devices can I use this service on?",
      answer: "Our service works on all modern devices including desktops, laptops, tablets, and mobile phones with any modern web browser."
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our YouTube video downloader
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-3 text-left font-medium text-gray-900 hover:text-brand-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
