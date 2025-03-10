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
    <div className="prompt-container w-full border rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Prompt Editor</h2>
      
      <Textarea 
        className="min-h-[300px] mb-6"
        placeholder="Enter your prompt here..."
        value={promptText}
        onChange={(e) => onPromptChange(e.target.value)}
      />
      
      <div className="flex justify-end">
        <Button 
          className="bg-optimizer-primary hover:bg-optimizer-secondary flex items-center gap-2"
          onClick={() => onOptimize(promptText)}
        >
          <Wand2 className="h-4 w-4" />
          Optimize
        </Button>
      </div>
    </div>
  );
}
