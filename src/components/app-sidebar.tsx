"use client"

import * as React from "react"
import { useSession } from "next-auth/react"
import {
  Database,
  Users,
  Settings2,
  BarChart3,
  Shield,
  Code,
  Server,
  LifeBuoy,
  Send,
  Key,
  Lock,
  FileText,
  Zap,
  Globe,
  Cloud,
  MessageSquare,
  Palette,
  Search,
  Filter,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navData = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: BarChart3,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/dashboard",
        },
        {
          title: "Recent Snippets",
          url: "/dashboard/recent",
        },
        {
          title: "Favorites",
          url: "/dashboard/favorites",
        },
      ],
    },
    {
      title: "Authentication",
      url: "/snippets/auth",
      icon: Shield,
      items: [
        {
          title: "JWT Tokens",
          url: "/snippets/auth/jwt-tokens",
        },
        {
          title: "OAuth Providers",
          url: "/snippets/auth/oauth-providers",
        },
        {
          title: "Session Management",
          url: "/snippets/auth/session-management",
        },
        {
          title: "Password Reset",
          url: "/snippets/auth/password-reset",
        },
        {
          title: "2FA Setup",
          url: "/snippets/auth/2fa-setup",
        },
      ],
    },
    {
      title: "Database",
      url: "/snippets/database",
      icon: Database,
      items: [
        {
          title: "CRUD Operations",
          url: "/snippets/database/crud-operations",
        },
        {
          title: "Migrations",
          url: "/snippets/database/migrations",
        },
        {
          title: "Seeding",
          url: "/snippets/database/seeding",
        },
        {
          title: "Relationships",
          url: "/snippets/database/relationships",
        },
        {
          title: "Transactions",
          url: "/snippets/database/transactions",
        },
      ],
    },
    {
      title: "MongoDB",
      url: "/snippets/mongodb",
      icon: Database,
      items: [
        {
          title: "Connection Setup",
          url: "/snippets/mongodb/connection-setup",
        },
        {
          title: "CRUD Operations",
          url: "/snippets/mongodb/crud-operations",
        },
        {
          title: "Aggregation Pipeline",
          url: "/snippets/mongodb/aggregation-pipeline",
        },
        {
          title: "Indexing",
          url: "/snippets/mongodb/indexing",
        },
        {
          title: "MongoDB Atlas",
          url: "/snippets/mongodb/atlas",
        },
      ],
    },
    {
      title: "Clerk",
      url: "/snippets/clerk",
      icon: Shield,
      items: [
        {
          title: "Setup & Configuration",
          url: "/snippets/clerk/setup-configuration",
        },
        {
          title: "User Management",
          url: "/snippets/clerk/user-management",
        },
        {
          title: "Authentication Hooks",
          url: "/snippets/clerk/auth-hooks",
        },
        {
          title: "Protected Routes",
          url: "/snippets/clerk/protected-routes",
        },
        {
          title: "Webhooks",
          url: "/snippets/clerk/webhooks",
        },
      ],
    },
    {
      title: "Prisma",
      url: "/snippets/prisma",
      icon: Database,
      items: [
        {
          title: "Schema Definition",
          url: "/snippets/prisma/schema-definition",
        },
        {
          title: "CRUD Operations",
          url: "/snippets/prisma/crud-operations",
        },
        {
          title: "Relationships",
          url: "/snippets/prisma/relationships",
        },
        {
          title: "Migrations",
          url: "/snippets/prisma/migrations",
        },
        {
          title: "Seeding",
          url: "/snippets/prisma/seeding",
        },
      ],
    },
    {
      title: "NextAuth.js",
      url: "/snippets/nextauth",
      icon: Shield,
      items: [
        {
          title: "Setup & Configuration",
          url: "/snippets/nextauth/setup-configuration",
        },
        {
          title: "Providers",
          url: "/snippets/nextauth/providers",
        },
        {
          title: "Session Management",
          url: "/snippets/nextauth/session-management",
        },
        {
          title: "Protected Routes",
          url: "/snippets/nextauth/protected-routes",
        },
        {
          title: "Callbacks",
          url: "/snippets/nextauth/callbacks",
        },
      ],
    },
    {
      title: "Stripe",
      url: "/snippets/stripe",
      icon: Key,
      items: [
        {
          title: "Setup & Configuration",
          url: "/snippets/stripe/setup-configuration",
        },
        {
          title: "Payment Intents",
          url: "/snippets/stripe/payment-intents",
        },
        {
          title: "Subscriptions",
          url: "/snippets/stripe/subscriptions",
        },
        {
          title: "Webhooks",
          url: "/snippets/stripe/webhooks",
        },
        {
          title: "Customer Management",
          url: "/snippets/stripe/customer-management",
        },
      ],
    },
    {
      title: "AWS Services",
      url: "/snippets/aws",
      icon: Cloud,
      items: [
        {
          title: "S3 Setup",
          url: "/snippets/aws/s3-setup",
        },
        {
          title: "Lambda Functions",
          url: "/snippets/aws/lambda-functions",
        },
        {
          title: "DynamoDB",
          url: "/snippets/aws/dynamodb",
        },
        {
          title: "SES Email",
          url: "/snippets/aws/ses-email",
        },
        {
          title: "CloudFront",
          url: "/snippets/aws/cloudfront",
        },
      ],
    },
    {
      title: "API Development",
      url: "/snippets/api",
      icon: Server,
      items: [
        {
          title: "REST Endpoints",
          url: "/snippets/api/rest-endpoints",
        },
        {
          title: "GraphQL",
          url: "/snippets/api/graphql",
        },
        {
          title: "Rate Limiting",
          url: "/snippets/api/rate-limiting",
        },
        {
          title: "CORS Setup",
          url: "/snippets/api/cors-setup",
        },
        {
          title: "API Documentation",
          url: "/snippets/api/documentation",
        },
      ],
    },
    {
      title: "Middleware",
      url: "/snippets/middleware",
      icon: Zap,
      items: [
        {
          title: "Error Handling",
          url: "/snippets/middleware/error-handling",
        },
        {
          title: "Logging",
          url: "/snippets/middleware/logging",
        },
        {
          title: "Validation",
          url: "/snippets/middleware/validation",
        },
        {
          title: "Caching",
          url: "/snippets/middleware/caching",
        },
        {
          title: "Compression",
          url: "/snippets/middleware/compression",
        },
      ],
    },
    {
      title: "File Handling",
      url: "/snippets/files",
      icon: FileText,
      items: [
        {
          title: "File Upload",
          url: "/snippets/files/file-upload",
        },
        {
          title: "Image Processing",
          url: "/snippets/files/image-processing",
        },
        {
          title: "PDF Generation",
          url: "/snippets/files/pdf-generation",
        },
        {
          title: "CSV Processing",
          url: "/snippets/files/csv-processing",
        },
      ],
    },
    {
      title: "External Services",
      url: "/snippets/services",
      icon: Globe,
      items: [
        {
          title: "Email Services",
          url: "/snippets/services/email-services",
        },
        {
          title: "Payment Gateways",
          url: "/snippets/services/payment-gateways",
        },
        {
          title: "Cloud Storage",
          url: "/snippets/services/cloud-storage",
        },
        {
          title: "SMS Services",
          url: "/snippets/services/sms-services",
        },
      ],
    },
    {
      title: "Security",
      url: "/snippets/security",
      icon: Lock,
      items: [
        {
          title: "Input Sanitization",
          url: "/snippets/security/input-sanitization",
        },
        {
          title: "SQL Injection",
          url: "/snippets/security/sql-injection",
        },
        {
          title: "XSS Prevention",
          url: "/snippets/security/xss-prevention",
        },
        {
          title: "CSRF Protection",
          url: "/snippets/security/csrf-protection",
        },
      ],
    },
    {
      title: "Testing",
      url: "/snippets/testing",
      icon: Search,
      items: [
        {
          title: "Unit Tests",
          url: "/snippets/testing/unit-tests",
        },
        {
          title: "Integration Tests",
          url: "/snippets/testing/integration-tests",
        },
        {
          title: "API Tests",
          url: "/snippets/testing/api-tests",
        },
        {
          title: "Mock Data",
          url: "/snippets/testing/mock-data",
        },
      ],
    },
    {
      title: "Deployment",
      url: "/snippets/deployment",
      icon: Cloud,
      items: [
        {
          title: "Docker Setup",
          url: "/snippets/deployment/docker-setup",
        },
        {
          title: "Environment Config",
          url: "/snippets/deployment/environment-config",
        },
        {
          title: "CI/CD Pipelines",
          url: "/snippets/deployment/cicd-pipelines",
        },
        {
          title: "Monitoring",
          url: "/snippets/deployment/monitoring",
        },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
      items: [
        {
          title: "Profile",
          url: "/dashboard/settings/profile",
        },
        {
          title: "Preferences",
          url: "/dashboard/settings/preferences",
        },
        {
          title: "API Keys",
          url: "/dashboard/settings/api-keys",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Documentation",
      url: "/brickend/docs",
      icon: FileText,
    },
    {
      title: "Community",
      url: "/community",
      icon: MessageSquare,
    },
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
  ],
  projects: [
    {
      name: "My Snippets",
      url: "/dashboard/my-snippets",
      icon: Code,
    },
    {
      name: "Shared Snippets",
      url: "/dashboard/shared",
      icon: Users,
    },
    {
      name: "Templates",
      url: "/dashboard/templates",
      icon: Palette,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession()

  // Create user data from session or fallback
  const userData = {
    name: session?.user?.name || "BrickEnd User",
    email: session?.user?.email || "user@brickend.com",
    avatar: session?.user?.image || "/avatars/admin.jpg",
  }

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Database className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">BrickEnd</span>
                  <span className="truncate text-xs">Backend Library</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navData.navMain} />
        <NavProjects projects={navData.projects} />
        <NavSecondary items={navData.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  )
}
