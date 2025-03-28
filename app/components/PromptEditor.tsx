
"use client";

import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Wand2 } from 'lucide-react';

interface PromptEditorProps {
  onOptimize: (prompt: string) => void;
  promptText: string;
  onPromptChange: (text: string) => void;
}

export default function PromptEditor({ onOptimize, promptText, onPromptChange }: PromptEditorProps) {
  return (
    <div className="prompt-container w-full border rounded-lg p-4 md:p-6 shadow-md bg-white/90">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Prompt Editor</h2>
      
      <Textarea 
        className="min-h-[120px] max-h-[200px] mb-4 resize-y focus:ring-2 focus:ring-optimizer-light transition-all" 
        placeholder="Enter your prompt here..."
        value={promptText}
        onChange={(e) => onPromptChange(e.target.value)}
      />
      
      <div className="flex justify-end">
        <Button 
          className="bg-gradient-to-r from-optimizer-primary to-optimizer-secondary hover:from-optimizer-secondary hover:to-optimizer-primary text-white shadow-md transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
          onClick={() => onOptimize(promptText)}
        >
          <Wand2 className="h-4 w-4" />
          Optimize
        </Button>
      </div>
    </div>
  );
}
