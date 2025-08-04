"use client"

import { useState } from "react"
import { Inter } from "next/font/google"
import { DocsSidebar } from "@/components/docs/docs-sidebar"
import { DocsTableOfContents } from "@/components/docs/docs-table-of-contents"
import { DocsSearch } from "@/components/docs/docs-search"
import { Button } from "@/components/ui/button"
import { 
  Menu, 
  Search, 
  X,
  ChevronRight,
  Github,
  Twitter,
  Database
} from "lucide-react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className={`min-h-screen bg-background ${inter.variable} font-sans`}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <Database className="size-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm">BrickEnd</span>
                <span className="text-xs text-muted-foreground">Backend Library</span>
              </div>
              <span className="text-sm text-muted-foreground ml-2">Docs</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Twitter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl p-4">
            <DocsSearch onClose={() => setSearchOpen(false)} />
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside className={`fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block ${
          sidebarOpen ? "block" : "hidden"
        }`}>
          <DocsSidebar />
        </aside>

        {/* Main Content */}
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            {children}
          </div>
          
          {/* Table of Contents */}
          <aside className="hidden text-sm xl:block">
            <div className="fixed top-20 w-64 overflow-y-auto max-h-[calc(100vh-6rem)]">
              <DocsTableOfContents />
            </div>
          </aside>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
} 