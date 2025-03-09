
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Code, Users } from 'lucide-react';

interface LearningCardProps {
  type: 'beginner' | 'advanced' | 'community';
  title: string;
  description: string;
  lessons?: number;
  date?: string;
  onAction: () => void;
}

const LearningCard: React.FC<LearningCardProps> = ({ 
  type, 
  title, 
  description, 
  lessons, 
  date,
  onAction
}) => {
  const getIcon = () => {
    switch (type) {
      case 'beginner':
        return <BookOpen className="h-6 w-6 text-optimizer-primary" />;
      case 'advanced':
        return <Code className="h-6 w-6 text-optimizer-primary" />;
      case 'community':
        return <Users className="h-6 w-6 text-optimizer-primary" />;
      default:
        return null;
    }
  };

  const getActionButton = () => {
    if (type === 'community') {
      return (
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500">Next: {date}</div>
          <Button 
            className="bg-optimizer-primary hover:bg-optimizer-secondary"
            onClick={onAction}
          >
            Register
          </Button>
        </div>
      );
    }
    
    return (
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-500">{lessons} Lessons</div>
        <Button 
          className="bg-optimizer-primary hover:bg-optimizer-secondary"
          onClick={onAction}
        >
          Start Learning
        </Button>
      </div>
    );
  };

  return (
    <div className="learning-card">
      <div className="mb-4">
        {getIcon()}
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      {getActionButton()}
    </div>
  );
};

export default LearningCard;
