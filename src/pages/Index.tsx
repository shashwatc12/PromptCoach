
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import PromptEditor from '@/components/PromptEditor';
import OptionsPanel from '@/components/OptionsPanel';
import TemplateCard from '@/components/TemplateCard';
import LearningCard from '@/components/LearningCard';
import PromptStrategies from '@/components/PromptStrategies';
import Footer from '@/components/Footer';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [promptText, setPromptText] = useState('');
  const [template, setTemplate] = useState('');
  const [model, setModel] = useState('GPT-4');

  const handleOptimize = (prompt: string) => {
    // In a real app, this would call an API to analyze the prompt
    console.log("Optimizing prompt:", prompt);
  };

  const handleUseTemplate = (template: string) => {
    let templateText = '';
    
    if (template === "TCREI Framework") {
      templateText = `[Task]: Clearly state what you want the AI to do
[Context]: Provide relevant background information
[Requirements]: List specific elements you need in the response
[Examples]: Show examples of desired outputs or formats
[Input]: Include the specific data or content to work with`;
    } else if (template === "Marketing Copy") {
      templateText = "Create compelling marketing copy for [product] targeting [audience]. Focus on benefits like [benefit1], [benefit2], and [benefit3]. Use a [tone] tone of voice.";
    } else if (template === "Technical Writing") {
      templateText = "Write a technical explanation of [topic] for an audience with [expertise level] knowledge. Include key concepts: [concept1], [concept2]. Provide examples where appropriate.";
    } else if (template === "Creative Writing") {
      templateText = "Write a [genre] story about [character/situation]. Set the scene in [setting/time period]. The mood should be [mood]. Include themes of [theme1] and [theme2].";
    }
    
    setPromptText(templateText);
    setTemplate(template);
    
    toast({
      title: "Template Selected",
      description: `${template} template has been applied`,
    });
  };

  const handleTemplateSelect = (value: string) => {
    setTemplate(value);
    
    // Map template values to template names for the handleUseTemplate function
    if (value === "tcrei") {
      handleUseTemplate("TCREI Framework");
    } else if (value === "marketing") {
      handleUseTemplate("Marketing Copy");
    } else if (value === "technical") {
      handleUseTemplate("Technical Writing");
    } else if (value === "creative") {
      handleUseTemplate("Creative Writing");
    }
  };

  const handleModelSelect = (value: string) => {
    setModel(value);
  };

  const handleStartLearning = () => {
    toast({
      title: "Learning Started",
      description: "Redirecting to learning materials",
    });
  };

  const handleRegister = () => {
    toast({
      title: "Registration",
      description: "Opening registration form for the community workshop",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex">
        <OptionsPanel 
          onTemplateSelect={handleTemplateSelect}
          onModelSelect={handleModelSelect}
          selectedTemplate={template}
          selectedModel={model}
        />
        
        <div className="flex-1 container mx-auto px-4 py-8">
          <div className="mb-12">
            <PromptEditor 
              onOptimize={handleOptimize} 
              promptText={promptText} 
              onPromptChange={setPromptText} 
            />
          </div>
          
          <PromptStrategies />
          
          <section className="mb-12 mt-12">
            <h2 className="text-2xl font-bold mb-6">Template Library</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TemplateCard
                title="TCREI Framework"
                description="Task, Context, Requirements, Examples, Input - A structured framework for effective prompts"
                onUse={() => handleUseTemplate("TCREI Framework")}
                isFramework={true}
              />
              <TemplateCard
                title="Marketing Copy"
                description="Optimize product descriptions and marketing content"
                onUse={() => handleUseTemplate("Marketing Copy")}
              />
              <TemplateCard
                title="Technical Writing"
                description="Create clear technical documentation and guides"
                onUse={() => handleUseTemplate("Technical Writing")}
              />
              <TemplateCard
                title="Creative Writing"
                description="Generate engaging stories and creative content"
                onUse={() => handleUseTemplate("Creative Writing")}
              />
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-6">Learn Prompt Engineering</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <LearningCard
                type="beginner"
                title="Beginner's Guide"
                description="Master the basics of prompt engineering"
                lessons={12}
                onAction={handleStartLearning}
              />
              <LearningCard
                type="advanced"
                title="Advanced Techniques"
                description="Learn chain-of-thought and role-playing prompts"
                lessons={8}
                onAction={handleStartLearning}
              />
              <LearningCard
                type="community"
                title="Community Workshop"
                description="Join live sessions with experts"
                date="Mar 15, 2025"
                onAction={handleRegister}
              />
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
