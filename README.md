# PromptCoach

An AI prompt engineering assistant that helps you create, optimize, and manage your prompts for various AI models.

## Features

- **Prompt Editor**: Create, edit, and optimize your prompts with real-time feedback
- **Template Library**: Access pre-built templates for various use cases
- **Learning Resources**: Comprehensive guides to master prompt engineering
- **Workspace**: Save, manage, and share your optimized prompts

### Key Features

- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 🔄 Real-time prompt optimization
- 📝 Template management
- 🤝 Collaborative features
- 📱 Responsive design
- ⚡ Fast page loads
- 🔍 SEO optimized

## Tech Stack

- Next.js 13+
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Query
- Zod for validation

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/PromptCoach.git
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

### Preview Modes

1. **Development Mode** (with hot reloading)
```bash
npm run dev
# Access at http://localhost:3000
```

2. **Production Preview** (after building)
```bash
npm run build
npm run start
# Access at http://localhost:3000
```

3. **Static Export** (for static hosting)
```bash
npm run build
# Output will be in the 'out' directory
```

### Environment Variables

Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=your_api_url
# Add other environment variables as needed
```

### Debugging

1. **VS Code Debugging**
   - Install "JavaScript Debugger" extension
   - Use the included launch configurations in `.vscode/launch.json`
   - Press F5 to start debugging

2. **Browser DevTools**
   - Open browser developer tools (F12)
   - Navigate to the "Sources" tab for source maps
   - Use the "Components" tab with React DevTools

3. **Server-Side Debugging**
   - Use `console.log` in server components
   - Check terminal output for server logs
   - Use debugger in VS Code for server components

## Project Structure

```
app/
├── (routes)/           # Route groups
│   ├── workspace/     # Workspace route
│   ├── templates/     # Templates route
│   └── learn/        # Learning route
├── components/        # Shared components
├── hooks/            # Custom hooks
├── lib/             # Utility functions
└── types/           # TypeScript types

public/              # Static assets
```

## Learn More

For more information about prompt engineering:

- [OpenAI Documentation](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/claude/docs/introduction-to-prompt-engineering)
- [Prompt Engineering Best Practices](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/)

## Project Information

**URL**: https://lovable.dev/projects/0f709f26-1b2d-41cd-b66b-abb368832184

---

# Migration Documentation

## Migration to Next.js 13+ App Router

### Why We Migrated

We recently migrated from a Vite + React setup to Next.js 13+ with App Router. This migration was motivated by several key factors:

1. **Better Performance**
   - Server-side rendering (SSR) capabilities
   - Automatic code splitting
   - Improved page load times through static site generation (SSG)
   - Built-in image and font optimization

2. **Enhanced Developer Experience**
   - More intuitive file-based routing with the App Router
   - Built-in TypeScript support
   - Better development tooling and debugging
   - Simplified API routes and server components

3. **Modern Features**
   - Server and Client Components
   - Streaming and Suspense
   - Route Handlers
   - Server Actions
   - Metadata API for better SEO

### Migration Changes

1. **Project Structure**
   - Moved from `src/` based structure to Next.js `app/` directory
   - Implemented proper route grouping with `(routes)` convention
   - Organized components, hooks, and utilities in the app directory
   - Added proper TypeScript types for shared data

2. **Component Updates**
   - Added "use client" directives where needed
   - Migrated from React Router to Next.js App Router
   - Updated component imports to use absolute paths
   - Implemented proper loading states with Skeleton components

3. **Performance Improvements**
   - Added proper metadata for SEO
   - Implemented loading and error states for better UX
   - Created a template component for consistent layouts
   - Optimized client/server component separation

4. **Code Quality**
   - Added TypeScript interfaces for better type safety
   - Improved component organization
   - Enhanced error handling
   - Better state management patterns

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
