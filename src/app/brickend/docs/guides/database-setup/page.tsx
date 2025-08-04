export default function DatabaseSetupGuidePage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 id="database-setup" className="scroll-m-20 text-4xl font-bold tracking-tight">
            Database Setup Guide
          </h1>
          <p className="text-xl text-muted-foreground">
            Set up and configure databases with proper schemas, migrations, and connections using BrickEnd snippets.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            A well-designed database is the foundation of any robust application. This guide will walk you through 
            setting up databases using Prisma ORM, creating proper schemas, managing migrations, and implementing 
            best practices for database design and performance.
          </p>
        </div>

        <div className="space-y-6">
          <h2 id="database-overview" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Database Overview
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            BrickEnd provides database setup snippets that work with popular databases including PostgreSQL, 
            MySQL, and MongoDB. We&apos;ll focus on Prisma ORM for type-safe database operations and 
            automatic migrations.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Prisma provides a modern database toolkit that includes an auto-generated query builder, 
            type-safe database client, and automatic migrations. This makes database operations both 
            safe and efficient.
          </p>
          
          <h3 id="supported-databases" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Supported Databases
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>PostgreSQL:</strong> Advanced open-source database with excellent performance</li>
            <li><strong>MySQL:</strong> Popular relational database with wide community support</li>
            <li><strong>SQLite:</strong> Lightweight database perfect for development and small applications</li>
            <li><strong>MongoDB:</strong> NoSQL database for flexible document storage</li>
            <li><strong>SQL Server:</strong> Microsoft&apos;s enterprise database solution</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 id="getting-started-with-database" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Getting Started with Database Setup
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Let&apos;s set up a database using Prisma ORM. We&apos;ll use PostgreSQL as our primary example, 
            but the concepts apply to other databases as well.
          </p>
          
          <h3 id="prerequisites" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Prerequisites
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Before starting this guide, make sure you have:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A Next.js project set up</li>
            <li>Node.js and npm installed</li>
            <li>A database server running (PostgreSQL, MySQL, etc.)</li>
            <li>Basic understanding of SQL and database concepts</li>
          </ul>
          
          <h3 id="installation" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Installation
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Install Prisma CLI and client:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
              <code>npm install prisma @prisma/client</code>
            </pre>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Initialize Prisma in your project:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
              <code>npx prisma init</code>
            </pre>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="database-configuration" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Database Configuration
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Configure your database connection and set up the Prisma schema.
          </p>
          
          <h3 id="environment-setup" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Environment Setup
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Create a `.env` file with your database connection string:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
              <code>{`# .env
DATABASE_URL="postgresql://username:password@localhost:5432/mydatabase"

# For MySQL
# DATABASE_URL="mysql://username:password@localhost:3306/mydatabase"

# For SQLite
# DATABASE_URL="file:./dev.db"`}</code>
            </pre>
          </div>
          
          <h3 id="prisma-schema" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Prisma Schema
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Create your Prisma schema file with models for your application:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
              <code>{`// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  posts Post[]
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  author User @relation(fields: [authorId], references: [id])
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="database-migrations" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Database Migrations
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Prisma Migrate helps you evolve your database schema over time in a predictable way.
          </p>
          
          <h3 id="creating-migrations" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Creating Migrations
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Generate and apply your first migration:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
              <code>npx prisma migrate dev --name init</code>
            </pre>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            This command will:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Detect changes in your schema</li>
            <li>Create a new migration file</li>
            <li>Apply the migration to your database</li>
            <li>Regenerate the Prisma Client</li>
          </ul>
          
          <h3 id="migration-files" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Migration Files
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Migration files are stored in the `prisma/migrations` directory. Each migration includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>migration.sql:</strong> The actual SQL commands to run</li>
            <li><strong>README.md:</strong> Documentation of the migration</li>
            <li><strong>checksum:</strong> Verification of migration integrity</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 id="prisma-client" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Prisma Client Setup
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Set up the Prisma Client for type-safe database operations in your application.
          </p>
          
          <h3 id="client-instance" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Client Instance
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Create a Prisma Client instance:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
              <code>{`// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma`}</code>
            </pre>
          </div>
          
          <h3 id="basic-operations" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Basic Operations
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Example of basic CRUD operations:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
              <code>{`// Create a user
const user = await prisma.user.create({
  data: {
    email: 'user@example.com',
    name: 'John Doe',
  },
})

// Find a user
const user = await prisma.user.findUnique({
  where: { email: 'user@example.com' },
})

// Update a user
const updatedUser = await prisma.user.update({
  where: { id: 'user-id' },
  data: { name: 'Jane Doe' },
})

// Delete a user
const deletedUser = await prisma.user.delete({
  where: { id: 'user-id' },
})

// Find users with posts
const usersWithPosts = await prisma.user.findMany({
  include: { posts: true },
})`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="database-design" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Database Design Best Practices
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Follow these best practices for designing robust and scalable databases.
          </p>
          
          <h3 id="normalization" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Normalization
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Normalize your database to reduce redundancy and improve data integrity:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>First Normal Form (1NF):</strong> Eliminate repeating groups</li>
            <li><strong>Second Normal Form (2NF):</strong> Remove partial dependencies</li>
            <li><strong>Third Normal Form (3NF):</strong> Remove transitive dependencies</li>
          </ul>
          
          <h3 id="indexing" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Indexing Strategy
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Use indexes to improve query performance:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Index primary keys automatically</li>
            <li>Index foreign keys for join performance</li>
            <li>Index frequently queried columns</li>
            <li>Use composite indexes for multi-column queries</li>
            <li>Avoid over-indexing to maintain write performance</li>
          </ul>
          
          <h3 id="relationships" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Relationship Design
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Design relationships carefully:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>One-to-One:</strong> Use for optional relationships</li>
            <li><strong>One-to-Many:</strong> Most common relationship type</li>
            <li><strong>Many-to-Many:</strong> Use junction tables</li>
            <li><strong>Self-referencing:</strong> For hierarchical data</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 id="performance-optimization" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Performance Optimization
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Optimize your database for better performance and scalability.
          </p>
          
          <h3 id="query-optimization" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Query Optimization
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use `select` to fetch only needed fields</li>
            <li>Implement pagination for large datasets</li>
            <li>Use `include` and `select` efficiently</li>
            <li>Avoid N+1 query problems</li>
            <li>Use database-specific optimizations</li>
          </ul>
          
          <h3 id="connection-pooling" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Connection Pooling
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Configure connection pooling for better performance:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
              <code>{`// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  // Connection pool configuration
  log: ['query', 'info', 'warn', 'error'],
})`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="production-deployment" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Production Deployment
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Deploy your database to production with proper configuration and monitoring.
          </p>
          
          <h3 id="environment-variables" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Environment Variables
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Set up production environment variables:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
              <code>{`# Production .env
DATABASE_URL="postgresql://username:password@host:5432/database"
DIRECT_URL="postgresql://username:password@host:5432/database"`}</code>
            </pre>
          </div>
          
          <h3 id="migration-deployment" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Migration Deployment
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Deploy migrations to production:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
              <code>npx prisma migrate deploy</code>
            </pre>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="next-steps" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Next Steps
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Now that you have a database set up, consider implementing:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Data Validation:</strong> Implement input validation and sanitization</li>
            <li><strong>Backup Strategy:</strong> Set up automated database backups</li>
            <li><strong>Monitoring:</strong> Implement database performance monitoring</li>
            <li><strong>Seeding:</strong> Create seed data for development and testing</li>
            <li><strong>Advanced Queries:</strong> Learn complex query patterns and aggregations</li>
          </ul>
          
          <div className="flex gap-4 pt-4">
            <a
              href="/brickend/docs/guides/api-development"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              API Development Guide
            </a>
            <a
              href="/brickend/docs/guides/security"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Security Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 