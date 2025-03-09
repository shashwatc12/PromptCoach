
import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface PromptEditorProps {
  onOptimize: (prompt: string) => void;
  promptText?: string;
  onPromptChange?: (text: string) => void;
}

const PromptEditor: React.FC<PromptEditorProps> = ({ onOptimize, promptText = '', onPromptChange }) => {
  const [internalPromptText, setInternalPromptText] = useState(promptText);
  const [template, setTemplate] = useState('');
  const [model, setModel] = useState('GPT-4');
  const [temperature, setTemperature] = useState([0.7]);

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
    <div className="prompt-container border rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Prompt Editor</h2>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <Select value={template} onValueChange={setTemplate}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Select Template" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tcrei">TCREI Framework</SelectItem>
            <SelectItem value="marketing">Marketing Copy</SelectItem>
            <SelectItem value="technical">Technical Writing</SelectItem>
            <SelectItem value="creative">Creative Writing</SelectItem>
            <SelectItem value="custom">Custom Template</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={model} onValueChange={setModel}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Select Model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="GPT-4">GPT-4</SelectItem>
            <SelectItem value="GPT-3.5">GPT-3.5</SelectItem>
            <SelectItem value="Claude">Claude</SelectItem>
            <SelectItem value="Llama">Llama 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Textarea 
        className="min-h-[180px] mb-4"
        placeholder="Enter your prompt here..."
        value={internalPromptText}
        onChange={handlePromptChange}
      />
      
      <div className="flex items-center mb-4 gap-4">
        <div className="text-sm text-gray-500">Temperature</div>
        <Slider 
          value={temperature} 
          onValueChange={setTemperature}
          max={1} 
          step={0.1} 
          className="w-40"
        />
        <div className="text-sm text-gray-800 font-medium">{temperature[0]}</div>
      </div>
      
      <div className="flex justify-end">
        <Button 
          className="bg-optimizer-primary hover:bg-optimizer-secondary"
          onClick={handleOptimize}
        >
          Optimize
        </Button>
      </div>
    </div>
  );
};

export default PromptEditor;
