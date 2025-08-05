"use client"

import { Button } from "@/components/ui/button"
import React from "react"
import Link from "next/link"
import { ArrowRight, Database } from "lucide-react"
import { alata } from "@/components/ui/fonts"
import { Marquee } from "@/components/ui/marquee"




export default function Main() {
    return (
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
                    {/* left part */}
                    <div className="flex items-center space-x-2">
                    <Database className="h-5 w-5 sm:h-6 sm:w-6 text-primary ml-2" />
                    <span className={`${alata.className} text-lg sm:text-2xl text-white `}>BrickEnd</span>
                    </div>
                    {/* right part */}
                    <div className="flex items-center sm:space-x-3 space-x-2">
                        <Link href={"/auth/login"}>
                        <Button variant={"outline"} className={`${alata.className} text-md sm:px-4 `} size={"lg"}>Sign In</Button>
                        </Link>

                        <Link href={"/auth/login"}>
                        <Button className="rounded-full">Get Started 
                        <ArrowRight className="-ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero */}

            <section className="relative z-10">
                <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
                    <div className="max-w-4xl mx-auto"></div>
                </div>

            </section>

            {/* Marquee section */}
            {/* <section className="relative z-10 py-8">
                <Marquee speed={"normal"} direction={"left"} className="text-white/70 text-md">
                    <div className="flex gap-8 items-center">
                        <span>•</span>
                        <span>NextAuth</span>
                        <span>•</span>
                        <span>Next.js</span>
                        <span>•</span>
                        <span>TypeScript</span>
                        <span>•</span>
                        <span>Tailwind CSS</span>
                        <span>•</span>
                        <span>Zustand</span>
                        <span>•</span>
                        <span>Shadcn UI</span>
                        <span>•</span>
                        <span>Prisma ORM</span>
                    </div>
                </Marquee>
            </section> */}
        </div>

    )
}