export default function ExamplesPage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 id="examples" className="scroll-m-20 text-4xl font-bold tracking-tight">
            Examples
          </h1>
          <p className="text-xl text-muted-foreground">
            Real-world examples that show how BrickEnd turns boilerplate nightmares into copy-paste dreams.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Stop spending hours on Stack Overflow trying to figure out why your authentication isn&apos;t working. 
            These examples show you exactly how to implement common patterns using BrickEnd snippets. 
            Copy, paste, customize, and ship faster than you can say &quot;Why is this not working?&quot;
          </p>
        </div>

        <div className="space-y-6">
          <h2 id="the-struggle-is-real" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            The Struggle is Real
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We&apos;ve all been there. You&apos;re building a feature, everything looks good, then you realize 
            you need to implement authentication. Suddenly you&apos;re 3 hours deep in JWT documentation, 
            your coffee is cold, and you&apos;re questioning your career choices.
          </p>
          
          <div className="bg-muted p-6 rounded-lg border-l-4 border-primary">
            <h3 className="text-lg font-semibold mb-2">Classic Developer Moments</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <img 
                  src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                  alt="Developer struggling with code"
                  className="w-full h-32 object-cover rounded"
                />
                <p className="text-sm"><strong>You:</strong> &quot;I&apos;ll just quickly add user authentication&quot;</p>
              </div>
              <div className="space-y-2">
                <img 
                  src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                  alt="Developer celebrating success"
                  className="w-full h-32 object-cover rounded"
                />
                <p className="text-sm"><strong>Also You (3 hours later):</strong> &quot;Why is this JWT token not working?&quot;</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold">Authentication</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              From basic login to OAuth, JWT tokens to session management - all the auth patterns you need.
            </p>
            <div className="mt-3 text-xs text-muted-foreground">
              Perfect for: &quot;Users? What users? Oh right, I need auth&quot; moments
            </div>
            <a href="/brickend/docs/examples/authentication" className="absolute inset-0">
              <span className="sr-only">View Authentication Examples</span>
            </a>
          </div>

          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="font-semibold">Database</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              CRUD operations, complex queries, and data relationships that actually make sense.
            </p>
            <div className="mt-3 text-xs text-muted-foreground">
              Perfect for: &quot;Why is this query so slow?&quot; moments
            </div>
            <a href="/brickend/docs/examples/database" className="absolute inset-0">
              <span className="sr-only">View Database Examples</span>
            </a>
          </div>

          <div className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold">API</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              RESTful endpoints, validation, error handling, and all the API patterns you&apos;ll ever need.
            </p>
            <div className="mt-3 text-xs text-muted-foreground">
              Perfect for: &quot;How do I structure my API again?&quot; moments
            </div>
            <a href="/brickend/docs/examples/api" className="absolute inset-0">
              <span className="sr-only">View API Examples</span>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="real-world-scenarios" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Real-World Scenarios
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            These aren&apos;t just &quot;Hello World&quot; examples. These are real patterns you&apos;ll use 
            in actual projects. We&apos;ve been there, done that, and created the snippets so you don&apos;t 
            have to suffer through the same pain.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">The Startup Founder&apos;s Nightmare</h3>
              <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200">
                <img 
                  src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                  alt="Startup founder struggling"
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <p className="text-sm font-semibold mb-2">The Problem:</p>
                <p className="text-sm">
                  &quot;I need to build a SaaS app with user authentication, subscription payments, 
                  and file uploads. I have 2 weeks to launch.&quot;
                </p>
                <p className="text-sm font-semibold mt-3 mb-2">The BrickEnd Solution:</p>
                <ul className="text-sm space-y-1">
                  <li>• Copy auth snippet (5 minutes)</li>
                  <li>• Copy payment snippet (5 minutes)</li>
                  <li>• Copy file upload snippet (5 minutes)</li>
                  <li>• Customize for your needs (2 hours)</li>
                  <li>• Ship to production (1 day)</li>
                  <li>• Celebrate with coffee</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">The Freelancer&apos;s Dream</h3>
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200">
                <img 
                  src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                  alt="Freelancer celebrating success"
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <p className="text-sm font-semibold mb-2">The Problem:</p>
                <p className="text-sm">
                  &quot;Client wants an e-commerce site with inventory management, 
                  order processing, and admin dashboard.&quot;
                </p>
                <p className="text-sm font-semibold mt-3 mb-2">The BrickEnd Solution:</p>
                <ul className="text-sm space-y-1">
                  <li>• Copy e-commerce snippets (10 minutes)</li>
                  <li>• Copy admin dashboard snippets (10 minutes)</li>
                  <li>• Copy inventory management (10 minutes)</li>
                  <li>• Integrate with client&apos;s design (1 day)</li>
                  <li>• Deliver ahead of schedule</li>
                  <li>• Get paid and buy coffee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="before-after-comparison" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Before vs After: The Transformation
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
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold">Day 1:</p>
                    <p>&quot;I&apos;ll implement authentication today&quot;</p>
                  </div>
                  <div>
                    <p className="font-semibold">Day 3:</p>
                    <p>&quot;Why is this JWT not working?&quot;</p>
                  </div>
                  <div>
                    <p className="font-semibold">Day 5:</p>
                    <p>&quot;I think I need to rewrite this from scratch&quot;</p>
                  </div>
                  <div>
                    <p className="font-semibold">Day 7:</p>
                    <p>&quot;Finally! It works! Wait, what about password reset?&quot;</p>
                  </div>
                  <div>
                    <p className="font-semibold">Day 10:</p>
                    <p>&quot;I hate my life&quot;</p>
                  </div>
                </div>
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
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold">Day 1:</p>
                    <p>&quot;Let me copy the auth snippet&quot;</p>
                  </div>
                  <div>
                    <p className="font-semibold">Day 1 (5 minutes later):</p>
                    <p>&quot;Authentication is working!&quot;</p>
                  </div>
                  <div>
                    <p className="font-semibold">Day 1 (10 minutes later):</p>
                    <p>&quot;Password reset is done too!&quot;</p>
                  </div>
                  <div>
                    <p className="font-semibold">Day 1 (30 minutes later):</p>
                    <p>&quot;OAuth is working! Time for coffee&quot;</p>
                  </div>
                  <div>
                    <p className="font-semibold">Day 1 (1 hour later):</p>
                    <p>&quot;I love my life&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="developer-testimonials" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Developer Testimonials (100% Real, Probably)
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-muted p-4 rounded-lg">
              <img 
                src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                alt="Developer struggling"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <p className="text-sm italic">"I used to spend 3 hours on auth. Now I spend 3 minutes. The other 2 hours and 57 minutes? Coffee time."</p>
              <p className="text-xs text-muted-foreground mt-2">- Emma, Senior Developer</p>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <img 
                src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                alt="Developer celebrating"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <p className="text-sm italic">"BrickEnd is like having a senior developer who never takes vacation and always knows the answer."</p>
              <p className="text-xs text-muted-foreground mt-2">- Carlos, Tech Lead</p>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <img 
                src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                alt="Developer thinking"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <p className="text-sm italic">"My productivity increased by 500%. My coffee consumption increased by 1000%. Worth it."</p>
              <p className="text-xs text-muted-foreground mt-2">- Sarah, Startup Founder</p>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <img 
                src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                alt="Developer happy"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <p className="text-sm italic">"I actually have time to write tests now. What is this sorcery? Am I dreaming?"</p>
              <p className="text-xs text-muted-foreground mt-2">- Mike, QA Engineer</p>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <img 
                src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                alt="Developer confused"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <p className="text-sm italic">"BrickEnd saved me from writing the same CRUD operations for the 47th time. I can finally focus on what matters."</p>
              <p className="text-xs text-muted-foreground mt-2">- Alex, Full Stack Developer</p>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <img 
                src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                alt="Developer successful"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <p className="text-sm italic">"My clients think I'm a coding wizard. Little do they know I'm just really good at copy-paste."</p>
              <p className="text-xs text-muted-foreground mt-2">- David, Freelancer</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="step-by-step-examples" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Step-by-Step Examples
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Each example includes the complete implementation, from setup to deployment. 
            No more &quot;it works on my machine&quot; moments.
          </p>
          
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">How to Use These Examples</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <img 
                  src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                  alt="Step by step process"
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <ol className="space-y-3 text-sm">
                  <li><strong>1. Choose Your Example:</strong> Pick the pattern you need</li>
                  <li><strong>2. Copy the Snippet:</strong> Copy the complete implementation</li>
                  <li><strong>3. Customize:</strong> Adapt it to your project needs</li>
                  <li><strong>4. Test:</strong> Verify it works in your environment</li>
                  <li><strong>5. Deploy:</strong> Ship it to production</li>
                  <li><strong>6. Celebrate:</strong> You just saved hours of work!</li>
                </ol>
              </div>
              <div>
                <img 
                  src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                  alt="Success celebration"
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <h4 className="font-semibold mb-2">Example Structure</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Overview:</strong> What the example does and why you need it</li>
                  <li><strong>Prerequisites:</strong> What you need before starting</li>
                  <li><strong>Step-by-Step Implementation:</strong> Complete code with explanations</li>
                  <li><strong>Testing:</strong> How to verify everything works</li>
                  <li><strong>Customization:</strong> How to adapt it to your needs</li>
                  <li><strong>Troubleshooting:</strong> Common issues and solutions</li>
                  <li><strong>Next Steps:</strong> Where to go from here</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="common-patterns" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Common Patterns You&apos;ll Actually Use
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            These aren&apos;t academic exercises. These are real patterns you&apos;ll use in every project:
          </p>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Authentication Patterns</h3>
              <img 
                src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                alt="Authentication patterns"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <ul className="space-y-2 text-sm">
                <li>• Email/Password Registration & Login</li>
                <li>• OAuth with Google, GitHub, etc.</li>
                <li>• JWT Token Management</li>
                <li>• Password Reset Flow</li>
                <li>• Email Verification</li>
                <li>• Multi-factor Authentication</li>
                <li>• Role-based Access Control</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Database Patterns</h3>
              <img 
                src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                alt="Database patterns"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <ul className="space-y-2 text-sm">
                <li>• User Management</li>
                <li>• CRUD Operations</li>
                <li>• Complex Queries</li>
                <li>• Data Relationships</li>
                <li>• Pagination</li>
                <li>• Search & Filtering</li>
                <li>• Data Validation</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">API Patterns</h3>
              <img 
                src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                alt="API patterns"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <ul className="space-y-2 text-sm">
                <li>• RESTful Endpoints</li>
                <li>• Request Validation</li>
                <li>• Error Handling</li>
                <li>• Rate Limiting</li>
                <li>• File Uploads</li>
                <li>• API Documentation</li>
                <li>• Testing Strategies</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Integration Patterns</h3>
              <img 
                src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                alt="Integration patterns"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <ul className="space-y-2 text-sm">
                <li>• Payment Processing</li>
                <li>• Email Services</li>
                <li>• File Storage</li>
                <li>• Third-party APIs</li>
                <li>• Webhooks</li>
                <li>• Background Jobs</li>
                <li>• Caching Strategies</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="pro-tips" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Pro Tips for Maximum Efficiency
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Want to get the most out of these examples? Follow these tips:
          </p>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Before You Start</h3>
              <img 
                src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                alt="Preparation phase"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <ul className="space-y-2 text-sm">
                <li>• Read the entire example first</li>
                <li>• Understand the prerequisites</li>
                <li>• Set up your development environment</li>
                <li>• Have your coffee ready</li>
                <li>• Clear your schedule (you won&apos;t need much time)</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">During Implementation</h3>
              <img 
                src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                alt="Implementation phase"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <ul className="space-y-2 text-sm">
                <li>• Copy the code exactly as shown</li>
                <li>• Test each step before moving on</li>
                <li>• Customize gradually, not all at once</li>
                <li>• Keep the original snippet for reference</li>
                <li>• Document your customizations</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">After Implementation</h3>
              <img 
                src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                alt="Post implementation"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <ul className="space-y-2 text-sm">
                <li>• Test thoroughly in your environment</li>
                <li>• Add your own error handling</li>
                <li>• Optimize for your specific needs</li>
                <li>• Share improvements with the community</li>
                <li>• Celebrate with more coffee</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Troubleshooting</h3>
              <img 
                src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                alt="Troubleshooting"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <ul className="space-y-2 text-sm">
                <li>• Check the troubleshooting section</li>
                <li>• Verify your environment setup</li>
                <li>• Compare with the original snippet</li>
                <li>• Check the community forum</li>
                <li>• Don&apos;t panic - it&apos;s just code</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 id="contribute-examples" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Contribute Your Examples
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Found a great pattern that others could use? Share it with the community! 
            Your pain could save someone else&apos;s sanity.
          </p>
          
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">How to Contribute</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <img 
                  src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
                  alt="Submit an example"
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <h4 className="font-semibold">Submit an Example</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Create a complete, working example</li>
                  <li>• Add detailed documentation</li>
                  <li>• Include testing instructions</li>
                  <li>• Submit a pull request</li>
                </ul>
              </div>
              
              <div>
                <img 
                  src="https://media.giphy.com/media/26ufcVAJvOJJKfz2M/giphy.gif" 
                  alt="Improve existing examples"
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <h4 className="font-semibold">Improve Existing Examples</h4>
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
            Next Steps: Start Building!
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Ready to stop writing boilerplate and start building amazing features? 
            Pick an example and get started:
          </p>
          
          <div className="flex gap-4 pt-4">
            <a
              href="/brickend/docs/examples/authentication"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Authentication Examples
            </a>
            <a
              href="/brickend/docs/examples/database"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Database Examples
            </a>
            <a
              href="/brickend/docs/examples/api"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              API Examples
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
              Use these examples, save time, drink more coffee, build better products. 
              It&apos;s that simple!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 