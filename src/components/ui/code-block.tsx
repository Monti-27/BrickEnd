"use client"
import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode
  language?: string
}

// Exact color matching from the provided image with proper CSS class protection
const highlightCode = (code: string, language?: string) => {
  if (typeof code !== 'string') return code

  let highlighted = code
    // First, protect all strings (including className values) from further processing
    const stringMatches: { placeholder: string; original: string }[] = []
    let stringIndex = 0
    
    // Protect strings first (they should stay as-is)
    highlighted = highlighted.replace(/(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, (match) => {
      const placeholder = `__STRING_${stringIndex}__`
      stringMatches.push({ placeholder, original: `<span style="color: #4EC9B0;">${match}</span>` })
      stringIndex++
      return placeholder
    })

    // Comments (gray)
    highlighted = highlighted.replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, '<span style="color: #6A9955;">$1</span>')
    
    // Import/export statements (pink/magenta)
    highlighted = highlighted.replace(/\b(import|export)\b/g, '<span style="color: #FF79C6;">$1</span>')
    
    // Keywords (blue/cyan)
    highlighted = highlighted.replace(/\b(default|function|const|let|var|if|else|for|while|return|async|await|try|catch|finally|class|extends|interface|type|from)\b/g, 
      '<span style="color: #8BE9FD;">$1</span>')
    
    // JSX/React components (cyan)
    highlighted = highlighted.replace(/(<\/?)([A-Z][a-zA-Z0-9]*)/g, '$1<span style="color: #8BE9FD;">$2</span>')
    
    // Object properties and method calls (but avoid className and CSS-related props)
    highlighted = highlighted.replace(/\.([a-zA-Z_$][a-zA-Z0-9_$]*)/g, '.<span style="color: #50FA7B;">$1</span>')
    
    // Numbers (purple)
    highlighted = highlighted.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span style="color: #BD93F9;">$1</span>')
    
    // Boolean values and null (blue)
    highlighted = highlighted.replace(/\b(true|false|null|undefined)\b/g, '<span style="color: #BD93F9;">$1</span>')
    
    // Function names (yellow) - but be careful not to highlight CSS classes
    highlighted = highlighted.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g, '<span style="color: #F1FA8C;">$1</span>')

    // Restore protected strings
    stringMatches.forEach(({ placeholder, original }) => {
      highlighted = highlighted.replace(placeholder, original)
    })

  return highlighted
}

const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
  ({ className, children, language, ...props }, ref) => {
    const [copied, setCopied] = useState(false)
    
    const codeText = typeof children === 'string' ? children : children?.toString() || ''
    const highlightedCode = highlightCode(codeText, language)
    
    // Generate line numbers
    const lines = codeText.split('\n')
    const lineNumbers = lines.map((_, index) => index + 1)

    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(codeText)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Failed to copy:', err)
      }
    }

    return (
      <div className="relative group rounded-lg overflow-hidden max-w-3xl" style={{ 
        border: '1px solid #333333', 
        backgroundColor: '#010101' 
      }}>
        {/* Header with language and copy button */}
        <div 
          className="flex items-center justify-between px-4 py-2.5 border-b"
          style={{ 
            backgroundColor: '#1a1a1a',
            borderBottomColor: '#333333'
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-[#28ca42] cursor-pointer"></div>
            <span className="text-xs font-medium ml-2" style={{ color: '#cccccc' }}>
              {language || 'code'}
            </span>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1.5 px-2 py-1 text-xs rounded transition-all duration-200"
            style={{ 
              color: '#cccccc'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#cccccc';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {copied ? (
              <>
                <Check size={12} />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        
        {/* Code content with line numbers */}
        <div className="flex" style={{ backgroundColor: '#010101' }}>
          {/* Line numbers */}
          <div 
            className="flex flex-col py-4 px-3 text-right select-none border-r"
            style={{ 
              backgroundColor: '#010101',
              color: '#6b7280',
              borderRightColor: '#333333',
              minWidth: '3rem'
            }}
          >
            {lineNumbers.map((num) => (
              <span key={num} className="font-mono text-sm leading-6">
                {num}
              </span>
            ))}
          </div>
          
          {/* Code content */}
          <pre
            ref={ref}
            className={cn(
              "overflow-x-auto px-4 py-4 font-mono text-sm leading-6 min-h-[60px] flex-1",
              className
            )}
            style={{ 
              backgroundColor: '#010101',
              color: '#ffffff'
            }}
            {...props}
          >
            <code 
              className="block"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </pre>
        </div>
      </div>
    )
  }
)

CodeBlock.displayName = "CodeBlock"

export { CodeBlock }