
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout, Link, RefreshCw, Wand2 } from 'lucide-react';

const PromptStrategies = () => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Key Strategies in Prompt Engineering</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <Layout className="h-6 w-6 text-optimizer-primary" />
            <div>
              <CardTitle>Prompt Design and Structure</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm text-gray-600">
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide all relevant information necessary for the task, including instructions, examples, and context.</li>
                <li>Organize the prompt clearly, using appropriate ordering, labeling, and delimiters to help the model parse the information effectively.</li>
              </ul>
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <Link className="h-6 w-6 text-optimizer-primary" />
            <div>
              <CardTitle>Chain-of-Thought (CoT) Prompting</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm text-gray-600">
              <ul className="list-disc pl-5 space-y-2">
                <li>Encourage the model to solve problems through a series of intermediate reasoning steps, mimicking a train of thought.</li>
                <li>For example, breaking down a math problem step-by-step can lead to more accurate answers.</li>
              </ul>
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <RefreshCw className="h-6 w-6 text-optimizer-primary" />
            <div>
              <CardTitle>Iterative Prompt Refinement</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm text-gray-600">
              <ul className="list-disc pl-5 space-y-2">
                <li>Prompt design often requires multiple iterations to achieve the desired response consistently.</li>
                <li>Applying best practices incrementally and testing for performance can help refine prompts effectively.</li>
              </ul>
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <Wand2 className="h-6 w-6 text-optimizer-primary" />
            <div>
              <CardTitle>AI-Powered Prompt Writing Tools</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm text-gray-600">
              <ul className="list-disc pl-5 space-y-2">
                <li>Tools like Google's "Generate prompt" feature can transform simple objectives into tailored, effective prompts.</li>
                <li>These tools reduce the guesswork in prompt engineering and help create more effective prompts.</li>
              </ul>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PromptStrategies;
