"use client"
import { CodeBlock } from '@/components/ui/code-block'

export default function SnipPage() {
    return (
        <div className="min-h-screen bg-[#000100] text-white">
            <div className="container mx-auto p-6 space-y-8">
                <div className="text-center py-8">
                    <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Code Snippets
                    </h1>
                    <p className="text-gray-400">Beautiful syntax highlighted code examples</p>
                </div>

            {/* React Authentication Example */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-200">React Authentication</h2>
                <CodeBlock language="typescript">
                    {`const handleGitHubSignIn = async () => {
    setIsLoading(true)
    try {
        const result = await signIn("github", {
            redirect: false,
            callbackUrl: "/dashboard" 
        })
        if (result?.ok) {
            router.push("/dashboard")
        }
    } catch (error) {
        console.error("GitHub sign in error:", error)
    } finally {
        setIsLoading(false)
    }
}`}
                </CodeBlock>
            </div>

            {/* Component Import Example - Exact from Image */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-200">Component Import</h2>
                <CodeBlock language="javascript">
                    {`import { Detail } from "@raycast/api";

export default function Command() {
    return <Detail markdown="Hello World" />;
}`}
                </CodeBlock>
            </div>

            {/* React Component with Tailwind */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-200">React Component with Tailwind</h2>
                <CodeBlock language="jsx">
                    {`export default function Button({ children }) {
    return (
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            {children}
        </button>
    )
}`}
                </CodeBlock>
            </div>

            {/* Package Installation */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-200">Package Installation</h2>
                <CodeBlock language="bash">
                    npm install @radix-ui/react-dialog
                </CodeBlock>
            </div>

            {/* API Route Example */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-200">Next.js API Route</h2>
                <CodeBlock language="typescript">
                    {`import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get('id')
    
    if (!id) {
        return NextResponse.json({ error: 'ID required' }, { status: 400 })
    }
    
    return NextResponse.json({ message: 'Success', id })
}`}
                </CodeBlock>
            </div>
            </div>
        </div>
    )
}