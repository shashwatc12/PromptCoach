"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold text-optimizer-primary">
            PromptCoach
          </Link>
          
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/templates" className="text-gray-600 hover:text-gray-900">
              Templates
            </Link>
            <Link href="/learn" className="text-gray-600 hover:text-gray-900">
              Learn
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/workspace">
            <Button variant="outline">My Workspace</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
