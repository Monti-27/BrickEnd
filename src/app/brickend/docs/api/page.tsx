export default function ApiReferencePage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 id="api-reference" className="scroll-m-20 text-4xl font-bold tracking-tight">
            API Reference
          </h1>
          <p className="text-xl text-muted-foreground">
            Complete API reference for all BrickEnd components, snippets, and utilities.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The BrickEnd API Reference provides comprehensive documentation for all our snippets, components, 
            and utilities. Each section includes detailed explanations, code examples, and usage patterns 
            to help you integrate BrickEnd into your projects effectively.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold">Snippets</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Browse and search all available code snippets by category and functionality.
            </p>
            <a href="/brickend/docs/api/snippets" className="absolute inset-0">
              <span className="sr-only">View Snippets API</span>
            </a>
          </div>

          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-semibold">Categories</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore snippets organized by functional categories and use cases.
            </p>
            <a href="/brickend/docs/api/categories" className="absolute inset-0">
              <span className="sr-only">View Categories API</span>
            </a>
          </div>

          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-semibold">Technologies</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Find snippets specific to your technology stack and frameworks.
            </p>
            <a href="/brickend/docs/api/technologies" className="absolute inset-0">
              <span className="sr-only">View Technologies API</span>
            </a>
          </div>

          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-semibold">Components</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Reusable UI components and utilities for building interfaces.
            </p>
            <a href="/brickend/docs/api/components" className="absolute inset-0">
              <span className="sr-only">View Components API</span>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="api-overview" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            API Overview
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            BrickEnd provides a comprehensive set of APIs and utilities designed to accelerate your 
            backend development. Our API is organized into logical sections that make it easy to find 
            the functionality you need.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Each API section includes detailed documentation with code examples, parameter descriptions, 
            return values, and usage patterns. We also provide TypeScript definitions for type-safe 
            development.
          </p>
          
          <h3 id="api-structure" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            API Structure
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Our API is organized into the following main sections:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Snippets:</strong> Individual code snippets with detailed documentation</li>
            <li><strong>Categories:</strong> Grouped snippets by functional area</li>
            <li><strong>Technologies:</strong> Technology-specific snippets and integrations</li>
            <li><strong>Components:</strong> Reusable UI components and utilities</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 id="using-the-api" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Using the API
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Learn how to effectively use BrickEnd APIs in your projects.
          </p>
          
          <h3 id="installation" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Installation
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            BrickEnd snippets can be used directly by copying the code, or you can install our 
            npm package for additional utilities:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
              <code>npm install @brickend/core</code>
            </pre>
          </div>
          
          <h3 id="basic-usage" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Basic Usage
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Most BrickEnd snippets are self-contained and can be used directly in your code:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
              <code>{`// Example: Using a database connection snippet
import { createDatabaseConnection } from '@brickend/core/database'

const db = createDatabaseConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
})

// Use the connection
const users = await db.query('SELECT * FROM users')`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="api-conventions" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            API Conventions
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Understanding the conventions used throughout the BrickEnd API.
          </p>
          
          <h3 id="naming-conventions" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Naming Conventions
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Functions:</strong> camelCase (e.g., `createUser`, `validateEmail`)</li>
            <li><strong>Constants:</strong> UPPER_SNAKE_CASE (e.g., `MAX_RETRY_ATTEMPTS`)</li>
            <li><strong>Types/Interfaces:</strong> PascalCase (e.g., `UserConfig`, `ApiResponse`)</li>
            <li><strong>Files:</strong> kebab-case (e.g., `user-authentication.ts`)</li>
          </ul>
          
          <h3 id="error-handling" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Error Handling
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            All BrickEnd APIs follow consistent error handling patterns:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Functions throw descriptive errors with meaningful messages</li>
            <li>Async functions return rejected promises for errors</li>
            <li>Error objects include error codes and context information</li>
            <li>Validation errors include field-specific details</li>
          </ul>
          
          <h3 id="type-safety" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Type Safety
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            BrickEnd provides full TypeScript support with comprehensive type definitions:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>All functions include TypeScript type annotations</li>
            <li>Generic types for flexible usage patterns</li>
            <li>Strict type checking for better development experience</li>
            <li>IntelliSense support in modern IDEs</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 id="versioning" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Versioning
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            BrickEnd follows semantic versioning (SemVer) for all API changes.
          </p>
          
          <h3 id="version-numbers" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Version Numbers
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Version numbers follow the format MAJOR.MINOR.PATCH:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>MAJOR:</strong> Breaking changes that require code updates</li>
            <li><strong>MINOR:</strong> New features added in a backward-compatible manner</li>
            <li><strong>PATCH:</strong> Bug fixes and minor improvements</li>
          </ul>
          
          <h3 id="migration-guide" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Migration Guide
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            When breaking changes are introduced, we provide detailed migration guides to help 
            you update your code safely and efficiently.
          </p>
        </div>

        <div className="space-y-6">
          <h2 id="contributing" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Contributing to the API
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Help improve BrickEnd by contributing new snippets and API improvements.
          </p>
          
          <h3 id="submitting-snippets" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Submitting Snippets
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            To contribute a new snippet:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Create a new snippet following our coding standards</li>
            <li>Include comprehensive documentation and examples</li>
            <li>Add appropriate tests to ensure reliability</li>
            <li>Submit a pull request with detailed description</li>
            <li>Our team will review and integrate your contribution</li>
          </ol>
          
          <h3 id="coding-standards" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Coding Standards
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Follow established naming conventions</li>
            <li>Include comprehensive error handling</li>
            <li>Write clear and detailed documentation</li>
            <li>Add TypeScript type definitions</li>
            <li>Include usage examples and edge cases</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 id="support" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Support
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Need help with the BrickEnd API? We&apos;re here to help.
          </p>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h3 id="documentation" className="text-xl font-semibold">Documentation</h3>
              <p className="text-muted-foreground leading-7">
                Browse our comprehensive documentation for detailed explanations and examples.
              </p>
            </div>
            <div className="space-y-3">
              <h3 id="community" className="text-xl font-semibold">Community</h3>
              <p className="text-muted-foreground leading-7">
                Join our community forum to ask questions and share solutions with other developers.
              </p>
            </div>
            <div className="space-y-3">
              <h3 id="github" className="text-xl font-semibold">GitHub</h3>
              <p className="text-muted-foreground leading-7">
                Report issues, request features, and contribute to the project on GitHub.
              </p>
            </div>
            <div className="space-y-3">
              <h3 id="email-support" className="text-xl font-semibold">Email Support</h3>
              <p className="text-muted-foreground leading-7">
                Contact our support team for personalized assistance with complex issues.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            <a
              href="/community"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Join Community
            </a>
            <a
              href="https://github.com/brickend/brickend"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 