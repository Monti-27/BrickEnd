"use client"

import { Button } from "@/components/ui/button"
import React from "react"
import Link from "next/link"

export default function Main() {
    return(
        <div className="min-h-screen w-full relative bg-black">
    {/* Indigo Cosmos Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
      }}
    />
  
    {/* Nav */}
    <nav className="relative z-10 border-b border-gray-800/30 bg-transparent backdrop-blur-sm">
    <div className="mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"> 
        <div className="flex items-center space-x-2">
            <Link href={"/auth/login"}></Link>
        </div>

    </div>
    </nav>

  </div>
    )
}