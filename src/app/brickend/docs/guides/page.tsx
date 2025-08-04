export default function GuidesPage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 id="guides" className="scroll-m-20 text-4xl font-bold tracking-tight">
            Guides
          </h1>
          <p className="text-xl text-muted-foreground">
            Step-by-step guides to help you implement common backend patterns and features using BrickEnd snippets.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Our comprehensive guides walk you through implementing essential backend functionality using BrickEnd snippets. 
            Each guide includes detailed explanations, code examples, and best practices to help you build robust applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold">Authentication</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Implement secure authentication systems with JWT, OAuth, and session management.
            </p>
            <a href="/brickend/docs/guides/authentication" className="absolute inset-0">
              <span className="sr-only">View Authentication Guide</span>
            </a>
          </div>

          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="font-semibold">Database Setup</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Set up and configure databases with proper schemas, migrations, and connections.
            </p>
            <a href="/brickend/docs/guides/database-setup" className="absolute inset-0">
              <span className="sr-only">View Database Setup Guide</span>
            </a>
          </div>

          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold">API Development</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Build RESTful APIs with proper routing, validation, and error handling.
            </p>
            <a href="/brickend/docs/guides/api-development" className="absolute inset-0">
              <span className="sr-only">View API Development Guide</span>
            </a>
          </div>

          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="font-semibold">File Handling</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Handle file uploads, storage, and processing with proper validation and security.
            </p>
            <a href="/brickend/docs/guides/file-handling" className="absolute inset-0">
              <span className="sr-only">View File Handling Guide</span>
            </a>
          </div>

          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold">Security</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Implement security best practices including input validation, CORS, and rate limiting.
            </p>
            <a href="/brickend/docs/guides/security" className="absolute inset-0">
              <span className="sr-only">View Security Guide</span>
            </a>
          </div>

          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="font-semibold">Deployment</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Deploy your applications to production with proper configuration and monitoring.
            </p>
            <a href="/brickend/docs/guides/deployment" className="absolute inset-0">
              <span className="sr-only">View Deployment Guide</span>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="getting-started-with-guides" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Getting Started with Guides
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Our guides are designed to be comprehensive yet easy to follow. Each guide includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Prerequisites:</strong> What you need to know before starting</li>
            <li><strong>Step-by-step instructions:</strong> Detailed walkthroughs with code examples</li>
            <li><strong>Best practices:</strong> Industry-standard approaches and recommendations</li>
            <li><strong>Troubleshooting:</strong> Common issues and their solutions</li>
            <li><strong>Next steps:</strong> Where to go after completing the guide</li>
          </ul>
          
          <h3 id="choosing-the-right-guide" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Choosing the Right Guide
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Start with the guide that matches your current needs. If you&apos;re building a new application, 
            begin with Database Setup, then move to Authentication, and finally API Development. For existing 
            applications, you can jump directly to the specific guide you need.
          </p>
          
          <h3 id="guide-prerequisites" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Prerequisites
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Most guides assume you have basic knowledge of JavaScript/TypeScript and web development concepts. 
            Some guides may require familiarity with specific technologies like databases or cloud services. 
            Prerequisites are clearly listed at the beginning of each guide.
          </p>
        </div>
      </div>
    </div>
  )
} 