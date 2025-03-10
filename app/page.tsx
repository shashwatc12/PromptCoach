"use client";

import React, { useState } from 'react';
import OptionsPanel from '@/components/OptionsPanel';
import PromptEditor from '@/components/PromptEditor';
import PromptStrategies from '@/components/PromptStrategies';
import Footer from '@/components/Footer';

export default function Home() {
  const [promptText, setPromptText] = useState('');
  const [selectedModel, setSelectedModel] = useState('GPT-4');
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const handleOptimize = () => {
    // TODO: Implement optimization logic
    console.log('Optimizing prompt:', promptText);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex">
        <OptionsPanel
          selectedModel={selectedModel}
          selectedTemplate={selectedTemplate}
          onModelSelect={setSelectedModel}
          onTemplateSelect={setSelectedTemplate}
        />
        
        <div className="flex-1 p-6 flex flex-col gap-8">
          <div className="max-w-4xl mx-auto w-full">
            <h1 className="text-3xl font-bold mb-2">PromptCoach</h1>
            <p className="text-gray-600 mb-8">
              Craft better prompts with AI-powered optimization and expert strategies.
            </p>
            
            <PromptEditor
              promptText={promptText}
              onPromptChange={setPromptText}
              onOptimize={handleOptimize}
            />
            
            <div className="mt-12">
              <PromptStrategies />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 