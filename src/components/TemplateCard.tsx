
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

interface TemplateCardProps {
  title: string;
  description: string;
  onUse: () => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ title, description, onUse }) => {
  return (
    <div className="template-card">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
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
