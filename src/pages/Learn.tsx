
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Code, Users, Play, Star, FileText, BookMarked } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Learn = () => {
  const handleStartCourse = (course: string) => {
    toast({
      title: "Course Selected",
      description: `Starting ${course}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Learn Prompt Engineering</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Master the art of crafting effective prompts for AI models through our comprehensive learning resources
          </p>
        </div>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-optimizer-primary">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <BookOpen className="h-8 w-8 text-optimizer-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Prompt Engineering Fundamentals</h3>
                <p className="text-gray-600 mb-4">
                  Learn the basics of prompt engineering, including prompt structure, clarity, and specificity
                </p>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm">4.8</span>
                  </div>
                  <span className="text-sm text-gray-500">12 Lessons · 3 hours</span>
                </div>
                <Button 
                  className="w-full bg-optimizer-primary hover:bg-optimizer-secondary"
                  onClick={() => handleStartCourse("Prompt Engineering Fundamentals")}
                >
                  Start Learning
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-optimizer-secondary">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Code className="h-8 w-8 text-optimizer-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Advanced Prompt Techniques</h3>
                <p className="text-gray-600 mb-4">
                  Master advanced techniques like chain-of-thought, few-shot learning, and role-playing prompts
                </p>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm">4.7</span>
                  </div>
                  <span className="text-sm text-gray-500">8 Lessons · 4 hours</span>
                </div>
                <Button 
                  className="w-full bg-optimizer-secondary hover:bg-optimizer-primary"
                  onClick={() => handleStartCourse("Advanced Prompt Techniques")}
                >
                  Start Learning
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-optimizer-light">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <BookMarked className="h-8 w-8 text-optimizer-light" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Domain-Specific Prompting</h3>
                <p className="text-gray-600 mb-4">
                  Specialized prompt engineering for coding, creative writing, data analysis, and more
                </p>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm">4.9</span>
                  </div>
                  <span className="text-sm text-gray-500">10 Lessons · 5 hours</span>
                </div>
                <Button 
                  variant="outline"
                  className="w-full border-optimizer-light text-optimizer-secondary hover:bg-optimizer-light/20"
                  onClick={() => handleStartCourse("Domain-Specific Prompting")}
                >
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Community Workshops</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <Users className="h-12 w-12 text-optimizer-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Live Workshop: Mastering AI Collaboration</h3>
                  <p className="text-gray-600 mb-4">
                    Join industry experts to learn how to effectively collaborate with AI using advanced prompt engineering techniques.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <span className="text-sm font-medium block">Date</span>
                      <span className="text-sm text-gray-600">March 15, 2025</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium block">Time</span>
                      <span className="text-sm text-gray-600">10:00 AM - 12:00 PM PST</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium block">Format</span>
                      <span className="text-sm text-gray-600">Live Online Workshop</span>
                    </div>
                  </div>
                  <Button className="bg-optimizer-primary hover:bg-optimizer-secondary">
                    Register Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Play className="h-5 w-5 text-optimizer-primary" />
                  <span className="text-sm font-medium">Video Tutorial</span>
                </div>
                <h3 className="font-semibold mb-2">Getting Started with AI Prompt Engineering</h3>
                <p className="text-sm text-gray-600">Learn the fundamentals of prompt engineering in this beginner-friendly video tutorial.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5 text-optimizer-primary" />
                  <span className="text-sm font-medium">Guide</span>
                </div>
                <h3 className="font-semibold mb-2">The Ultimate Prompt Engineering Cheat Sheet</h3>
                <p className="text-sm text-gray-600">A comprehensive reference guide for crafting effective prompts for various AI models.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookMarked className="h-5 w-5 text-optimizer-primary" />
                  <span className="text-sm font-medium">E-Book</span>
                </div>
                <h3 className="font-semibold mb-2">Mastering AI Communication: A Comprehensive Guide</h3>
                <p className="text-sm text-gray-600">In-depth exploration of advanced prompt engineering techniques and strategies.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Learn;
