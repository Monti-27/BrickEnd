declare module "next-auth" {
  interface Session {
    user: {
      id: string
      username?: string
      role?: string
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }

  interface User {
    id: string
    username?: string
    role?: string
    password?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    username?: string
    role?: string
  }
} 