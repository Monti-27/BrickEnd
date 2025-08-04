export default function TechnologiesPage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 id="technologies" className="scroll-m-20 text-4xl font-bold tracking-tight">
            Technologies
          </h1>
          <p className="text-xl text-muted-foreground">
            Stop reinventing the wheel! Use our pre-built snippets for your favorite tech stack.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Tired of writing the same authentication code for the 47th time? We get it. That&apos;s why we&apos;ve 
            created battle-tested snippets for all the technologies you actually use. Copy, paste, customize, 
            and ship faster than your coffee can cool down.
          </p>
        </div>

        <div className="space-y-6">
          <h2 id="why-brickend" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Why BrickEnd?
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Remember that time you spent 3 hours debugging a JWT implementation that should have taken 10 minutes? 
            Yeah, we&apos;ve all been there. BrickEnd is here to save you from that pain.
          </p>
          
          <div className="bg-muted p-6 rounded-lg border-l-4 border-primary">
            <h3 className="text-lg font-semibold mb-2">The BrickEnd Philosophy</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-sm font-semibold">Before BrickEnd:</p>
                <img 
                  src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                  alt="Developer struggling with code"
                  className="w-full h-32 object-cover rounded"
                />
                <p className="text-xs text-muted-foreground">&quot;Let me Google how to implement OAuth with NextAuth.js for the 15th time&quot;</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold">After BrickEnd:</p>
                <img 
                  src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                  alt="Developer celebrating success"
                  className="w-full h-32 object-cover rounded"
                />
                <p className="text-xs text-muted-foreground">&quot;Copy, paste, customize, done. Time for coffee&quot;</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="font-semibold">MongoDB</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              CRUD operations, aggregation pipelines, and connection management that actually work.
            </p>
            <div className="mt-3 text-xs text-muted-foreground">
              Perfect for: &quot;I need to query this in 5 different ways&quot; moments
            </div>
            <a href="/brickend/docs/technologies/mongodb" className="absolute inset-0">
              <span className="sr-only">View MongoDB Snippets</span>
            </a>
          </div>

          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold">Clerk</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              User management, authentication, and user profiles without the headache.
            </p>
            <div className="mt-3 text-xs text-muted-foreground">
              Perfect for: &quot;Users? What users? Oh right, I need auth&quot; moments
            </div>
            <a href="/brickend/docs/technologies/clerk" className="absolute inset-0">
              <span className="sr-only">View Clerk Snippets</span>
            </a>
          </div>

          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold">Prisma</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Database operations that don&apos;t make you question your life choices.
            </p>
            <div className="mt-3 text-xs text-muted-foreground">
              Perfect for: &quot;Why is this query so slow?&quot; moments
            </div>
            <a href="/brickend/docs/technologies/prisma" className="absolute inset-0">
              <span className="sr-only">View Prisma Snippets</span>
            </a>
          </div>

          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold">NextAuth.js</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Authentication that works out of the box, not out of the window.
            </p>
            <div className="mt-3 text-xs text-muted-foreground">
              Perfect for: &quot;How do I implement OAuth again?&quot; moments
            </div>
            <a href="/brickend/docs/technologies/nextauth" className="absolute inset-0">
              <span className="sr-only">View NextAuth.js Snippets</span>
            </a>
          </div>

          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-semibold">Stripe</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Payment processing that doesn&apos;t make your wallet cry.
            </p>
            <div className="mt-3 text-xs text-muted-foreground">
              Perfect for: &quot;Money? What money? Oh right, payments&quot; moments
            </div>
            <a href="/brickend/docs/technologies/stripe" className="absolute inset-0">
              <span className="sr-only">View Stripe Snippets</span>
            </a>
          </div>

          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="font-semibold">AWS Services</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Cloud services that don&apos;t require a PhD in AWS documentation.
            </p>
            <div className="mt-3 text-xs text-muted-foreground">
              Perfect for: &quot;Cloud? What cloud? Oh right, AWS&quot; moments
            </div>
            <a href="/brickend/docs/technologies/aws" className="absolute inset-0">
              <span className="sr-only">View AWS Services Snippets</span>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="the-before-after" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            The Before & After
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-red-600">Before BrickEnd</h3>
              <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200">
                <img 
                  src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                  alt="Developer struggling with code"
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <ul className="space-y-2 text-sm">
                  <li>• Spend 3 hours Googling &quot;how to implement JWT&quot;</li>
                  <li>• Copy code from Stack Overflow that doesn&apos;t work</li>
                  <li>• Debug for 2 more hours</li>
                  <li>• Finally get it working at 3 AM</li>
                  <li>• Forget how you did it by next week</li>
                  <li>• Repeat the cycle</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-600">After BrickEnd</h3>
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200">
                <img 
                  src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                  alt="Developer celebrating success"
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <ul className="space-y-2 text-sm">
                  <li>• Copy the JWT snippet from BrickEnd</li>
                  <li>• Customize it for your needs</li>
                  <li>• Test it works in 5 minutes</li>
                  <li>• Ship to production</li>
                  <li>• Have time for coffee</li>
                  <li>• Actually enjoy coding again</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="real-developer-quotes" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Real Developer Quotes (Probably)
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-muted p-4 rounded-lg">
              <img 
                src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                alt="Developer struggling"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <p className="text-sm italic">&quot;I used to spend hours on auth. Now I just copy-paste and go get coffee.&quot;</p>
              <p className="text-xs text-muted-foreground mt-2">- Sarah, Full Stack Developer</p>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <img 
                src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                alt="Developer celebrating"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <p className="text-sm italic">&quot;BrickEnd saved me from writing the same CRUD operations for the 50th time.&quot;</p>
              <p className="text-xs text-muted-foreground mt-2">- Mike, Backend Developer</p>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <img 
                src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                alt="Developer thinking"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <p className="text-sm italic">&quot;Finally, I can focus on what makes my app unique instead of boilerplate.&quot;</p>
              <p className="text-xs text-muted-foreground mt-2">- Alex, Startup Founder</p>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <img 
                src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                alt="Developer happy"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <p className="text-sm italic">&quot;My productivity increased by 300%. My coffee consumption increased by 500%.&quot;</p>
              <p className="text-xs text-muted-foreground mt-2">- David, Senior Developer</p>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <img 
                src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                alt="Developer confused"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <p className="text-sm italic">&quot;I actually have time to write tests now. What is this sorcery?&quot;</p>
              <p className="text-xs text-muted-foreground mt-2">- Lisa, QA Engineer</p>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <img 
                src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                alt="Developer successful"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <p className="text-sm italic">&quot;BrickEnd is like having a senior developer who never takes vacation.&quot;</p>
              <p className="text-xs text-muted-foreground mt-2">- Tom, Tech Lead</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="getting-started" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Getting Started with Technologies
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Ready to stop reinventing the wheel? Here&apos;s how to get started:
          </p>
          
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Quick Start Guide</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <img 
                  src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                  alt="Step 1: Choose your tech"
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <ol className="space-y-3 text-sm">
                  <li><strong>1. Choose Your Tech:</strong> Pick the technology you&apos;re working with</li>
                  <li><strong>2. Browse Snippets:</strong> Find the functionality you need</li>
                  <li><strong>3. Copy & Customize:</strong> Adapt it to your project</li>
                  <li><strong>4. Test & Deploy:</strong> Ship faster than ever</li>
                  <li><strong>5. Enjoy Coffee:</strong> You earned it</li>
                </ol>
              </div>
              <div>
                <img 
                  src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                  alt="Success celebration"
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <h4 className="font-semibold mb-2">Pro Tips</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Start Simple:</strong> Don&apos;t try to implement everything at once</li>
                  <li><strong>Read the Comments:</strong> Our snippets are well-documented</li>
                  <li><strong>Customize Gradually:</strong> Get it working first, then optimize</li>
                  <li><strong>Test Everything:</strong> Because bugs are like uninvited guests</li>
                  <li><strong>Share Your Improvements:</strong> Help other developers avoid the same pain</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="technology-roadmap" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Technology Roadmap
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We&apos;re constantly adding new technologies based on what developers actually need. 
            Here&apos;s what&apos;s coming soon:
          </p>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Coming Soon</h3>
              <img 
                src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                alt="Work in progress"
                className="w-full h-32 object-cover rounded mb-2"
              />
              <ul className="space-y-2 text-sm">
                <li>• Firebase Integration</li>
                <li>• GraphQL with Apollo</li>
                <li>• Redis Caching</li>
                <li>• Docker Deployment</li>
                <li>• Kubernetes Configs</li>
                <li>• Microservices Patterns</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Request a Technology</h3>
              <img 
                src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                alt="Community contribution"
                className="w-full h-32 object-cover rounded mb-2"
              />
              <p className="text-sm text-muted-foreground">
                Don&apos;t see your favorite technology? Let us know what you need! 
                We prioritize based on community demand.
              </p>
              <a 
                href="https://github.com/brickend/brickend/issues"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Request New Technology
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="community-contributions" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Community Contributions
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            BrickEnd is built by developers, for developers. We encourage contributions from the community 
            to make it even better for everyone.
          </p>
          
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">How to Contribute</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <img 
                  src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                  alt="Submit a snippet"
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <h4 className="font-semibold">Submit a Snippet</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Create a new snippet for your favorite technology</li>
                  <li>• Add comprehensive documentation</li>
                  <li>• Include usage examples</li>
                  <li>• Submit a pull request</li>
                </ul>
              </div>
              
              <div>
                <img 
                  src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                  alt="Improve existing snippets"
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <h4 className="font-semibold">Improve Existing Snippets</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Fix bugs or edge cases</li>
                  <li>• Add better error handling</li>
                  <li>• Improve performance</li>
                  <li>• Update documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="next-steps" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Next Steps
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Ready to stop writing boilerplate and start building amazing features? Here&apos;s what to do next:
          </p>
          
          <div className="flex gap-4 pt-4">
            <a
              href="/brickend/docs/examples"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              View Examples
            </a>
            <a
              href="/brickend/docs/api"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Browse API Reference
            </a>
            <a
              href="/community"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Join Community
            </a>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-200">
            <img 
              src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
              alt="Remember message"
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Remember</h3>
            <p className="text-sm">
              <strong>Life is too short to write the same authentication code for the 100th time.</strong><br/>
              Use BrickEnd, save time, drink more coffee, build better products. It&apos;s that simple!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 