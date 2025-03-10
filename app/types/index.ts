export interface Prompt {
  id: number;
  name: string;
  model: string;
  updated: string;
  author?: string;
  text?: string;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  text: string;
}

export type AIModel = 'GPT-4' | 'GPT-3.5' | 'Claude' | 'Llama';

export interface PromptOptimizationResult {
  score: number;
  suggestions: string[];
  improvedPrompt: string;
} 