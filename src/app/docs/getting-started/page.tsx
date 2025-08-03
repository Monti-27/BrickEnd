export default function GettingStartedPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🚀 Getting Started</h1>
      <p className="text-muted-foreground mb-6">
        Welcome to BrickEnd — your one-stop backend snippet library.
        Use it to scaffold production-ready backends, copy snippets,
        and customize code instantly.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📦 Installation</h2>
        <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
          <code>npx brickend@latest init</code>
        </pre>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✨ Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ready-made code snippets (MongoDB, Postgres, REST, Auth)</li>
          <li>One-click copy buttons</li>
          <li>CLI to scaffold backend layers</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">🛣️ Roadmap</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>[x] Snippet Library</li>
          <li>[x] Auth templates</li>
          <li>[ ] CLI plugin support</li>
          <li>[ ] Public snippet sharing</li>
        </ul>
      </div>
    </div>
  )
}