"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  ArrowRight, 
  Github,
  Star,
  GitBranch,
  Terminal
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Code Snippets",
      description: "Organize and manage your backend code snippets with ease"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Ready",
      description: "Built-in Prisma ORM with PostgreSQL for robust data management"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Authentication",
      description: "NextAuth.js integration with GitHub and Email providers"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Development",
      description: "Pre-built components and utilities to speed up your workflow"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Built for teams to share and collaborate on backend solutions"
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "Developer First",
      description: "Clean APIs, TypeScript support, and modern development practices"
    }
  ]

  const techStack = [
    { name: "Next.js 15", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    { name: "TypeScript", color: "bg-blue-600/10 text-blue-300 border-blue-600/20" },
    { name: "Prisma ORM", color: "bg-green-500/10 text-green-400 border-green-500/20" },
    { name: "PostgreSQL", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
    { name: "NextAuth.js", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
    { name: "shadcn/ui", color: "bg-gray-500/10 text-gray-400 border-gray-500/20" },
    { name: "Tailwind v4", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="border-b border-gray-800/30 bg-black/95 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Database className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <span className="font-bold text-lg sm:text-xl text-white">BrickEnd</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost" className="text-white hover:text-gray-300 text-sm sm:text-base px-2 sm:px-4 font-medium">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button className="text-sm sm:text-base px-3 sm:px-4 font-semibold">
                Get Started <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-black">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 text-xs sm:text-sm font-medium">
              <Star className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
              Backend Library Platform
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight">
              Build Better
              <br />
              <span className="text-primary">Backend Solutions</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0 font-light leading-relaxed">
              BrickEnd is a comprehensive backend library platform that helps developers organize, 
              share, and collaborate on backend components with modern tools and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link href="/auth/login">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto font-semibold">
                  Start Building <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 border-gray-600 text-white hover:bg-gray-800 w-full sm:w-auto font-medium" onClick={() => window.open('https://github.com/Monti-27/BrickEnd', '_blank')}>
                <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-black">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">Built with Modern Technologies</h2>
            <p className="text-gray-400 text-sm sm:text-base font-light">Powered by the latest and greatest tools</p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center max-w-4xl mx-auto px-4 sm:px-0">
            {techStack.map((tech) => (
              <Badge key={tech.name} variant="outline" className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium ${tech.color}`}>
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-black">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">Everything You Need</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4 sm:px-0 font-light">
              A complete toolkit for backend development with modern features and seamless integration
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-gray-800 bg-gray-900/30 backdrop-blur">
                <CardHeader className="pb-4 sm:pb-6">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 sm:mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-white font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black border-y border-gray-800/30">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-primary mb-1 sm:mb-2">100+</div>
              <div className="text-gray-400 text-sm sm:text-base font-light">Code Snippets</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-primary mb-1 sm:mb-2">50+</div>
              <div className="text-gray-400 text-sm sm:text-base font-light">Components</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-primary mb-1 sm:mb-2">24/7</div>
              <div className="text-gray-400 text-sm sm:text-base font-light">Availability</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-primary mb-1 sm:mb-2">∞</div>
              <div className="text-gray-400 text-sm sm:text-base font-light">Possibilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">Ready to Build Something Amazing?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 px-4 sm:px-0 font-light leading-relaxed">
              Join developers who are already using BrickEnd to accelerate their backend development
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link href="/auth/login">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto font-semibold">
                  Get Started Now <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 border-gray-600 text-white hover:bg-gray-800 w-full sm:w-auto font-medium">
                <GitBranch className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* BRICKEND Background Text */}
      <div className="relative bg-black">
        <div className="text-center py-4 sm:py-6 md:py-8 flex items-center justify-center" style={{ zIndex: 1, marginTop: '2rem', transform: 'translateY(2px)' }}>
          <h2 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem] font-black leading-none tracking-tight select-none" style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.1) 15%, rgba(255, 255, 255, 0.03) 30%, rgba(255, 255, 255, 0) 45%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)'
          }}>
            BRICKEND
          </h2>
        </div>
      </div>

      {/* Actual Footer */}
      <footer className="bg-black relative -mt-10 sm:-mt-16 md:-mt-20" style={{ zIndex: 10 }}>
        {/* Blue Hemisphere Gradient Overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 120% 90% at center bottom, rgba(59, 130, 246, 0.25) 0%, rgba(59, 130, 246, 0.15) 20%, rgba(96, 165, 250, 0.08) 50%, rgba(147, 197, 253, 0.02) 80%, transparent 95%)'
        }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 md:mb-20">
            {/* Company Info - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Database className="h-3 w-3 sm:h-4 sm:w-4 text-primary-foreground" />
                </div>
                <span className="text-white font-bold text-base sm:text-lg">BrickEnd</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 sm:mb-8 max-w-sm font-light">
                The ultimate backend library platform for modern developers. Build faster, collaborate better, and ship with confidence.
              </p>
            </div>

            {/* Navigation Links - 4 columns */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {/* Product */}
              <div>
                <h3 className="text-white font-bold mb-4 sm:mb-6 text-sm tracking-wide">Product</h3>
                <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm font-light">
                  <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                  <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                  <li><Link href="/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
                  <li><Link href="/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
                </ul>
              </div>

              {/* Developers */}
              <div>
                <h3 className="text-white font-bold mb-4 sm:mb-6 text-sm tracking-wide">Developers</h3>
                <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm font-light">
                  <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                  <li><Link href="/api" className="hover:text-white transition-colors">API Reference</Link></li>
                  <li><Link href="/guides" className="hover:text-white transition-colors">Guides</Link></li>
                  <li><Link href="/examples" className="hover:text-white transition-colors">Examples</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white font-bold mb-4 sm:mb-6 text-sm  tracking-wide">Company</h3>
                <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm font-light">
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="text-white font-bold mb-4 sm:mb-6 text-sm tracking-wide">Socials</h3>
                <div className="flex space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black hover:bg-gray-900 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                    <svg className="h-3 w-3 sm:h-4 sm:w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black hover:bg-gray-900 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                    <svg className="h-3 w-3 sm:h-4 sm:w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black hover:bg-gray-900 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                    <svg className="h-3 w-3 sm:h-4 sm:w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-gray-800/30 pt-12 sm:pt-16 pb-8 sm:pb-12 relative">
            {/* Gradient overlay from bottom to top */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start relative z-10">
              {/* Left Side - Stay Updated Text */}
              <div>
                <h3 className="text-white font-bold mb-3 sm:mb-4 text-lg sm:text-xl">Stay Updated</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                  Get the latest updates, tutorials, and announcements delivered straight to your inbox.
                </p>
              </div>

              {/* Right Side - Subscribe Form */}
              <div>
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors font-light"
                  />
                  <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold text-sm transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed font-light">
                  By subscribing, you agree to receive emails from BrickEnd. You can unsubscribe at any time. 
                  Read our <Link href="/privacy" className="text-gray-400 underline hover:text-white transition-colors font-medium">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800/30 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-xs sm:text-sm font-light">
                © 2024 BrickEnd. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <Link href="/privacy" className="text-gray-500 text-xs sm:text-sm hover:text-white transition-colors font-light">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-500 text-xs sm:text-sm hover:text-white transition-colors font-light">Terms of Service</Link>
              <Link href="/cookies" className="text-gray-500 text-xs sm:text-sm hover:text-white transition-colors font-light">Cookie Policy</Link>
              <Link href="/security" className="text-gray-500 text-xs sm:text-sm hover:text-white transition-colors font-light">Security</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
