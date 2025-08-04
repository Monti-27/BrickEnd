"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  X, 
  ArrowDown
} from "lucide-react"

interface SearchResult {
  title: string
  description: string
  url: string
  category: string
}

const searchData: SearchResult[] = [
  {
    title: "Getting Started",
    description: "Learn the basics of BrickEnd and get started quickly",
    url: "/brickend/docs",
    category: "Getting Started"
  },
  {
    title: "Installation",
    description: "Install BrickEnd in your project",
    url: "/brickend/docs/installation",
    category: "Getting Started"
  },
  {
    title: "Authentication",
    description: "Set up authentication with JWT, OAuth, and more",
    url: "/brickend/docs/guides/authentication",
    category: "Guides"
  },
  {
    title: "Database Setup",
    description: "Configure your database with Prisma, MongoDB, and more",
    url: "/brickend/docs/guides/database-setup",
    category: "Guides"
  },
  {
    title: "API Development",
    description: "Build REST and GraphQL APIs",
    url: "/brickend/docs/guides/api-development",
    category: "Guides"
  },
  {
    title: "MongoDB",
    description: "Use MongoDB with BrickEnd snippets",
    url: "/brickend/docs/technologies/mongodb",
    category: "Technologies"
  },
  {
    title: "Clerk",
    description: "Integrate Clerk authentication",
    url: "/brickend/docs/technologies/clerk",
    category: "Technologies"
  },
  {
    title: "Prisma",
    description: "Use Prisma ORM with BrickEnd",
    url: "/brickend/docs/technologies/prisma",
    category: "Technologies"
  },
]

interface DocsSearchProps {
  onClose: () => void
}

export function DocsSearch({ onClose }: DocsSearchProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (query.trim() === "") {
      setResults([])
      return
    }

    const filtered = searchData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    )
    setResults(filtered)
    setSelectedIndex(0)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => 
        prev < results.length - 1 ? prev + 1 : prev
      )
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => prev > 0 ? prev - 1 : prev)
    } else if (e.key === "Enter" && results[selectedIndex]) {
      e.preventDefault()
      window.location.href = results[selectedIndex].url
    }
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search documentation..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="pl-10 pr-10 h-12 text-lg"
          autoFocus
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <a
              key={`${result.url}-${index}`}
              href={result.url}
              className={`block p-4 hover:bg-accent transition-colors ${
                index === selectedIndex ? "bg-accent" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{result.title}</span>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {result.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {result.description}
                  </p>
                </div>
                {index === selectedIndex && (
                  <ArrowDown className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </a>
          ))}
        </div>
      )}

      {query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg p-4 text-center text-muted-foreground">
          No results found for &quot;{query}&quot;
        </div>
      )}

      <div className="mt-4 text-xs text-muted-foreground text-center">
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>{" "}
        to search • <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          ↑↓
        </kbd>{" "}
        to navigate • <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          ↵
        </kbd>{" "}
        to select
      </div>
    </div>
  )
} 