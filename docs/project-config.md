# Project Configuration Guide

## TypeScript Configuration

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@pages/*": ["src/pages/*"],
      "@hooks/*": ["src/hooks/*"],
      "@layouts/*": ["src/layouts/*"],
      "@lib/*": ["src/lib/*"],
      "@contexts/*": ["src/contexts/*"],
      "@types/*": ["src/types/*"]
    }
  }
}
```

### Path Aliases
The project uses TypeScript path aliases for cleaner imports:
- `@/*` - Source directory root
- `@components/*` - Component directory
- `@pages/*` - Pages directory
- `@hooks/*` - Custom hooks
- `@layouts/*` - Layout components
- `@lib/*` - Utility functions
- `@contexts/*` - React Context providers
- `@types/*` - TypeScript type declarations

## Styled Components Configuration

### Theme Type Declaration
```typescript
// src/types/styled.d.ts
import 'styled-components'
import { Theme } from '../contexts/ThemeContext'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
```

### Theme Context Setup
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

## Vite Configuration

### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      '@layouts': '/src/layouts',
      '@lib': '/src/lib',
      '@contexts': '/src/contexts',
      '@types': '/src/types'
    }
  }
})
```

## Project Structure
```
src/
├── assets/         # Static assets
├── components/     # Shared components with styled-components
├── contexts/       # React Context providers
│   └── ThemeContext.tsx  # Central theme management
├── hooks/          # Custom React hooks
├── layouts/        # Layout components with theme integration
├── lib/           # Utilities and helpers
├── pages/         # Route components with styled-components
├── types/         # TypeScript type declarations
│   └── styled.d.ts  # Styled-components theme extensions
├── App.tsx        # Root component with ThemeProvider
└── main.tsx       # Entry point
```

## Dependencies

### Core Dependencies
```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.0.0",
    "styled-components": "^6.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@types/styled-components": "^5.1.0",
    "@vitejs/plugin-react": "^4.0.0",
    "typescript": "^5.0.0",
    "vite": "^5.0.0"
  }
}
```

## Development Tools

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Development Server
Vite provides:
- Hot Module Replacement (HMR)
- Fast refresh
- Error overlay
- Source maps
- Styled-components support

### Build Process
Production builds include:
- Code splitting
- Tree shaking
- Asset optimization
- Minification
- Styled-components optimization

## Environment Setup

### Requirements
- Node.js 14.18+ or 16+
- npm 7+

### Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development: `npm run dev`

### Environment Variables
- Create `.env` files for different environments
- Use `VITE_` prefix for client-side variables
- Example: `VITE_API_URL=https://api.example.com`

## Styling Architecture

### Theme Provider Setup
The application is wrapped with ThemeProvider in `App.tsx`:

```typescript
function App(): ReactElement {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            {/* Routes */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  )
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

### Theme Usage
- Always use `useTheme()` hook in components
- Pass `theme` prop to all styled components
- Use theme values instead of hardcoded values
- Keep theme structure consistent

### Component Organization
- Group styled components at the top of files
- Use semantic names for styled components
- Keep styled components close to their usage
- Export styled components if reused

### Type Safety
- Use TypeScript interfaces for props
- Leverage theme type extensions
- Avoid using `any` type
- Use proper return types (ReactElement)
