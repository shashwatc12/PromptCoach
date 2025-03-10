"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Target, Sparkles } from 'lucide-react';

export default function PromptStrategies() {
  const strategies = [
    {
      icon: <Target className="h-6 w-6 text-optimizer-primary" />,
      title: "Be Specific",
      description: "Clearly define your requirements and desired output format. The more specific you are, the better results you'll get."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-optimizer-primary" />,
      title: "Provide Context",
      description: "Give relevant background information and context to help the AI understand the scope and purpose of your request."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-optimizer-primary" />,
      title: "Use Examples",
      description: "Include examples of desired outputs or formats to guide the AI in generating responses that match your expectations."
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Prompt Engineering Strategies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {strategies.map((strategy, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                {strategy.icon}
                <h3 className="font-semibold text-lg">{strategy.title}</h3>
              </div>
              <p className="text-gray-600">{strategy.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
