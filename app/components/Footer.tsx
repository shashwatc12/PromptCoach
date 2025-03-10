"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">PromptCoach</h3>
            <p className="text-gray-600">
              Master the art of prompt engineering with our AI-powered assistant.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Prompt Editor
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-gray-600 hover:text-gray-900">
                  Template Library
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-gray-600 hover:text-gray-900">
                  Learning Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/learn" className="text-gray-600 hover:text-gray-900">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-gray-600 hover:text-gray-900">
                  Best Practices
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-gray-600 hover:text-gray-900">
                  Examples
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} PromptCoach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
