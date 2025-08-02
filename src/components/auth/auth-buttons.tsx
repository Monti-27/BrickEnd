"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"

export function AuthButtons() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div className="h-8 w-20 bg-muted animate-pulse rounded"></div>
  }

  if (session) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            {session.user?.image ? (
              <img 
                src={session.user.image} 
                alt={session.user.name || "User"} 
                className="h-8 w-8 rounded-full"
              />
            ) : (
              <User className="h-4 w-4 text-primary-foreground" />
            )}
          </div>
          <span className="text-sm font-medium">
            {session.user?.name || session.user?.email}
          </span>
        </div>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => signOut({ callbackUrl: "/auth/login" })}
        >
          Sign Out
        </Button>
      </div>
    )
  }

  return (
    <Button 
      onClick={() => signIn()}
      size="sm"
    >
      Sign In
    </Button>
  )
} 