
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Sparkles, Layout, BookOpen, Wand2, Library } from 'lucide-react';

interface OptionsPanelProps {
  onTemplateSelect: (template: string) => void;
  onModelSelect: (model: string) => void;
  selectedTemplate: string;
  selectedModel: string;
}

const OptionsPanel: React.FC<OptionsPanelProps> = ({
  onTemplateSelect,
  onModelSelect,
  selectedTemplate,
  selectedModel
}) => {
  return (
    <div className="h-full w-64 bg-white border-r p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-5 w-5 text-optimizer-primary" />
        <h2 className="text-lg font-semibold">Options</h2>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Layout className="h-4 w-4 text-optimizer-gray" />
            <span>Template</span>
          </label>
          <Select value={selectedTemplate} onValueChange={onTemplateSelect}>
            <SelectTrigger className="w-full">
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
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-optimizer-gray" />
            <span>Model</span>
          </label>
          <Select value={selectedModel} onValueChange={onModelSelect}>
            <SelectTrigger className="w-full">
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
        
        {/* Template Library Section */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Library className="h-4 w-4 text-optimizer-gray" />
            <h3 className="text-sm font-medium">Template Library</h3>
          </div>
          
          <div className="space-y-3">
            <div className="p-3 border rounded-md hover:bg-gray-50 cursor-pointer" onClick={() => onTemplateSelect("tcrei")}>
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">TCREI Framework</span>
                {selectedTemplate === "tcrei" && <div className="w-2 h-2 bg-optimizer-primary rounded-full"></div>}
              </div>
              <p className="text-xs text-gray-500">Structured framework for effective prompts</p>
            </div>
            
            <div className="p-3 border rounded-md hover:bg-gray-50 cursor-pointer" onClick={() => onTemplateSelect("marketing")}>
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">Marketing Copy</span>
                {selectedTemplate === "marketing" && <div className="w-2 h-2 bg-optimizer-primary rounded-full"></div>}
              </div>
              <p className="text-xs text-gray-500">Optimize product marketing content</p>
            </div>
            
            <div className="p-3 border rounded-md hover:bg-gray-50 cursor-pointer" onClick={() => onTemplateSelect("technical")}>
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">Technical Writing</span>
                {selectedTemplate === "technical" && <div className="w-2 h-2 bg-optimizer-primary rounded-full"></div>}
              </div>
              <p className="text-xs text-gray-500">Clear technical documentation</p>
            </div>
            
            <div className="p-3 border rounded-md hover:bg-gray-50 cursor-pointer" onClick={() => onTemplateSelect("creative")}>
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">Creative Writing</span>
                {selectedTemplate === "creative" && <div className="w-2 h-2 bg-optimizer-primary rounded-full"></div>}
              </div>
              <p className="text-xs text-gray-500">Engaging stories and creative content</p>
            </div>
          </div>
        </div>
        
        <div className="mt-auto pt-4">
          <Button 
            className="w-full bg-optimizer-primary hover:bg-optimizer-secondary flex items-center gap-2"
            type="button"
          >
            <Wand2 className="h-4 w-4" />
            <span>Optimize</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OptionsPanel;
