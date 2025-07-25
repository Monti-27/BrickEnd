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
          title: "Analytics",
          url: "/dashboard/analytics",
        },
        {
          title: "Reports",
          url: "/dashboard/reports",
        },
      ],
    },
    {
      title: "Snippets",
      url: "/dashboard/snippets",
      icon: Code,
      items: [
        {
          title: "All Snippets",
          url: "/dashboard/snippets",
        },
        {
          title: "Create New",
          url: "/dashboard/snippets/new",
        },
        {
          title: "Categories",
          url: "/dashboard/snippets/categories",
        },
      ],
    },
    {
      title: "Database",
      url: "/dashboard/database",
      icon: Database,
      items: [
        {
          title: "Tables",
          url: "/dashboard/database/tables",
        },
        {
          title: "Queries",
          url: "/dashboard/database/queries",
        },
        {
          title: "Migrations",
          url: "/dashboard/database/migrations",
        },
      ],
    },
    {
      title: "API",
      url: "/dashboard/api",
      icon: Server,
      items: [
        {
          title: "Endpoints",
          url: "/dashboard/api/endpoints",
        },
        {
          title: "Documentation",
          url: "/dashboard/api/docs",
        },
        {
          title: "Rate Limiting",
          url: "/dashboard/api/limits",
        },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/dashboard/settings",
        },
        {
          title: "Security",
          url: "/dashboard/settings/security",
        },
        {
          title: "Integrations",
          url: "/dashboard/settings/integrations",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Authentication",
      url: "/dashboard/auth",
      icon: Shield,
    },
    {
      name: "API Management",
      url: "/dashboard/api-management",
      icon: Code,
    },
    {
      name: "User Management",
      url: "/dashboard/users",
      icon: Users,
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
