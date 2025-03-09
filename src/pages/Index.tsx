
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import PromptEditor from '@/components/PromptEditor';
import AnalysisFeedback from '@/components/AnalysisFeedback';
import TemplateCard from '@/components/TemplateCard';
import LearningCard from '@/components/LearningCard';
import Footer from '@/components/Footer';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [scores, setScores] = useState({
    clarity: 7.2,
    specificity: 6.8,
    structure: 8.5
  });
  
  const [suggestions, setSuggestions] = useState([
    "Add more specific details about your desired output format",
    "Consider breaking your request into numbered steps",
    "Specify any constraints or limitations more clearly"
  ]);

  const handleOptimize = (prompt: string) => {
    // In a real app, this would call an API to analyze the prompt
    console.log("Optimizing prompt:", prompt);
    
    // Simulate analysis with different scores
    const newScores = {
      clarity: Math.min(9.5, scores.clarity + Math.random()),
      specificity: Math.min(9.5, scores.specificity + Math.random() * 1.5),
      structure: Math.min(9.5, scores.structure + Math.random() * 0.5),
    };
    
    setScores(newScores);
    
    // Generate new suggestions based on the prompt
    const newSuggestions = [
      "Try using more explicit instructions at the beginning of your prompt",
      "Consider adding context about your target audience",
      "Add formatting preferences to get a more structured response"
    ];
    
    setSuggestions(newSuggestions);
  };

  const handleUseTemplate = (template: string) => {
    toast({
      title: "Template Selected",
      description: `${template} template has been applied`,
    });
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
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <PromptEditor onOptimize={handleOptimize} />
          <AnalysisFeedback scores={scores} suggestions={suggestions} />
        </div>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Template Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
