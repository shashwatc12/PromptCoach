export const metadata = {
  title: 'Workspace - PromptCoach',
  description: 'Manage and organize your AI prompts in one place',
};

"use client";

import React, { useState } from 'react';
import Template from '../../components/Template';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { Prompt, AIModel } from '../../types';

export default function WorkspacePage() {
  const [promptName, setPromptName] = useState('');
  const [promptText, setPromptText] = useState('');
  const [model, setModel] = useState<AIModel>('GPT-4');
  
  const handleSavePrompt = () => {
    if (!promptName.trim()) {
      toast({
        title: "Missing Name",
        description: "Please enter a name for your prompt",
        variant: "destructive",
      });
      return;
    }
    
    if (!promptText.trim()) {
      toast({
        title: "Empty Prompt",
        description: "Please enter prompt text to save",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Prompt Saved",
      description: `${promptName} has been saved to your workspace`,
    });
  };
  
  const savedPrompts: Prompt[] = [
    { id: 1, name: "Product Description Generator", model: "GPT-4", updated: "2 days ago" },
    { id: 2, name: "Technical Documentation Template", model: "Claude", updated: "Last week" },
    { id: 3, name: "Creative Story Outline", model: "GPT-3.5", updated: "2 weeks ago" },
  ];

  const sharedPrompts: Prompt[] = [
    { id: 4, name: "Marketing Email Sequence", author: "Alex Kim", model: "GPT-4", updated: "Yesterday" },
    { id: 5, name: "Code Documentation Helper", author: "Jamie Smith", model: "Claude", updated: "3 days ago" },
  ];

  return (
    <Template>
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Workspace</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Create New Prompt</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="prompt-name" className="block text-sm font-medium mb-1">Prompt Name</label>
                  <Input 
                    id="prompt-name" 
                    placeholder="Enter a name for your prompt"
                    value={promptName}
                    onChange={(e) => setPromptName(e.target.value)}
                  />
                </div>
                
                <div>
                  <label htmlFor="model" className="block text-sm font-medium mb-1">AI Model</label>
                  <Select value={model} onValueChange={(value) => setModel(value as AIModel)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="GPT-4">GPT-4</SelectItem>
                      <SelectItem value="GPT-3.5">GPT-3.5</SelectItem>
                      <SelectItem value="Claude">Claude</SelectItem>
                      <SelectItem value="Llama">Llama 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="prompt-text" className="block text-sm font-medium mb-1">Prompt</label>
                  <Textarea 
                    id="prompt-text"
                    placeholder="Write your prompt here..."
                    className="min-h-[200px]"
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                  />
                </div>
                
                <Button 
                  className="w-full bg-optimizer-primary hover:bg-optimizer-secondary"
                  onClick={handleSavePrompt}
                >
                  Save Prompt
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div>
            <Tabs defaultValue="my-prompts">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="my-prompts">My Prompts</TabsTrigger>
                <TabsTrigger value="shared">Shared With Me</TabsTrigger>
              </TabsList>
              
              <TabsContent value="my-prompts" className="space-y-4">
                {savedPrompts.map(prompt => (
                  <Card key={prompt.id}>
                    <CardContent className="pt-4 pb-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{prompt.name}</h3>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-xs text-gray-500">Model: {prompt.model}</span>
                            <span className="text-xs text-gray-500">Updated: {prompt.updated}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm" className="text-optimizer-primary border-optimizer-primary">Use</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="shared" className="space-y-4">
                {sharedPrompts.map(prompt => (
                  <Card key={prompt.id}>
                    <CardContent className="pt-4 pb-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{prompt.name}</h3>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-xs text-gray-500">By: {prompt.author}</span>
                            <span className="text-xs text-gray-500">Model: {prompt.model}</span>
                            <span className="text-xs text-gray-500">Shared: {prompt.updated}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-optimizer-primary border-optimizer-primary">Use</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </Template>
  );
} 