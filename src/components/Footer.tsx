
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              <span className="text-secondary">Wagé</span>faal
            </h2>
            <p className="mt-2 text-white/70 max-w-xs">
              Safeguarding, developing, and elevating the Somali language through innovative digital solutions.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com/wagefaal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://twitter.com/wagefaal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/wagefaal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="mailto:contact@wagefaal.org" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
            
            <p className="text-sm text-white/70">
              &copy; {new Date().getFullYear()} Wagéfaal. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/70 text-sm">
            <span className="block md:inline">Let's build the future of Somali, together.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
