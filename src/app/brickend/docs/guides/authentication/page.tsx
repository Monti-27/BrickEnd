export default function AuthenticationGuidePage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 id="authentication" className="scroll-m-20 text-4xl font-bold tracking-tight">
            Authentication Guide
          </h1>
          <p className="text-xl text-muted-foreground">
            Implement secure authentication systems with JWT, OAuth, and session management using BrickEnd snippets.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Authentication is a critical component of any web application. This guide will walk you through 
            implementing secure authentication systems using BrickEnd snippets, covering everything from basic 
            user registration to advanced features like OAuth and multi-factor authentication.
          </p>
        </div>

        <div className="space-y-6">
          <h2 id="authentication-overview" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Authentication Overview
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Authentication is the process of verifying the identity of users accessing your application. 
            A robust authentication system should handle user registration, login, password management, 
            and session management securely.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            BrickEnd provides pre-built authentication snippets that handle common patterns like JWT tokens, 
            OAuth integration, password hashing, and session management. These snippets are production-ready 
            and follow security best practices.
          </p>
          
          <h3 id="authentication-methods" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Authentication Methods
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We support multiple authentication methods to suit different use cases:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Email/Password:</strong> Traditional username and password authentication</li>
            <li><strong>JWT Tokens:</strong> Stateless authentication using JSON Web Tokens</li>
            <li><strong>OAuth:</strong> Third-party authentication (Google, GitHub, etc.)</li>
            <li><strong>Session-based:</strong> Server-side session management</li>
            <li><strong>Multi-factor Authentication:</strong> Additional security layers</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 id="getting-started-with-authentication" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Getting Started with Authentication
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Let&apos;s start by setting up a basic authentication system. We&apos;ll use NextAuth.js 
            with a database adapter for a robust, production-ready solution.
          </p>
          
          <h3 id="prerequisites" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Prerequisites
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Before starting this guide, make sure you have:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A Next.js project set up</li>
            <li>A database (PostgreSQL, MySQL, or MongoDB)</li>
            <li>Basic knowledge of React and TypeScript</li>
            <li>Understanding of HTTP and REST APIs</li>
          </ul>
          
          <h3 id="installation" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Installation
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            First, install the required dependencies:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
              <code>npm install next-auth @prisma/client bcryptjs</code>
            </pre>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We&apos;ll use Prisma as our ORM and bcryptjs for password hashing. 
            NextAuth.js provides a complete authentication solution with built-in security features.
          </p>
        </div>

        <div className="space-y-6">
          <h2 id="database-setup" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Database Setup
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Set up your database schema to store user information securely. We&apos;ll use Prisma 
            for database management and migrations.
          </p>
          
          <h3 id="user-model" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            User Model
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Create a Prisma schema for user management:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
              <code>{`// prisma/schema.prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  password      String?
  image         String?
  emailVerified DateTime?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  accounts Account[]
  sessions Session[]
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}`}</code>
            </pre>
          </div>
          
          <h3 id="database-migration" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Database Migration
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Run the migration to create the database tables:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
              <code>npx prisma migrate dev --name init-auth</code>
            </pre>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="nextauth-configuration" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            NextAuth.js Configuration
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Configure NextAuth.js with your authentication providers and database adapter.
          </p>
          
          <h3 id="auth-config" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Auth Configuration
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Create the NextAuth configuration file:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
              <code>{`// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })

        if (!user || !user.password) {
          return null
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
      }
      return session
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="user-registration" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            User Registration
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Create an API route for user registration with proper validation and password hashing.
          </p>
          
          <h3 id="registration-api" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Registration API
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Create a registration endpoint:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
              <code>{`// app/api/auth/register/route.ts
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      }
    })

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    )
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="authentication-ui" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Authentication UI
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Create user-friendly authentication forms with proper validation and error handling.
          </p>
          
          <h3 id="signin-form" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Sign In Form
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Create a sign-in page with form validation:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm">
              <code>{`// app/auth/signin/page.tsx
"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError("Invalid credentials")
      } else {
        router.push("/dashboard")
      }
    } catch (error) {
      setError("An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-bold">Sign In</h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
              {error}
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  )
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="security-best-practices" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Security Best Practices
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Follow these security best practices to ensure your authentication system is secure:
          </p>
          
          <h3 id="password-security" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Password Security
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use bcrypt with a cost factor of 12 or higher</li>
            <li>Enforce strong password policies</li>
            <li>Implement rate limiting on login attempts</li>
            <li>Use HTTPS in production</li>
            <li>Store sensitive data in environment variables</li>
          </ul>
          
          <h3 id="session-management" className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Session Management
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use secure, HTTP-only cookies</li>
            <li>Implement session timeout</li>
            <li>Provide logout functionality</li>
            <li>Invalidate sessions on password change</li>
            <li>Use CSRF protection</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 id="next-steps" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Next Steps
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Now that you have a basic authentication system, consider implementing:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>OAuth Integration:</strong> Add social login providers</li>
            <li><strong>Email Verification:</strong> Verify user email addresses</li>
            <li><strong>Password Reset:</strong> Allow users to reset forgotten passwords</li>
            <li><strong>Multi-factor Authentication:</strong> Add an extra security layer</li>
            <li><strong>Role-based Access Control:</strong> Implement user roles and permissions</li>
          </ul>
          
          <div className="flex gap-4 pt-4">
            <a
              href="/brickend/docs/guides/oauth-integration"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              OAuth Integration Guide
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