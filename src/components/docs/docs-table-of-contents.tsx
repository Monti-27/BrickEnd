"use client"

import { useEffect, useState, useCallback, useRef } from "react"
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
  const observerRef = useRef<MutationObserver | null>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const findHeadings = useCallback(() => {
    try {
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
    } catch (error) {
      console.warn('Error finding headings:', error)
    }
  }, [])

  const handleScroll = useCallback(() => {
    if (headings.length === 0) return

    // Debounce scroll events
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    scrollTimeoutRef.current = setTimeout(() => {
      try {
        const scrollPosition = window.scrollY + 200
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
      } catch (error) {
        console.warn('Error handling scroll:', error)
      }
    }, 100) // Debounce to 100ms
  }, [headings, activeId])

  useEffect(() => {
    // Initial scan
    findHeadings()

    // Set up a MutationObserver to detect when content changes
    observerRef.current = new MutationObserver((mutations) => {
      // Only trigger if the mutations are relevant (not just attribute changes)
      const hasRelevantChanges = mutations.some(mutation => 
        mutation.type === 'childList' || 
        (mutation.type === 'attributes' && mutation.attributeName === 'id')
      )
      
      if (hasRelevantChanges) {
        // Debounce the observer callback
        setTimeout(findHeadings, 50)
      }
    })

    // Observe the main content area
    const mainContent = document.querySelector('main') || document.body
    if (observerRef.current && mainContent) {
      observerRef.current.observe(mainContent, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['id']
      })
    }

    // Also try again after a short delay to catch any late-rendering content
    const timer = setTimeout(findHeadings, 500)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      clearTimeout(timer)
    }
  }, [findHeadings])

  useEffect(() => {
    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [handleScroll])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

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
          <li key={`${heading.slug}-${index}`}>
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