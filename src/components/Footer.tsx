
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-optimizer-primary" />
              <h3 className="font-bold">PromptOptimizer</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Enhance your AI interactions with advanced prompt engineering
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-optimizer-primary">Features</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-optimizer-primary">Pricing</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-optimizer-primary">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-optimizer-primary">Documentation</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-optimizer-primary">Tutorials</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-optimizer-primary">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-optimizer-primary">About</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-optimizer-primary">Contact</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-optimizer-primary">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
          © 2025 PromptOptimizer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
