
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

const FAQPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4">
          <FAQ />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
