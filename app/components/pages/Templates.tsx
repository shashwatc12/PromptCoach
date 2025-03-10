"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TemplateCard from '@/components/TemplateCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Templates = () => {
  const categories = [
    "All Templates",
    "Marketing",
    "Technical",
    "Creative",
    "Academic",
    "Professional",
    "Personal"
  ];

  const templates = [
    {
      id: 1,
      title: "Marketing Copy",
      description: "Optimize product descriptions and marketing content",
      category: "Marketing"
    },
    {
      id: 2,
      title: "Technical Writing",
      description: "Create clear technical documentation and guides",
      category: "Technical"
    },
    {
      id: 3,
      title: "Creative Writing",
      description: "Generate engaging stories and creative content",
      category: "Creative"
    },
    {
      id: 4,
      title: "Blog Post",
      description: "Generate engaging and informative blog content",
      category: "Marketing"
    },
    {
      id: 5,
      title: "Email Template",
      description: "Professional email templates for various purposes",
      category: "Professional"
    },
    {
      id: 6,
      title: "Research Summary",
      description: "Summarize research papers and academic content",
      category: "Academic"
    }
  ];

  const handleUseTemplate = (title: string) => {
    toast({
      title: "Template Selected",
      description: `${title} template has been applied`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Templates</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search templates..." 
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>
        
        <div className="flex overflow-x-auto pb-2 mb-6 gap-2">
          {categories.map(category => (
            <Button 
              key={category}
              variant={category === "All Templates" ? "default" : "outline"}
              className={category === "All Templates" ? "bg-optimizer-primary hover:bg-optimizer-secondary" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              title={template.title}
              description={template.description}
              onUse={() => handleUseTemplate(template.title)}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Templates;
