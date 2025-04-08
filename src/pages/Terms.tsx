
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <div className="bg-brand-blue py-12">
          <div className="container mx-auto px-4 md:px-6 text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
          </div>
        </div>
        
        <section className="py-12 container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <p>
              These Terms of Service ("Terms") govern your use of the RapidTube website and service 
              (the "Service"). Please read these Terms carefully before using the Service.
            </p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
              with any part of the terms, you may not access the Service.
            </p>
            
            <h2>2. Description of Service</h2>
            <p>
              RapidTube provides a web-based service that allows users to download videos from 
              YouTube for personal use. The Service is provided "as is" and "as available" without 
              warranties of any kind, either express or implied.
            </p>
            
            <h2>3. Fair Use and Copyright</h2>
            <p>
              RapidTube respects copyright laws and expects its users to do the same. The Service 
              should be used only for downloading content for personal, non-commercial use. Users 
              are solely responsible for ensuring that their use of downloaded content complies 
              with applicable copyright laws.
            </p>
            
            <h2>4. User Conduct</h2>
            <p>
              You agree not to use the Service:
            </p>
            <ul>
              <li>In any way that violates any applicable laws or regulations</li>
              <li>To download content for commercial purposes without proper authorization</li>
              <li>To distribute or publicly display downloaded content without proper rights</li>
              <li>To attempt to interfere with or disrupt the Service or servers</li>
              <li>To circumvent any technological measures implemented to protect the Service</li>
            </ul>
            
            <h2>5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, RapidTube shall not be liable for any 
              indirect, incidental, special, consequential or punitive damages, including but not 
              limited to, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
            
            <h2>6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice 
              of any material changes by posting the new Terms on the Service. Your continued use 
              of the Service after any such changes constitutes your acceptance of the new Terms.
            </p>
            
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
