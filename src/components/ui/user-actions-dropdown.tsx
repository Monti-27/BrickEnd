"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Shield, User, Trash2, Edit } from "lucide-react"
import { useSession } from "next-auth/react"

interface User {
  id: string
  username: string
  email: string | null
  name: string | null
  role: string
  createdAt: string
  updatedAt: string
}

interface UserActionsDropdownProps {
  user: User
  onRoleChange: (userId: string, newRole: string) => void
  onDelete: (userId: string) => void
}

export function UserActionsDropdown({ user, onRoleChange, onDelete }: UserActionsDropdownProps) {
  const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState(false)

  const handleRoleChange = async (newRole: string) => {
    if (isLoading) return
    
    setIsLoading(true)
    try {
      const response = await fetch(`/api/admin/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: newRole }),
      })

      if (response.ok) {
        onRoleChange(user.id, newRole)
      } else {
        const error = await response.json()
        alert(error.error || "Failed to update user role")
      }
    } catch (error) {
      console.error("Error updating user role:", error)
      alert("Failed to update user role")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async () => {
    if (isLoading) return
    
    if (!confirm(`Are you sure you want to delete user "${user.username}"? This action cannot be undone.`)) {
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(`/api/admin/users/${user.id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        onDelete(user.id)
      } else {
        const error = await response.json()
        alert(error.error || "Failed to delete user")
      }
    } catch (error) {
      console.error("Error deleting user:", error)
      alert("Failed to delete user")
    } finally {
      setIsLoading(false)
    }
  }

  const isCurrentUser = (session?.user as { id?: string })?.id === user.id
  const isAdmin = user.role === "admin"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {/* Role Change Options */}
        {!isCurrentUser && (
          <>
            {!isAdmin ? (
              <DropdownMenuItem
                onClick={() => handleRoleChange("admin")}
                disabled={isLoading}
                className="cursor-pointer"
              >
                <Shield className="mr-2 h-4 w-4" />
                Make Admin
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem
                onClick={() => handleRoleChange("user")}
                disabled={isLoading}
                className="cursor-pointer"
              >
                <User className="mr-2 h-4 w-4" />
                Remove Admin
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
          </>
        )}

        {/* Delete Option */}
        {!isCurrentUser && (
          <DropdownMenuItem
            onClick={handleDelete}
            disabled={isLoading}
            className="cursor-pointer text-destructive focus:text-destructive"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete User
          </DropdownMenuItem>
        )}

        {/* Current User Message */}
        {isCurrentUser && (
          <DropdownMenuItem disabled className="text-muted-foreground">
            <Edit className="mr-2 h-4 w-4" />
            Cannot modify own account
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 