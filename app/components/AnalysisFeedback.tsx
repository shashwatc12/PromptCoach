
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AnalysisProps {
  scores: {
    clarity: number;
    specificity: number;
    structure: number;
  };
  suggestions?: string[];
}

const AnalysisFeedback: React.FC<AnalysisProps> = ({ scores, suggestions = [] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analysis & Feedback</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Clarity Score</span>
            <span className="text-sm text-gray-500">{scores.clarity}/10</span>
          </div>
          <div className="score-bar">
            <div className="score-value" style={{ width: `${scores.clarity * 10}%` }}></div>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Specificity</span>
            <span className="text-sm text-gray-500">{scores.specificity}/10</span>
          </div>
          <div className="score-bar">
            <div className="score-value" style={{ width: `${scores.specificity * 10}%` }}></div>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Structure</span>
            <span className="text-sm text-gray-500">{scores.structure}/10</span>
          </div>
          <div className="score-bar">
            <div className="score-value" style={{ width: `${scores.structure * 10}%` }}></div>
          </div>
        </div>
        
        {suggestions.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold mb-2">Improvement Suggestions:</h3>
            <ul className="text-sm space-y-2">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-optimizer-primary">•</span>
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AnalysisFeedback;
