
import React, { useState, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Wand2 } from 'lucide-react';

interface PromptEditorProps {
  onOptimize: (prompt: string) => void;
  promptText?: string;
  onPromptChange?: (text: string) => void;
}

const PromptEditor: React.FC<PromptEditorProps> = ({ onOptimize, promptText = '', onPromptChange }) => {
  const [internalPromptText, setInternalPromptText] = useState(promptText);

  useEffect(() => {
    setInternalPromptText(promptText);
  }, [promptText]);

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInternalPromptText(e.target.value);
    if (onPromptChange) {
      onPromptChange(e.target.value);
    }
  };

  const handleOptimize = () => {
    if (!internalPromptText.trim()) {
      toast({
        title: "Empty Prompt",
        description: "Please enter a prompt to optimize",
        variant: "destructive",
      });
      return;
    }
    
    onOptimize(internalPromptText);
    toast({
      title: "Analyzing Prompt",
      description: "Your prompt is being optimized...",
    });
  };

  return (
    <div className="prompt-container w-full border rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Prompt Editor</h2>
      
      <Textarea 
        className="min-h-[300px] mb-6"
        placeholder="Enter your prompt here..."
        value={internalPromptText}
        onChange={handlePromptChange}
      />
      
      <div className="flex justify-end">
        <Button 
          className="bg-optimizer-primary hover:bg-optimizer-secondary flex items-center gap-2"
          onClick={handleOptimize}
        >
          <Wand2 className="h-4 w-4" />
          Optimize
        </Button>
      </div>
    </div>
  );
};

export default PromptEditor;
