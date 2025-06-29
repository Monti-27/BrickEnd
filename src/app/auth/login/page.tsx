import { Database } from "lucide-react"

import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <a href="/dashboard" className="flex items-center gap-2 font-medium">
          <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg">
            <Database className="size-5" />
          </div>
          <span className="text-xl font-bold">BrickEnd</span>
        </a>
        <div className="text-sm text-muted-foreground">
          Backend Library for Developers
        </div>
      </header>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      {/* Floating tool logos - positioned around the login component */}
      <div className="absolute inset-0">
        {/* MongoDB - top left of login */}
        <div className="absolute top-1/2 left-1/2 -translate-x-96 -translate-y-40 animate-float-slow">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg rotate-12">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
              alt="MongoDB" 
              width="40" 
              height="40"
              className="w-10 h-10"
            />
            <div className="text-xs text-center mt-2 font-medium">MongoDB</div>
          </div>
        </div>

        {/* TypeScript - top right of login */}
        <div className="absolute top-1/2 left-1/2 translate-x-64 -translate-y-36 animate-float-medium">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg -rotate-6">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
              alt="TypeScript" 
              width="40" 
              height="40"
              className="w-10 h-10"
            />
            <div className="text-xs text-center mt-2 font-medium">TypeScript</div>
          </div>
        </div>

        {/* Prisma - left side of login */}
        <div className="absolute top-1/2 left-1/2 -translate-x-88 translate-y-4 animate-float-fast">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg rotate-3">
            <img 
              src="https://avatars.githubusercontent.com/u/17219288?s=200&v=4" 
              alt="Prisma" 
              width="40" 
              height="40"
              className="w-10 h-10 rounded"
            />
            <div className="text-xs text-center mt-2 font-medium">Prisma</div>
          </div>
        </div>

        {/* PostgreSQL - right side of login */}
        <div className="absolute top-1/2 left-1/2 translate-x-72 translate-y-8 animate-float-slow">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg -rotate-8">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
              alt="PostgreSQL" 
              width="40" 
              height="40"
              className="w-10 h-10"
            />
            <div className="text-xs text-center mt-2 font-medium">PostgreSQL</div>
          </div>
        </div>

        {/* Clerk - bottom left of login */}
        <div className="absolute top-1/2 left-1/2 -translate-x-80 translate-y-52 animate-float-medium">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg rotate-6">
            <img 
              src="https://avatars.githubusercontent.com/u/49538330?s=200&v=4" 
              alt="Clerk" 
              width="40" 
              height="40"
              className="w-10 h-10 rounded"
            />
            <div className="text-xs text-center mt-2 font-medium">Clerk</div>
          </div>
        </div>

        {/* Node.js - bottom right of login */}
        <div className="absolute top-1/2 left-1/2 translate-x-60 translate-y-48 animate-float-fast">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg -rotate-4">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
              alt="Node.js" 
              width="40" 
              height="40"
              className="w-10 h-10"
            />
            <div className="text-xs text-center mt-2 font-medium">Node.js</div>
          </div>
        </div>
      </div>

      {/* Centered Login Form */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)]">
        <div className="w-full max-w-md">
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold mb-2">Welcome to BrickEnd</h1>
              <p className="text-muted-foreground text-sm">
                Your backend development companion
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
