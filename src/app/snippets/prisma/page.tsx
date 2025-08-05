"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/ui/code-block"
import { 
  Database, 
  Code2, 
  FileText, 
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Zap,
  Shield,
  GitBranch,
  Package,
  Terminal,
  BookOpen,
  Copy,
  Play
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function PrismaPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  const features = [
    {
      icon: Database,
      title: "Type-Safe Database Access",
      description: "Prisma automatically generates TypeScript types for your database, so you get autocomplete and catch errors before they happen"
    },
    {
      icon: Shield,
      title: "Migration Management",
      description: "Safely update your database schema with version-controlled migrations that track every change"
    },
    {
      icon: Zap,
      title: "Intuitive Query Builder",
      description: "Write database queries using simple, readable JavaScript instead of complex SQL strings"
    },
    {
      icon: GitBranch,
      title: "Smart Relationship Handling",
      description: "Prisma automatically handles the complex relationships between your data tables"
    }
  ]

  const useCases = [
    {
      title: "Full-Stack Web Apps",
      description: "Perfect for building modern web applications where you need reliable database access",
      examples: ["Next.js applications", "React frontends", "Node.js backends"]
    },
    {
      title: "API Development",
      description: "Create robust APIs that connect to your database with minimal boilerplate code",
      examples: ["REST APIs", "GraphQL servers", "Microservices"]
    },
    {
      title: "Data-Driven Applications",
      description: "Build applications that need to handle complex data relationships and queries",
      examples: ["E-commerce platforms", "Content management systems", "Analytics dashboards"]
    },
    {
      title: "Rapid Prototyping",
      description: "Quickly build and iterate on your ideas with Prisma&apos;s developer-friendly tools",
      examples: ["MVPs", "Proof of concepts", "Internal tools"]
    }
  ]

  const installationSteps = [
    {
      step: 1,
      title: "Install Prisma CLI",
      command: "npm install prisma --save-dev",
      description: "This installs Prisma's command-line tools that help you manage your database"
    },
    {
      step: 2,
      title: "Initialize Your Project",
      command: "npx prisma init",
      description: "This creates your first Prisma schema file and sets up your database connection"
    },
    {
      step: 3,
      title: "Install Prisma Client",
      command: "npm install @prisma/client",
      description: "This is the library you'll use in your code to interact with your database"
    },
    {
      step: 4,
      title: "Generate Your Client",
      command: "npx prisma generate",
      description: "This creates TypeScript types and the client code based on your database schema"
    }
  ]

  const projectStructure = [
    {
      path: "prisma/",
      description: "This folder contains everything related to your database setup",
      children: [
        { path: "schema.prisma", description: "This is where you define your database structure and models" },
        { path: "migrations/", description: "Contains all the database changes you've made over time" },
        { path: ".env", description: "Your database connection string and other environment variables" }
      ]
    },
    {
      path: "src/",
      description: "Your application code goes here",
      children: [
        { path: "lib/prisma.ts", description: "A single instance of Prisma Client that you'll use throughout your app" },
        { path: "app/api/", description: "Your API routes that use Prisma to interact with the database" },
        { path: "components/", description: "Your React components and UI code" }
      ]
    },
    {
      path: "package.json",
      description: "Lists all your project dependencies and scripts"
    }
  ]

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 p-3 rounded-lg">
            <img 
              src="https://avatars.githubusercontent.com/u/17219288?s=200&v=4" 
              alt="Prisma" 
              width="32" 
              height="32"
              className="w-8 h-8 rounded"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Prisma</h1>
            <p className="text-muted-foreground">The modern way to work with databases in Node.js and TypeScript</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Database ORM</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Auto-generated</Badge>
          <Badge variant="secondary">Migration</Badge>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="installation">Installation</TabsTrigger>
          <TabsTrigger value="structure">Project Structure</TabsTrigger>
          <TabsTrigger value="brickend">BrickEnd Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* What is Prisma */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <img 
                  src="https://avatars.githubusercontent.com/u/17219288?s=200&v=4" 
                  alt="Prisma" 
                  width="20" 
                  height="20"
                  className="w-5 h-5 rounded"
                />
                What is Prisma?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Think of Prisma as your database&apos;s best friend. It&apos;s a toolkit that makes working with databases 
                much easier and safer. Instead of writing raw SQL queries, you get to work with your database 
                using familiar JavaScript/TypeScript code.
              </p>
              
              <p className="text-muted-foreground">
                Prisma comes with three main tools that work together to make your database experience smooth:
              </p>
              
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <h4 className="font-semibold">Prisma Client</h4>
                  <p className="text-sm text-muted-foreground">
                    This is the main tool you&apos;ll use in your code. It automatically generates TypeScript types 
                    for your database, so you get autocomplete and catch errors before they happen.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Prisma Migrate</h4>
                  <p className="text-sm text-muted-foreground">
                    This helps you safely update your database structure over time. It keeps track of all your 
                    changes so you can roll back if needed.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Prisma Studio</h4>
                  <p className="text-sm text-muted-foreground">
                    A visual interface where you can view and edit your database data directly, perfect for 
                    debugging and data management.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Why Developers Love Prisma</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 p-2 rounded-lg">
                      <feature.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Use Cases */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>What Can You Build with Prisma?</CardTitle>
              <CardDescription>
                Prisma is versatile and works great for all kinds of applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {useCases.map((useCase, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-semibold">{useCase.title}</h4>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {useCase.examples.map((example, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="installation" className="space-y-6">
          {/* Installation Guide */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Getting Started with Prisma
              </CardTitle>
              <CardDescription>
                Follow these simple steps to add Prisma to your project
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Quick Installation</h4>
                <p className="text-sm text-muted-foreground">
                  Run these commands in your project directory to set up Prisma:
                </p>
                <CodeBlock
                  language="bash"
                  filename="installation.sh"
                  code={`# Install Prisma CLI
npm install prisma --save-dev

# Initialize Prisma in your project
npx prisma init

# Install Prisma Client
npm install @prisma/client

# Generate the client (run this after defining your schema)
npx prisma generate`}
                />
              </div>
              
              {installationSteps.map((step) => (
                <div key={step.step} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
                      {step.step}
                    </div>
                    <h4 className="font-semibold">{step.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground ml-11">{step.description}</p>
                  <div className="ml-11">
                    <CodeBlock
                      code={step.command}
                      language="bash"
                      filename={`step-${step.step}.sh`}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Database Setup */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Connecting to Your Database</CardTitle>
              <CardDescription>
                Prisma works with most popular databases - choose the one that fits your needs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">Supported Databases</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Prisma supports all the major databases you might want to use:
                </p>
                <div className="grid gap-2 md:grid-cols-3">
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">MySQL</Badge>
                  <Badge variant="outline">SQLite</Badge>
                  <Badge variant="outline">SQL Server</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">CockroachDB</Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Setting Up Your Connection</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  You&apos;ll need to add your database connection string to your environment variables:
                </p>
                <CodeBlock
                  code={`DATABASE_URL="postgresql://user:password@localhost:5432/mydb"`}
                  language="env"
                  filename=".env"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Don&apos;t worry if you don&apos;t have a database yet - Prisma can help you set one up locally for development.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="structure" className="space-y-6">
          {/* Project Structure */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Understanding Your Project Structure
              </CardTitle>
              <CardDescription>
                Here&apos;s how Prisma organizes your project files
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projectStructure.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 px-2 py-1 rounded text-sm font-mono">
                        {item.path}
                      </div>
                      <span className="text-sm text-muted-foreground">{item.description}</span>
                    </div>
                    {item.children && (
                      <div className="ml-6 space-y-1">
                        {item.children.map((child, childIndex) => (
                          <div key={childIndex} className="flex items-center gap-2">
                            <div className="bg-muted px-2 py-1 rounded text-sm font-mono">
                              {child.path}
                            </div>
                            <span className="text-sm text-muted-foreground">{child.description}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Example Schema */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Your First Prisma Schema</CardTitle>
              <CardDescription>
                Here&apos;s a simple example of what a Prisma schema looks like
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                This is what a basic Prisma schema file looks like. It defines your database structure in a 
                simple, readable format:
              </p>
              <CodeBlock
                code={`// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}`}
                language="prisma"
                filename="schema.prisma"
              />
              <p className="text-sm text-muted-foreground mt-4">
                This creates two tables: Users and Posts, with a relationship between them. Prisma will 
                automatically generate TypeScript types and a client for you to use in your code.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="brickend" className="space-y-6">
          {/* BrickEnd Tools */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                Build Your Schema with BrickEnd
              </CardTitle>
              <CardDescription>
                Create your Prisma schema visually - no more guessing or manual typing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Why Use Our Visual Schema Builder?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Instead of manually writing your Prisma schema, you can build it visually and get 
                  copy-paste ready code instantly. Here&apos;s what makes it special:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Visual Schema Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Real-time Validation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Relationship Mapping</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Copy-Paste Ready Code</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Best Practices Included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Multiple Database Support</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50/10 to-blue-50/10 dark:from-cyan-950/20 dark:to-blue-950/20 p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 p-2 rounded-lg">
                    <Play className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ready to Build Your Schema?</h4>
                    <p className="text-sm text-muted-foreground">
                      Create your Prisma schema visually and get copy-paste ready code in minutes
                    </p>
                  </div>
                </div>
                <Link href="/snippets/prisma/schema-definition">
                  <Button className="w-full">
                    <Code2 className="mr-2 h-4 w-4" />
                    Start Building Schema
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Official Documentation */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Learn More About Prisma
              </CardTitle>
              <CardDescription>
                Dive deeper into Prisma with these official resources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-card">
                  <div>
                    <h4 className="font-semibold">Prisma Documentation</h4>
                    <p className="text-sm text-muted-foreground">
                      The complete guide to everything Prisma can do
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.prisma.io/docs" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-card">
                  <div>
                    <h4 className="font-semibold">Prisma Examples</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-world examples showing how to use Prisma in different scenarios
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/prisma/prisma-examples" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-card">
                  <div>
                    <h4 className="font-semibold">Prisma Studio</h4>
                    <p className="text-sm text-muted-foreground">
                      A visual interface to explore and edit your database data
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.prisma.io/docs/concepts/tools/prisma-studio" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 