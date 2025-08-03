"use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useSession } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Settings, Database } from "lucide-react"
import Link from "next/link"

export default function Page() {
  const { data: session } = useSession()
  const isAdmin = session?.user?.role === "admin"

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">
                    BrickEnd
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* User Info Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">User Information</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {session?.user?.name || session?.user?.username || "User"}
                </div>
                <p className="text-xs text-muted-foreground">
                  {session?.user?.email || "No email provided"}
                </p>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Username: <span className="font-medium">{session?.user?.username}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Role: <span className="font-medium capitalize">{session?.user?.role || "user"}</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Admin Access Card - Only show for admins */}
            {isAdmin && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Admin Access</CardTitle>
                  <Settings className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Manage users and system settings
                  </CardDescription>
                  <Link href="/admin">
                    <Button className="w-full">
                      <Settings className="mr-2 h-4 w-4" />
                      Admin Dashboard
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}

            {/* System Status Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">System Status</CardTitle>
                <Database className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">Online</div>
                <p className="text-xs text-muted-foreground">
                  All systems operational
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/50 min-h-[400px] flex-1 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Welcome to BrickEnd</h3>
            <p className="text-muted-foreground">
              Your backend development companion. This dashboard provides access to all your development tools and resources.
            </p>
            {isAdmin && (
              <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-sm text-primary font-medium">
                  🛡️ Admin Access: You have administrative privileges and can manage users and system settings.
                </p>
              </div>
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
