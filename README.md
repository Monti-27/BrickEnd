# BrickEnd - Backend Library

A modern full-stack backend library built with Next.js 15, Prisma ORM, PostgreSQL, and NextAuth.js.

## Features

- ✅ **Next.js 15.4.5** with App Router
- ✅ **Prisma ORM** with PostgreSQL
- ✅ **NextAuth.js** authentication (GitHub & Email)
- ✅ **Tailwind CSS v4** with shadcn/ui components
- ✅ **TypeScript** for type safety
- ✅ **Protected API routes** and middleware
- ✅ **Dashboard UI** with modern components
- ✅ **Code snippets** storage and management

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set up Environment Variables

Copy the `.env` file and update with your values:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/brickend?schema=public"

# NextAuth.js
NEXTAUTH_SECRET="your-secret-key-here-change-in-production"
NEXTAUTH_URL="http://localhost:3000"

# GitHub OAuth (optional)
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

### 3. Set up PostgreSQL Database

Make sure you have PostgreSQL running locally or use a cloud provider like:
- [Railway](https://railway.app/)
- [Supabase](https://supabase.com/)
- [PlanetScale](https://planetscale.com/)
- [Neon](https://neon.tech/)

### 4. Run Database Migrations

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# (Optional) Open Prisma Studio to view data
npx prisma studio
```

### 5. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## Authentication Setup

### GitHub OAuth (Recommended)

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set Authorization callback URL to: `http://localhost:3000/api/auth/callback/github`
4. Copy Client ID and Client Secret to your `.env` file

### Email Provider

For email authentication, you'll need an SMTP server. Add these to your `.env`:

```bash
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="your-email@gmail.com"
```

## Project Structure

```
brickend/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/          # NextAuth.js routes
│   │   │   └── snippets/      # Protected API routes
│   │   ├── auth/login/        # Login page
│   │   ├── dashboard/         # Protected dashboard
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── auth/              # Auth components
│   │   ├── layout/            # Layout components
│   │   ├── providers/         # Context providers
│   │   └── ui/                # shadcn/ui components
│   ├── lib/
│   │   ├── auth.ts            # NextAuth configuration
│   │   ├── db.ts              # Prisma client
│   │   └── utils.ts           # Utility functions
│   └── types/
│       └── next-auth.d.ts     # NextAuth type extensions
└── middleware.ts              # Route protection
```

## Database Schema

The project includes these models:

- **User**: NextAuth.js user data
- **Account**: OAuth account information
- **Session**: User sessions
- **VerificationToken**: Email verification
- **Snippet**: Code snippets with user association

## API Routes

### Protected Routes

- `GET /api/snippets` - Get user's snippets
- `POST /api/snippets` - Create new snippet

### Authentication Routes

- `/api/auth/signin` - Sign in
- `/api/auth/signout` - Sign out
- `/api/auth/callback/[provider]` - OAuth callbacks

## Development

### Adding New Components

```bash
# Add shadcn/ui components
npx shadcn@latest add [component-name]
```

### Database Changes

```bash
# After modifying schema.prisma
npx prisma db push

# Or create migrations for production
npx prisma migrate dev --name [migration-name]
```

### Type Safety

The project uses TypeScript throughout with:
- Prisma generated types
- NextAuth.js type extensions
- shadcn/ui component types

## Deployment

### Environment Variables

Make sure to set these in production:

- `DATABASE_URL` - Production PostgreSQL URL
- `NEXTAUTH_SECRET` - Strong random secret
- `NEXTAUTH_URL` - Your production domain
- OAuth provider credentials

### Build

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - see LICENSE file for details.
