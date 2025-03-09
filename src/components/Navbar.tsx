
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-optimizer-primary" />
          <h1 className="text-xl font-bold">PromptOptimizer</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-optimizer-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/templates" className="font-medium hover:text-optimizer-primary transition-colors">
            Templates
          </Link>
          <Link to="/learn" className="font-medium hover:text-optimizer-primary transition-colors">
            Learn
          </Link>
          <Link to="/workspace" className="font-medium hover:text-optimizer-primary transition-colors">
            Workspace
          </Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="hidden md:flex">Try Free</Button>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm font-medium">👤</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
