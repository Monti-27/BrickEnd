"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  ChevronDown, 
  ChevronRight,
  BookOpen,
  Code,
  Database,
  Server,
  FileText,
  Users,
  MessageSquare,
  LifeBuoy
} from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  items?: NavItem[]
}

const documentationItems: NavItem[] = [
  {
    title: "Getting Started",
    href: "/brickend/docs",
    icon: BookOpen,
    items: [
      { title: "Introduction", href: "/brickend/docs" },
      { title: "Installation", href: "/brickend/docs/installation" },
      { title: "Quick Start", href: "/brickend/docs/quick-start" },
      { title: "Core Concepts", href: "/brickend/docs/core-concepts" },
    ]
  },
  {
    title: "Guides",
    href: "/brickend/docs/guides",
    icon: Code,
    items: [
      { title: "Authentication", href: "/brickend/docs/guides/authentication" },
      { title: "Database Setup", href: "/brickend/docs/guides/database-setup" },
      { title: "API Development", href: "/brickend/docs/guides/api-development" },
      { title: "File Handling", href: "/brickend/docs/guides/file-handling" },
      { title: "Security", href: "/brickend/docs/guides/security" },
      { title: "Deployment", href: "/brickend/docs/guides/deployment" },
    ]
  },
  {
    title: "API Reference",
    href: "/brickend/docs/api",
    icon: Database,
    items: [
      { title: "Snippets", href: "/brickend/docs/api/snippets" },
      { title: "Categories", href: "/brickend/docs/api/categories" },
      { title: "Technologies", href: "/brickend/docs/api/technologies" },
      { title: "Components", href: "/brickend/docs/api/components" },
    ]
  },
  {
    title: "Technologies",
    href: "/brickend/docs/technologies",
    icon: Server,
    items: [
      { title: "MongoDB", href: "/brickend/docs/technologies/mongodb" },
      { title: "Clerk", href: "/brickend/docs/technologies/clerk" },
      { title: "Prisma", href: "/brickend/docs/technologies/prisma" },
      { title: "NextAuth.js", href: "/brickend/docs/technologies/nextauth" },
      { title: "Stripe", href: "/brickend/docs/technologies/stripe" },
      { title: "AWS Services", href: "/brickend/docs/technologies/aws" },
    ]
  },
  {
    title: "Examples",
    href: "/brickend/docs/examples",
    icon: FileText,
    items: [
      { title: "Authentication", href: "/brickend/docs/examples/authentication" },
      { title: "Database", href: "/brickend/docs/examples/database" },
      { title: "API", href: "/brickend/docs/examples/api" },
    ]
  },
]

const resourcesItems = [
  { title: "Community", href: "/community", icon: Users },
  { title: "Support", href: "/support", icon: LifeBuoy },
  { title: "Feedback", href: "/feedback", icon: MessageSquare },
  { title: "Blog", href: "/blog", icon: FileText },
  { title: "Showcase", href: "/showcase", icon: Code },
  { title: "Templates", href: "/templates", icon: Database },
]

function NavItem({ item, level = 0 }: { item: NavItem; level?: number }) {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState(
    pathname.startsWith(item.href) || level === 0
  )
  const isActive = pathname === item.href
  const hasChildren = item.items && item.items.length > 0

  return (
    <div key={`${item.href}-${level}`}>
      <div className="flex items-center">
        {hasChildren && (
          <Button
            variant="ghost"
            size="sm"
            className="h-4 w-4 p-0 mr-1"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronRight className="h-3 w-3" />
            )}
          </Button>
        )}
        <Link
          href={item.href}
          className={cn(
            "flex items-center gap-2 rounded-md px-2 py-1 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
            isActive && "bg-accent text-accent-foreground font-medium",
            level > 0 && "ml-4"
          )}
        >
          {item.icon && <item.icon className="h-4 w-4" />}
          {item.title}
        </Link>
      </div>
      {hasChildren && expanded && (
        <div className="ml-4 mt-1 space-y-1">
          {item.items?.map((child, index) => (
            <NavItem key={`${child.href}-${level + 1}-${index}`} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

function ResourceItem({ item }: { item: { title: string; href: string; icon: React.ComponentType<{ className?: string }> } }) {
  const pathname = usePathname()
  const isActive = pathname === item.href

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-2 rounded-md px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
        isActive && "bg-accent text-accent-foreground font-medium"
      )}
    >
      <item.icon className="h-4 w-4" />
      {item.title}
    </Link>
  )
}

export function DocsSidebar() {
  return (
    <ScrollArea className="h-full py-6 pr-6 lg:py-8">
      <div className="space-y-8">
        {/* Documentation Section */}
        <div className="px-3 py-2">
          <h2 className="mb-4 px-4 text-lg font-semibold tracking-tight">
            Documentation
          </h2>
          <div className="space-y-1">
            {documentationItems.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </div>
        </div>
        
        {/* Resources Section */}
        <div className="px-3 py-2">
          <h2 className="mb-4 px-4 text-lg font-semibold tracking-tight">
            Resources
          </h2>
          <div className="space-y-1">
            {resourcesItems.map((item) => (
              <ResourceItem key={item.href} item={item} />
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  )
} 