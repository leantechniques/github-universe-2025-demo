# GitHub Universe 2025 Demo

A modern Next.js 16 demonstration application showcasing the latest React 19 features, TypeScript strict mode, Tailwind CSS v4, and HeroUI components. This project serves as a comprehensive example of building production-ready web applications with cutting-edge frontend technologies.

## 📋 Table of Contents

- [Architecture Overview](#architecture-overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Routes](#api-routes)
- [Component Hierarchy](#component-hierarchy)
- [Development Workflow](#development-workflow)
- [Environment Variables](#environment-variables)
- [Learn More](#learn-more)

## 🏗️ Architecture Overview

```mermaid
graph TB
    subgraph "Client Layer"
        A[Browser] --> B[React 19 Components]
        B --> C[HeroUI Components]
        B --> D[Custom Components]
    end
    
    subgraph "Application Layer"
        E[Next.js 16 App Router] --> F[Page Components]
        E --> G[Layout Components]
        E --> H[Server Components]
        C --> E
        D --> E
    end
    
    subgraph "API Layer"
        I[API Routes] --> J[/api/auth]
        I --> K[/api/data]
    end
    
    subgraph "Styling Layer"
        L[Tailwind CSS v4] --> M[Global Styles]
        L --> N[Component Styles]
        L --> O[Dark Mode Support]
    end
    
    E --> I
    H --> I
    L --> B
    
    style A fill:#e1f5ff
    style E fill:#fff4e1
    style I fill:#ffe1e1
    style L fill:#f0e1ff
```

## 🚀 Technology Stack

```mermaid
graph LR
    subgraph "Frontend"
        A[React 19] --> B[Next.js 16]
        B --> C[TypeScript 5]
    end
    
    subgraph "UI & Styling"
        D[Tailwind CSS v4] --> E[HeroUI]
        F[Framer Motion] --> E
    end
    
    subgraph "Development"
        G[ESLint] --> H[PostCSS]
        H --> I[Type Safety]
    end
    
    C --> D
    E --> B
    G --> C
    
    style A fill:#61dafb
    style B fill:#000000,color:#fff
    style C fill:#3178c6,color:#fff
    style D fill:#06b6d4,color:#fff
    style E fill:#9353d3,color:#fff
```

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.0.1 | React framework with App Router |
| **React** | 19.2.0 | UI library |
| **TypeScript** | 5.x | Type-safe development |
| **Tailwind CSS** | 4.x | Utility-first CSS framework |
| **HeroUI** | 2.8.5 | Modern component library |
| **Framer Motion** | 12.23.24 | Animation library |

## 📁 Project Structure

```mermaid
graph TD
    A[github-universe-2025-demo] --> B[app/]
    A --> C[components/]
    A --> D[lib/]
    A --> E[public/]
    A --> F[Configuration Files]
    
    B --> B1[page.tsx - Main page]
    B --> B2[layout.tsx - Root layout]
    B --> B3[providers.tsx - HeroUI provider]
    B --> B4[globals.css - Global styles]
    B --> B5[hero.ts - HeroUI config]
    B --> B6[api/]
    
    B6 --> B6A[auth/route.ts]
    B6 --> B6B[data/route.ts]
    
    C --> C1[user-form.tsx]
    
    D --> D1[utils.ts]
    
    E --> E1[SVG Assets]
    
    F --> F1[package.json]
    F --> F2[tsconfig.json]
    F --> F3[next.config.ts]
    F --> F4[eslint.config.mjs]
    
    style A fill:#f9f9f9
    style B fill:#e3f2fd
    style C fill:#f3e5f5
    style D fill:#e8f5e9
    style E fill:#fff3e0
```

### Directory Structure

```
github-universe-2025-demo/
├── app/                      # Next.js App Router directory
│   ├── api/                  # API route handlers
│   │   ├── auth/            # Authentication endpoints
│   │   │   └── route.ts     # POST, GET, PUT auth operations
│   │   └── data/            # Data operations
│   │       └── route.ts     # GET, POST, PUT, DELETE data handlers
│   ├── page.tsx             # Home page component
│   ├── layout.tsx           # Root layout with fonts & metadata
│   ├── providers.tsx        # HeroUI provider setup
│   ├── hero.ts              # HeroUI configuration
│   ├── globals.css          # Global styles & Tailwind imports
│   └── favicon.ico          # Site favicon
├── components/              # Reusable React components
│   └── user-form.tsx        # User form component
├── lib/                     # Utility functions & helpers
│   └── utils.ts             # Common utilities
├── public/                  # Static assets
│   ├── next.svg             # Next.js logo
│   ├── vercel.svg           # Vercel logo
│   └── *.svg                # Other SVG assets
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
├── eslint.config.mjs        # ESLint configuration
├── postcss.config.mjs       # PostCSS configuration
├── env.example              # Environment variables template
└── .gitignore              # Git ignore rules
```

## 🎯 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** or **yarn** or **pnpm** or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/leantechniques/github-universe-2025-demo.git
   cd github-universe-2025-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp env.example .env.local
   # Edit .env.local with your values
   ```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page auto-updates as you edit files. Edit `app/page.tsx` to modify the home page.

### Building for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 🔌 API Routes

```mermaid
sequenceDiagram
    participant Client
    participant NextJS
    participant AuthAPI
    participant DataAPI
    
    Client->>NextJS: HTTP Request
    
    alt Authentication Request
        NextJS->>AuthAPI: Route to /api/auth
        AuthAPI->>AuthAPI: Validate Credentials
        AuthAPI-->>Client: Return Token/Error
    else Data Request
        NextJS->>DataAPI: Route to /api/data
        DataAPI->>DataAPI: Process Query
        DataAPI-->>Client: Return Data/Result
    end
```

### Authentication API (`/api/auth`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth` | Authenticate user with username/password |
| `GET` | `/api/auth?attempts=N` | Track login attempts |
| `PUT` | `/api/auth?session=ID` | Manage user sessions |

**Example POST Request:**
```typescript
const response = await fetch('/api/auth', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: 'user', password: 'pass' })
});
```

### Data API (`/api/data`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/data?id=123` | Retrieve data by ID |
| `POST` | `/api/data` | Process file operations |
| `PUT` | `/api/data` | Read file data |
| `DELETE` | `/api/data?message=text` | Handle deletion with message |

## 🧩 Component Hierarchy

```mermaid
graph TD
    A[RootLayout] --> B[Providers]
    B --> C[HeroUIProvider]
    C --> D[Page Components]
    
    D --> E[Home Page]
    E --> F[Image Components]
    E --> G[Navigation Links]
    
    D --> H[Custom Components]
    H --> I[UserForm]
    I --> J[Form Elements]
    I --> K[Event Handlers]
    
    style A fill:#e3f2fd
    style B fill:#f3e5f5
    style C fill:#e8f5e9
    style D fill:#fff3e0
    style H fill:#fce4ec
```

### Component Details

#### Root Layout (`app/layout.tsx`)
- Wraps entire application
- Configures Geist fonts (Sans & Mono)
- Provides metadata for SEO
- Integrates HeroUIProvider

#### Providers (`app/providers.tsx`)
- Client-side provider wrapper
- Initializes HeroUI components
- Enables theming system

#### User Form (`components/user-form.tsx`)
- Demonstrates form handling
- Includes input validation
- Shows API integration patterns

## 🔄 Development Workflow

```mermaid
stateDiagram-v2
    [*] --> Setup
    Setup --> Development
    Development --> Lint
    Lint --> Build
    Build --> Test
    Test --> Development: Issues Found
    Test --> Deploy: All Checks Pass
    Deploy --> [*]
    
    Development --> HotReload: File Change
    HotReload --> Development
```

### Workflow Steps

1. **Setup**: Install dependencies and configure environment
2. **Development**: Write code with hot reload
3. **Lint**: Run ESLint for code quality
4. **Build**: Create production build
5. **Test**: Verify functionality
6. **Deploy**: Deploy to production

### TypeScript Configuration

The project uses **strict mode** TypeScript with:
- Strict type checking enabled
- Path aliases (`@/*` → root directory)
- React JSX transform
- ES2017 target for optimal compatibility

### Styling Approach

- **Tailwind CSS v4** with PostCSS integration
- **CSS Custom Properties** for theming
- **Dark mode** support via `dark:` variants
- **HeroUI** component theming system
- Mobile-first responsive design

## 🔐 Environment Variables

Create a `.env.local` file based on `env.example`:

```bash
# Database Configuration
DATABASE_URL=postgresql://user:pass@localhost:5432/dbname

# AWS Credentials
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key

# GitHub Integration
GITHUB_TOKEN=your_github_token

# Security Keys
JWT_SECRET=your_jwt_secret_key

# OpenAI Integration
OPENAI_API_KEY=your_openai_key
```

⚠️ **Security Note**: Never commit `.env.local` or actual credentials to version control.

## 📚 Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Next.js App Router](https://nextjs.org/docs/app) - Modern routing system
- [Learn Next.js](https://nextjs.org/learn) - Interactive tutorial
- [Next.js GitHub](https://github.com/vercel/next.js) - Official repository

### Technology Documentation

- [React 19 Docs](https://react.dev/) - React documentation
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript guide
- [Tailwind CSS v4](https://tailwindcss.com/docs) - Utility-first CSS
- [HeroUI](https://www.heroui.com/) - Component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure build settings
4. Add environment variables in Vercel dashboard
5. Deploy!

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Other Deployment Options

- **Docker**: Containerize with Next.js standalone output
- **Node.js Server**: Deploy to any Node.js hosting service
- **Static Export**: Export as static HTML (if applicable)

## 📄 License

This project is for demonstration purposes as part of GitHub Universe 2025.

---

**Built with ❤️ using Next.js 16, React 19, TypeScript, Tailwind CSS v4, and HeroUI**
