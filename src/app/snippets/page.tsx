"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Database, 
  Server, 
  Zap, 
  FileText, 
  Globe, 
  Lock, 
  Search, 
  Cloud,
  Code2,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

export default function SnippetsPage() {
  const categories = [
    {
      title: "Authentication",
      icon: Shield,
      description: "JWT, OAuth, Sessions, 2FA, and more",
      color: "bg-blue-100 text-blue-800",
      url: "/snippets/auth",
      count: 5
    },
    {
      title: "Database",
      icon: Database,
      description: "CRUD operations, migrations, relationships",
      color: "bg-green-100 text-green-800",
      url: "/snippets/database",
      count: 5
    },
    {
      title: "MongoDB",
      icon: Database,
      description: "Connection, CRUD, aggregation, indexing",
      color: "bg-emerald-100 text-emerald-800",
      url: "/snippets/mongodb",
      count: 5
    },
    {
      title: "Clerk",
      icon: Shield,
      description: "Setup, user management, hooks, webhooks",
      color: "bg-purple-100 text-purple-800",
      url: "/snippets/clerk",
      count: 5
    },
    {
      title: "Prisma",
      icon: Database,
      description: "Schema, CRUD, relationships, migrations",
      color: "bg-cyan-100 text-cyan-800",
      url: "/snippets/prisma",
      count: 5
    },
    {
      title: "NextAuth.js",
      icon: Shield,
      description: "Setup, providers, sessions, callbacks",
      color: "bg-orange-100 text-orange-800",
      url: "/snippets/nextauth",
      count: 5
    },
    {
      title: "Stripe",
      icon: Code2,
      description: "Payments, subscriptions, webhooks",
      color: "bg-indigo-100 text-indigo-800",
      url: "/snippets/stripe",
      count: 5
    },
    {
      title: "AWS Services",
      icon: Cloud,
      description: "S3, Lambda, DynamoDB, SES",
      color: "bg-yellow-100 text-yellow-800",
      url: "/snippets/aws",
      count: 5
    },
    {
      title: "API Development",
      icon: Server,
      description: "REST, GraphQL, rate limiting, CORS",
      color: "bg-red-100 text-red-800",
      url: "/snippets/api",
      count: 5
    },
    {
      title: "Middleware",
      icon: Zap,
      description: "Error handling, logging, validation",
      color: "bg-pink-100 text-pink-800",
      url: "/snippets/middleware",
      count: 5
    },
    {
      title: "File Handling",
      icon: FileText,
      description: "Upload, processing, generation",
      color: "bg-gray-100 text-gray-800",
      url: "/snippets/files",
      count: 4
    },
    {
      title: "External Services",
      icon: Globe,
      description: "Email, payments, storage, SMS",
      color: "bg-teal-100 text-teal-800",
      url: "/snippets/services",
      count: 4
    },
    {
      title: "Security",
      icon: Lock,
      description: "Sanitization, injection prevention",
      color: "bg-rose-100 text-rose-800",
      url: "/snippets/security",
      count: 4
    },
    {
      title: "Testing",
      icon: Search,
      description: "Unit, integration, API tests",
      color: "bg-violet-100 text-violet-800",
      url: "/snippets/testing",
      count: 4
    },
    {
      title: "Deployment",
      icon: Cloud,
      description: "Docker, CI/CD, monitoring",
      color: "bg-slate-100 text-slate-800",
      url: "/snippets/deployment",
      count: 4
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">Snippet Library</h1>
        </div>
        <p className="text-muted-foreground">
          Browse our comprehensive collection of backend code snippets. Find exactly what you need to accelerate your development.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Total Snippets</span>
            </div>
            <p className="text-2xl font-bold">75+</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Categories</span>
            </div>
            <p className="text-2xl font-bold">15</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Technologies</span>
            </div>
            <p className="text-2xl font-bold">8</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Updated</span>
            </div>
            <p className="text-2xl font-bold">Today</p>
          </CardContent>
        </Card>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.title} href={category.url}>
            <Card className="hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline">{category.count} snippets</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Explore snippets</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Can&apos;t find what you&apos;re looking for?</h3>
            <p className="text-muted-foreground">
              Request a new snippet or contribute to our library
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline">
                Request Snippet
              </Button>
              <Button>
                Contribute
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 