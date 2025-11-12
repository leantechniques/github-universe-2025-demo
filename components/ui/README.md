# Component Library

A collection of reusable UI components featuring a custom color scheme with **Periwinkle** and **Cornflower Blue**.

## Color Palette

- **Periwinkle**: `#CCCCFF` (RGB: 204, 204, 255)
- **Cornflower Blue**: `#6495ED` (RGB: 100, 149, 237)

## Components

### CustomButton

A button component with support for multiple variants and sizes.

**Props:**
- `variant`: `"periwinkle" | "cornflower" | "solid" | "bordered" | "light"` (default: `"solid"`)
- `size`: `"sm" | "md" | "lg"` (default: `"md"`)
- `onClick`: Function to call when button is clicked
- `disabled`: Boolean to disable the button
- `className`: Additional CSS classes

**Usage:**
```tsx
import { CustomButton } from "@/components/ui";

<CustomButton variant="periwinkle" size="md">
  Click Me
</CustomButton>
```

### CustomCard

A card component with optional header, footer, and color schemes.

**Props:**
- `title`: Optional title for the card header
- `footer`: Optional footer content
- `colorScheme`: `"periwinkle" | "cornflower" | "default"` (default: `"default"`)
- `className`: Additional CSS classes

**Usage:**
```tsx
import { CustomCard } from "@/components/ui";

<CustomCard 
  title="My Card" 
  colorScheme="periwinkle"
  footer={<button>Action</button>}
>
  Card content goes here
</CustomCard>
```

### CustomInput

An input field component with themed styling.

**Props:**
- `label`: Optional label for the input
- `placeholder`: Placeholder text
- `value`: Controlled value
- `onChange`: Function called when value changes
- `type`: `"text" | "email" | "password" | "number"` (default: `"text"`)
- `colorScheme`: `"periwinkle" | "cornflower" | "default"` (default: `"default"`)
- `disabled`: Boolean to disable the input
- `className`: Additional CSS classes

**Usage:**
```tsx
import { CustomInput } from "@/components/ui";

<CustomInput 
  label="Email" 
  placeholder="Enter your email..."
  colorScheme="cornflower"
  onChange={(value) => console.log(value)}
/>
```

### CustomBadge

A badge/chip component for displaying labels and tags.

**Props:**
- `variant`: `"periwinkle" | "cornflower" | "solid" | "bordered" | "flat"` (default: `"solid"`)
- `size`: `"sm" | "md" | "lg"` (default: `"md"`)
- `className`: Additional CSS classes

**Usage:**
```tsx
import { CustomBadge } from "@/components/ui";

<CustomBadge variant="periwinkle" size="md">
  New
</CustomBadge>
```

### CustomAlert

An alert component for displaying notifications and messages.

**Props:**
- `type`: `"periwinkle" | "cornflower" | "info" | "success" | "warning" | "error"` (default: `"info"`)
- `title`: Optional title for the alert
- `className`: Additional CSS classes

**Usage:**
```tsx
import { CustomAlert } from "@/components/ui";

<CustomAlert type="periwinkle" title="Notice">
  This is an informational message.
</CustomAlert>
```

## Demo

Visit `/components-showcase` to see all components in action with interactive examples.

## Technical Details

- Built with **Next.js 16** and **React 19**
- Uses **HeroUI** component library as base
- Styled with **Tailwind CSS v4**
- Full TypeScript support with proper type definitions
- Responsive design with mobile-first approach

## Customization

The color scheme is defined in `app/globals.css` using CSS custom properties:

```css
:root {
  --periwinkle: #CCCCFF;
  --periwinkle-rgb: 204, 204, 255;
  --cornflower-blue: #6495ED;
  --cornflower-blue-rgb: 100, 149, 237;
}
```

These colors are also configured in the HeroUI theme in `app/hero.ts` for seamless integration with HeroUI components.
