# Project Development Guidelines

## Expertise Requirements

You are a senior developer with expertise in:

-   **Frontend Development**: React 19, Next.js 16 (App Router)
-   **TypeScript**: Strict mode enabled, type-safe development
-   **Styling**: Tailwind CSS v4, CSS custom properties
-   **UI Components**: HeroUI component library
-   **Backend**: Next.js API routes, server components, server actions

## Code Standards

### TypeScript

-   Always use TypeScript with strict type checking
-   Define explicit types for all function parameters and return values
-   Use type inference where appropriate
-   Prefer `interface` over `type` for object shapes
-   Use `const` assertions and `as const` for literal types

### React & Next.js

-   Use React Server Components by default
-   Add `"use client"` directive only when necessary (hooks, browser APIs, event handlers)
-   Implement proper error boundaries
-   Use Next.js Image component for all images
-   Implement proper loading and error states
-   Use dynamic imports for code splitting when appropriate

### Component Architecture

#### UI Component Hierarchy

1. **HeroUI components**: Use existing HeroUI components when available

    - Import components from `@heroui/react`
    - Components are wrapped with HeroUIProvider in `app/providers.tsx`
    - Always check HeroUI documentation for available components before creating custom ones
    - Example usage:

    ```tsx
    import { Button, Card, Input } from "@heroui/react";
    ```

2. **Reusable Components**: Create in `@/components`

    - Should be pure, reusable, and well-documented
    - Use composition patterns
    - Include TypeScript interfaces for all props
    - Example structure:

    ```tsx
    // components/custom-component.tsx
    interface CustomComponentProps {
        // Well-documented props
    }

    export function CustomComponent({ ...props }: CustomComponentProps) {
        // Implementation
    }
    ```

3. **Page Components**: Create in `app/` directory
    - Follow Next.js App Router conventions
    - Use proper file naming: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`

### Styling Guidelines

-   Use Tailwind CSS classes exclusively
-   Leverage CSS variables defined in `globals.css`
-   Use HeroUI's built-in theming system
-   Maintain dark mode support using `dark:` variants
-   Responsive design: mobile-first approach with `sm:`, `md:`, `lg:` breakpoints
-   HeroUI components come with built-in styling - use their variant props when available

### File Organization

```
app/
  ├── (routes)/          # Route groups
  │   └── page.tsx       # Page components
  ├── api/               # API routes
  ├── providers.tsx      # HeroUIProvider setup
  ├── hero.ts            # HeroUI configuration
  └── globals.css        # Global styles

components/
  ├── layout/            # Layout components
  ├── features/          # Feature-specific components
  └── shared/            # Shared/common components

lib/
  ├── utils.ts           # Utility functions
  ├── constants.ts       # Constants
  └── types.ts           # TypeScript type definitions

hooks/                   # Custom React hooks
```

## Development Workflow

### Adding New Features

1. Check if HeroUI has a component that fits the need
2. Import HeroUI components directly from `@heroui/react`
3. Create reusable components in `@/components` if needed
4. Implement feature in appropriate route in `app/` directory
5. Ensure TypeScript types are properly defined
6. Add proper error handling and loading states

### Best Practices

-   **Performance**: Use React.memo, useMemo, useCallback appropriately
-   **Accessibility**: HeroUI components have built-in accessibility features - use them
-   **SEO**: Use Next.js metadata API for all pages
-   **Testing**: Write tests for critical paths
-   **Code Splitting**: Use dynamic imports for heavy components
-   **Data Fetching**: Use Server Components for data fetching when possible

### Common Patterns

#### Server Component with Client Interaction

```tsx
// app/feature/page.tsx (Server Component)
import { ClientComponent } from "./client-component";

async function getData() {
    // Server-side data fetching
}

export default async function Page() {
    const data = await getData();
    return <ClientComponent initialData={data} />;
}
```

#### Using HeroUI components with custom styling

```tsx
import { Button } from "@heroui/react";

<Button color="primary" variant="solid" size="lg" className="custom-class">
    Click me
</Button>;
```

#### HeroUI with Framer Motion

HeroUI works seamlessly with Framer Motion (already installed):

```tsx
import { motion } from "framer-motion";
import { Card } from "@heroui/react";

<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Card>Content</Card>
</motion.div>;
```

## Dependencies

-   **@heroui/react**: UI component library
-   **framer-motion**: Animation library (works with HeroUI)
-   Prefer using existing dependencies before adding new ones
-   Document why a dependency was added

## Remember

-   This is a production-ready application
-   Code should be maintainable and scalable
-   Follow React and Next.js best practices
-   Utilize TypeScript's type system fully
-   Keep components small and focused
-   Write self-documenting code with clear naming
-   Leverage HeroUI's built-in theming and accessibility features
