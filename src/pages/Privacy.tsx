
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <div className="bg-brand-blue py-12">
          <div className="container mx-auto px-4 md:px-6 text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          </div>
        </div>
        
        <section className="py-12 container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <p>
              This Privacy Policy explains how RapidTube ("we", "us", or "our") collects, uses, 
              and shares your information when you use our video downloader service.
            </p>
            
            <h2>1. Information We Collect</h2>
            <p>
              When you use our Service, we may collect the following types of information:
            </p>
            <ul>
              <li>
                <strong>Usage Information:</strong> Information about how you use our Service, including 
                YouTube URLs you submit, download choices, and browsing behavior on our site.
              </li>
              <li>
                <strong>Device Information:</strong> Information about the device you use to access our 
                Service, including device type, operating system, browser type, and IP address.
              </li>
              <li>
                <strong>Log Data:</strong> Standard server logs, such as the pages you visit and the time 
                spent on those pages.
              </li>
            </ul>
            
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our Service</li>
              <li>Detect and prevent fraud, abuse, and security incidents</li>
              <li>Understand how users interact with our Service</li>
              <li>Develop new features and services</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2>3. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our Service and 
              hold certain information. You can instruct your browser to refuse all cookies or to 
              indicate when a cookie is being sent.
            </p>
            
            <h2>4. Data Retention</h2>
            <p>
              We retain the information we collect for as long as necessary to fulfill the purposes 
              outlined in this Privacy Policy, unless a longer retention period is required or 
              permitted by law.
            </p>
            
            <h2>5. Security</h2>
            <p>
              We use reasonable security measures designed to protect your information. However, 
              no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
            
            <h2>6. Children's Privacy</h2>
            <p>
              Our Service is not directed to children under the age of 13. If we learn that we have 
              collected personal information from a child under 13, we will take steps to delete 
              such information.
            </p>
            
            <h2>7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page.
            </p>
            
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
