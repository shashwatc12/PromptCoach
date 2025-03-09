
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Sparkles } from 'lucide-react';

interface TemplateCardProps {
  title: string;
  description: string;
  onUse: () => void;
  isFramework?: boolean;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ title, description, onUse, isFramework = false }) => {
  return (
    <div className="template-card border rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          {isFramework && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-optimizer-light/30 text-optimizer-primary">
              <Sparkles className="h-3 w-3 mr-1" />
              Framework
            </span>
          )}
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Star className="h-5 w-5 text-gray-400 hover:text-yellow-400" />
        </Button>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <Button 
        variant="outline" 
        className="w-full border-optimizer-primary text-optimizer-primary hover:bg-optimizer-light hover:text-optimizer-primary"
        onClick={onUse}
      >
        Use Template
      </Button>
    </div>
  );
};

export default TemplateCard;
