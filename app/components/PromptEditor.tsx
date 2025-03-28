
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
    <div className="prompt-container w-full border rounded-lg p-3 md:p-4 shadow-md bg-white/95">
      <h2 className="text-xl font-bold mb-2 text-gray-800">Prompt Editor</h2>
      
      <Textarea 
        className="min-h-[80px] max-h-[150px] mb-3 resize-y focus:ring-2 focus:ring-optimizer-light transition-all text-sm" 
        placeholder="Enter your prompt here..."
        value={promptText}
        onChange={(e) => onPromptChange(e.target.value)}
      />
      
      <div className="flex justify-end">
        <Button 
          variant="gradient"
          className="transform hover:scale-105"
          onClick={() => onOptimize(promptText)}
        >
          <Wand2 className="h-4 w-4 mr-2" />
          Optimize
        </Button>
      </div>
    </div>
  );
}
