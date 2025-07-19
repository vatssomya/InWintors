# Source Directory Structure

## Overview
The `src` folder contains all the source code for the InWintors application, using styled-components and theme context for consistent styling.

```
src/
├── assets/         # Static files like images, fonts, and other media
│   ├── images/     # Image files (.png, .jpg, .svg)
│   └── fonts/      # Font files
│
├── components/     # Reusable React components with styled-components
│   ├── ui/        # Basic UI components (buttons, inputs, etc.)
│   └── features/  # Complex feature components
│
├── contexts/      # React Context providers
│   └── ThemeContext.tsx  # Central theme management
│
├── hooks/         # Custom React hooks
│   └── useWindowSize.ts    # Hook for tracking window dimensions
│
├── layouts/       # Layout components that structure pages
│   └── MainLayout.tsx      # Main application layout with theme
│
├── lib/          # Utility functions and shared logic
│   ├── api/      # API-related functions
│   └── utils/    # Helper functions
│
├── pages/        # Route components (one per route) with styled-components
│   ├── home/     # Home page and related components
│   ├── about/    # About page and related components
│   ├── dashboard/# Dashboard page and related components
│   └── contact/  # Contact page and related components
│
├── types/        # TypeScript type declarations
│   └── styled.d.ts  # Styled-components theme type extensions
│
├── App.tsx       # Root React component with ThemeProvider
├── main.tsx      # Application entry point
├── index.css     # Global styles
└── vite-env.d.ts # Vite type declarations
```

## Key Files

### Entry Points
- `main.tsx`: Application bootstrap and React DOM rendering
- `App.tsx`: Root component with routing and ThemeProvider configuration

### Configuration
- `vite-env.d.ts`: TypeScript declarations for Vite
- `index.css`: Global CSS styles
- `types/styled.d.ts`: Styled-components theme type extensions

## Directory Purposes

### `assets/`
- Contains static files
- Images, icons, and fonts
- Other media resources

### `components/`
- Reusable React components using styled-components
- Follows atomic design principles
- Separated by complexity and purpose
- All components use theme context for consistent styling

### `contexts/`
- React Context providers for global state
- `ThemeContext.tsx`: Central theme management with colors, spacing, shadows, etc.
- Provides consistent styling across the entire application

### `hooks/`
- Custom React hooks
- Reusable stateful logic
- Example: `useWindowSize.ts` for responsive design

### `layouts/`
- Page structure components with theme integration
- Shared navigation elements
- Common UI elements like headers and footers
- All layouts use styled-components and theme context

### `lib/`
- Utility functions
- API integrations
- Helper methods

### `pages/`
- Route-specific components with styled-components
- Page-level state management
- Route-specific business logic
- All pages use theme context for consistent styling

### `types/`
- TypeScript type declarations
- `styled.d.ts`: Extends styled-components DefaultTheme interface
- Ensures type safety for theme values in styled components

## Styling Architecture

### Theme System
The application uses a centralized theme system:

```typescript
// src/contexts/ThemeContext.tsx
interface Theme {
  colors: {
    primary: string
    secondary: string
    background: string
    surface: string
    text: {
      primary: string
      secondary: string
      error: string
    }
    border: string
    hover: string
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  borderRadius: {
    sm: string
    md: string
    lg: string
  }
  shadows: {
    sm: string
    md: string
    lg: string
  }
}
```

### Component Pattern
All components follow this pattern:

```typescript
import { type ReactElement } from 'react'
import styled from 'styled-components'
import { useTheme } from '../contexts/ThemeContext'

const StyledComponent = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.md};
`

function MyComponent(): ReactElement {
  const { theme } = useTheme()
  
  return (
    <StyledComponent theme={theme}>
      {/* Content */}
    </StyledComponent>
  )
}
```

## Best Practices

1. **Component Structure**
   - Keep components small and focused
   - Use styled-components for all styling
   - Always use theme context for consistency

2. **File Organization**
   - Use proper file naming conventions
   - Group related files together
   - Group styled components at the top of files

3. **Theme Usage**
   - Always import and use `useTheme()` hook
   - Pass `theme` prop to all styled components
   - Use theme values instead of hardcoded values

4. **Type Safety**
   - Follow TypeScript best practices
   - Use proper interfaces for props
   - Leverage theme type extensions

5. **Maintainability**
   - Centralized theme management
   - Consistent design system
   - Easy to modify colors, spacing, and other values
