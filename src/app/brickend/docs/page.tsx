export default function DocsPage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 id="welcome-to-brickend" className="scroll-m-20 text-4xl font-bold tracking-tight">
            Welcome to BrickEnd
          </h1>
          <p className="text-xl text-muted-foreground">
            Your comprehensive backend snippet library. Save time with pre-built, customizable code snippets for all your backend development needs.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            BrickEnd is designed to be the ultimate companion for backend developers. Whether you&apos;re building a new application from scratch or adding features to an existing project, our comprehensive library of pre-built, tested, and customizable code snippets will help you ship faster and with confidence.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Our mission is to eliminate the repetitive boilerplate code that slows down development. Instead of writing the same authentication logic, database operations, or API endpoints over and over again, you can focus on what makes your application unique.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold">Quick Start</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Get started with BrickEnd in minutes. Learn the basics and create your first snippet.
            </p>
            <a href="/brickend/docs/quick-start" className="absolute inset-0">
              <span className="sr-only">View Quick Start</span>
            </a>
          </div>

          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold">Guides</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Step-by-step guides for authentication, database setup, and API development.
            </p>
            <a href="/brickend/docs/guides" className="absolute inset-0">
              <span className="sr-only">View Guides</span>
            </a>
          </div>

          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold">API Reference</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Complete API reference for all BrickEnd components and utilities.
            </p>
            <a href="/brickend/docs/api" className="absolute inset-0">
              <span className="sr-only">View API Reference</span>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="what-is-brickend" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            What is BrickEnd?
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            BrickEnd is a comprehensive backend snippet library designed to accelerate your development workflow. 
            Think of it as a component library, but for backend code. Instead of building authentication, database operations, 
            or API endpoints from scratch, you can use our pre-built, tested, and customizable snippets.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Whether you&apos;re building a new application or adding features to an existing one, BrickEnd provides 
            the building blocks you need to ship faster and with confidence. Our snippets are carefully crafted, 
            tested, and optimized for production use. They follow industry best practices and are designed to be 
            easily customizable for your specific needs.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The name &quot;BrickEnd&quot; comes from the idea that we provide the building blocks (bricks) for your 
            backend development. Just like how frontend component libraries provide reusable UI components, 
            BrickEnd provides reusable backend components that you can mix and match to build robust applications.
          </p>
          
          <h3 id="why-use-brickend" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Why Use BrickEnd?
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Modern web development requires a lot of repetitive backend code. Authentication, database operations, 
            API endpoints, file handling, and security measures are common across most applications. BrickEnd 
            eliminates the need to write this boilerplate code from scratch.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Our snippets are carefully crafted, tested, and optimized for production use. They follow industry 
            best practices and are designed to be easily customizable for your specific needs. We&apos;ve spent 
            countless hours researching, testing, and refining these patterns to ensure they work reliably in 
            real-world scenarios.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            By using BrickEnd, you can focus on what makes your application unique instead of reinventing the wheel. 
            Our snippets handle the common patterns so you can spend more time on business logic and user experience.
          </p>
        </div>

        <div className="space-y-6">
          <h2 id="key-features" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Key Features
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            BrickEnd comes packed with features designed to make your development experience as smooth and efficient as possible. 
            From production-ready snippets to comprehensive documentation, we&apos;ve thought of everything you need to 
            build robust backend applications.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h3 id="production-ready" className="text-xl font-semibold">Production Ready</h3>
              <p className="text-muted-foreground leading-7">
                All snippets are tested and follow best practices. Use them with confidence in production environments.
                Each snippet includes proper error handling, validation, and security measures. We&apos;ve battle-tested 
                these patterns in real applications to ensure they work reliably under load.
              </p>
              <p className="text-muted-foreground leading-7">
                Our snippets include comprehensive error handling, input validation, and security measures. They&apos;re 
                designed to handle edge cases and provide meaningful error messages when things go wrong.
              </p>
            </div>
            <div className="space-y-3">
              <h3 id="fully-customizable" className="text-xl font-semibold">Fully Customizable</h3>
              <p className="text-muted-foreground leading-7">
                Every snippet is designed to be easily adapted to your specific needs and requirements.
                Modify variables, add your business logic, and adapt them to your project structure.
              </p>
              <p className="text-muted-foreground leading-7">
                We provide clear documentation for each snippet, explaining what each part does and how to customize it. 
                You can modify the code to match your coding style, add additional features, or integrate with your 
                existing codebase seamlessly.
              </p>
            </div>
            <div className="space-y-3">
              <h3 id="multiple-technologies" className="text-xl font-semibold">Multiple Technologies</h3>
              <p className="text-muted-foreground leading-7">
                Support for MongoDB, Clerk, Prisma, NextAuth.js, Stripe, AWS, and many more technologies.
                Find snippets for your preferred tech stack and integrate them seamlessly.
              </p>
              <p className="text-muted-foreground leading-7">
                We support a wide range of popular technologies and frameworks. Whether you&apos;re using Node.js, 
                Python, or any other backend technology, you&apos;ll find snippets that work with your stack. 
                We also provide guidance on how to adapt snippets for different technologies.
              </p>
            </div>
            <div className="space-y-3">
              <h3 id="community-driven" className="text-xl font-semibold">Community Driven</h3>
              <p className="text-muted-foreground leading-7">
                Contribute your own snippets and help other developers save time with your patterns.
                Share your knowledge and learn from the community.
              </p>
              <p className="text-muted-foreground leading-7">
                BrickEnd is built by developers, for developers. We encourage contributions from the community 
                and provide tools to help you share your own snippets. Whether you&apos;re a seasoned developer 
                or just starting out, there&apos;s a place for you in our community.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="getting-started" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Getting Started
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Ready to start building with BrickEnd? Follow our step-by-step guides to get up and running quickly.
            We&apos;ll walk you through the installation process and show you how to use your first snippets.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Getting started with BrickEnd is straightforward and doesn&apos;t require any complex setup. You can 
            start using our snippets immediately by browsing our library online, or integrate our components 
            into your existing project for a more seamless experience.
          </p>
          
          <h3 id="installation" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Installation
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Getting started with BrickEnd is straightforward. You can either browse our snippet library online 
            or integrate our components into your existing project. No complex setup required.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            If you want to use BrickEnd in your project, you can install it via npm or yarn. We provide 
            detailed installation instructions for different frameworks and environments. Our snippets are 
            designed to work with popular frameworks like Next.js, Express, and others.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            For those who prefer to browse and copy snippets manually, our online library provides a clean, 
            searchable interface where you can find exactly what you need. Each snippet includes detailed 
            documentation and usage examples.
          </p>
          
          <h3 id="quick-start-guide" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Quick Start Guide
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Our quick start guide will help you understand the basics of BrickEnd and show you how to 
            implement your first authentication system or database operations.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The quick start guide walks you through creating a simple application using BrickEnd snippets. 
            You&apos;ll learn how to set up authentication, create database models, and build API endpoints 
            using our pre-built components. By the end of the guide, you&apos;ll have a working application 
            that demonstrates the power and flexibility of BrickEnd.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We&apos;ve designed the quick start guide to be accessible to developers of all skill levels. 
            Whether you&apos;re a beginner or an experienced developer, you&apos;ll find valuable insights 
            and practical examples that you can apply to your own projects.
          </p>
          
          <div className="flex gap-4 pt-4">
            <a
              href="/brickend/docs/installation"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Get Started
            </a>
            <a
              href="/brickend/docs/quick-start"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Quick Start
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="advanced-usage" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Advanced Usage
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Once you&apos;re comfortable with the basics, explore our advanced features and patterns. 
            Learn how to combine multiple snippets, create custom patterns, and optimize your applications.
          </p>
          
          <h3 id="custom-patterns" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Custom Patterns
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            BrickEnd snippets are designed to be composable. You can combine multiple snippets to create 
            complex patterns that match your specific requirements. Our documentation provides guidance on 
            how to effectively combine snippets and create custom patterns.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            For example, you might combine an authentication snippet with a database operation snippet to 
            create a user management system. Or combine API endpoint snippets with validation snippets to 
            create robust API endpoints with comprehensive input validation.
          </p>
          
          <h3 id="performance-optimization" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Performance Optimization
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Our snippets are optimized for performance, but there are always opportunities to further 
            optimize based on your specific use case. Learn about caching strategies, database optimization, 
            and other performance techniques.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We provide guidance on how to monitor and optimize the performance of your applications. 
            This includes database query optimization, caching strategies, and load testing techniques.
          </p>
        </div>

        <div className="space-y-6">
          <h2 id="troubleshooting" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Troubleshooting
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Encountering issues? Our troubleshooting guide covers common problems and their solutions. 
            From setup issues to runtime errors, we&apos;ve got you covered.
          </p>
          
          <h3 id="common-issues" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Common Issues
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We&apos;ve compiled a list of common issues that developers encounter when using BrickEnd. 
            Each issue includes a detailed explanation of the problem and step-by-step solutions.
          </p>
          
          <h3 id="debugging-tips" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Debugging Tips
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Learn effective debugging techniques for BrickEnd applications. From logging strategies to 
            error handling, we provide practical tips to help you identify and fix issues quickly.
          </p>
        </div>
      </div>
    </div>
  )
} 