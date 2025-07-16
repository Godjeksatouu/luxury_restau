import React from 'react';
import { Instagram, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-6 mb-4">
            <span className="text-gray-400 text-sm">Developed by</span>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/satou.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gold-500 hover:text-gold-400 transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-sm font-medium">satou.dev</span>
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="https://visuelmedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gold-500 hover:text-gold-400 transition-colors duration-300"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">visuelmedia.agency</span>
              </a>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            © 2025 luxury vsm. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
