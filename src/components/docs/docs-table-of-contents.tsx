"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface TocItem {
  level: number
  text: string
  slug: string
}

export function DocsTableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const findHeadings = () => {
      // Look for headings in the main content area
      const mainContent = document.querySelector('main') || document.body
      const elements = Array.from(mainContent.querySelectorAll("h1, h2, h3, h4, h5, h6"))
      const items: TocItem[] = elements.map((element, index) => {
        // Ensure element has an ID
        if (!element.id) {
          const text = element.textContent?.trim() || ''
          const slug = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
          const uniqueId = slug || `heading-${index}`
          element.id = uniqueId
        }
        return {
          level: Number(element.tagName.charAt(1)),
          text: element.textContent ?? "",
          slug: element.id,
        }
      })
      setHeadings(items)
      setCounter(prev => prev + 1) // Increment counter to force re-render
    }

    // Initial scan
    findHeadings()

    // Set up a MutationObserver to detect when content changes
    const observer = new MutationObserver(() => {
      findHeadings()
    })

    // Observe the main content area
    const mainContent = document.querySelector('main') || document.body
    observer.observe(mainContent, {
      childList: true,
      subtree: true,
    })

    // Also try again after a short delay to catch any late-rendering content
    const timer = setTimeout(findHeadings, 500)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [counter])

  useEffect(() => {
    if (headings.length === 0) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200 // Increased offset for better detection
      let currentActive = ""

      // Check each heading from top to bottom
      for (let i = 0; i < headings.length; i++) {
        const element = document.getElementById(headings[i].slug)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          
          // If this element is in view or we're past it
          if (elementTop <= scrollPosition) {
            currentActive = headings[i].slug
          } else {
            // If we've scrolled past this element, stop checking
            break
          }
        }
      }

      // Only update if the active ID has changed
      if (currentActive !== activeId) {
        setActiveId(currentActive)
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headings, activeId])

  if (headings.length === 0) {
    return (
      <div className="space-y-4">
        <h4 className="font-medium text-sm">On this page</h4>
        <p className="text-sm text-muted-foreground">
          Loading headings...
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h4 className="font-medium text-sm">On this page</h4>
      <ul className="space-y-1 text-sm">
        {headings.map((heading, index) => (
          <li key={`${heading.slug}-${counter}-${index}`}>
            <Link
              href={`#${heading.slug}`}
              className={cn(
                "block transition-colors hover:text-foreground",
                activeId === heading.slug 
                  ? "text-blue-500" 
                  : "text-muted-foreground",
                heading.level === 1 && "pl-0",
                heading.level === 2 && "pl-4",
                heading.level === 3 && "pl-8",
                heading.level === 4 && "pl-12",
                heading.level === 5 && "pl-16",
                heading.level === 6 && "pl-20"
              )}
            >
              {heading.text}
            </Link>
          </li>
        ))}
      </ul>
      
      <div className="border-t pt-4 space-y-2">
        <Link
          href="https://github.com/your-repo/brickend"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Edit this page on GitHub
        </Link>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          Scroll to top
        </button>
      </div>
    </div>
  )
} 