# React Components Guide

## Component Structure

### Functional Components
All components in this project are functional components using TypeScript with styled-components:

```tsx
import { type ReactElement } from 'react'
import styled from 'styled-components'
import { useTheme } from '../contexts/ThemeContext'

interface ComponentProps {
  // Props interface
}

const StyledComponent = styled.div`
  color: ${props => props.theme.colors.text.primary};
  padding: ${props => props.theme.spacing.md};
`

function Component({ prop1, prop2 }: ComponentProps): ReactElement {
  const { theme } = useTheme()
  
  return (
    <StyledComponent theme={theme}>
      {/* JSX */}
    </StyledComponent>
  )
}
```

### Component Categories

1. **Page Components** (`src/pages/`)
   - Main route components with styled-components
   - Example: `Home.tsx`
   ```tsx
   const HomeContainer = styled.div`
     max-width: 1280px;
     margin: 0 auto;
     padding: 2rem;
   `
   
   function HomePage(): ReactElement {
     const { theme } = useTheme()
     
     return (
       <HomeContainer>
         <Welcome />
       </HomeContainer>
     )
   }
   ```

2. **Layout Components** (`src/layouts/`)
   - Shared layout structure with theme integration
   - Example: `MainLayout.tsx`
   ```tsx
   const LayoutContainer = styled.div`
     min-height: 100vh;
     display: flex;
     flex-direction: column;
   `
   
   function MainLayout(): ReactElement {
     return (
       <LayoutContainer>
         <Navbar />
         <MainContent>
           <Outlet />
         </MainContent>
         <Footer />
       </LayoutContainer>
     )
   }
   ```

3. **Shared Components** (`src/components/`)
   - Reusable UI components with theme context
   - Example: `Welcome.tsx`
   ```tsx
   interface WelcomeProps {
     title?: string
     subtitle?: string
   }
   
   const Title = styled.h1`
     color: ${props => props.theme.colors.text.primary};
     font-size: 2.5rem;
   `
   ```

## Styled Components

### Theme Integration
All styled components have access to the theme context:

```tsx
const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.sm};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`
```

### Theme Usage
Always pass the theme prop to styled components:

```tsx
function MyComponent(): ReactElement {
  const { theme } = useTheme()
  
  return (
    <StyledButton theme={theme} onClick={handleClick}>
      Click me
    </StyledButton>
  )
}
```

## Best Practices

### Type Safety
- Use TypeScript interfaces for props
- Specify return types (ReactElement)
- Avoid using 'any'
- Use theme context for consistent styling

### Component Organization
- One component per file
- Use named exports for utilities
- Default export for main component
- Group styled components at the top of the file

### Styled Components
- Use semantic component names
- Leverage theme values for consistency
- Use responsive design patterns
- Keep styled components close to their usage

### Props
- Define clear interfaces
- Use optional props when appropriate
- Document complex props
- Pass theme prop to all styled components

## Common Patterns

### Custom Hooks
Located in `src/hooks/`:
```tsx
// useWindowSize.ts
export function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  // ...
}
```

### Theme Context
Access theme values throughout the application:
```tsx
import { useTheme } from '../contexts/ThemeContext'

function Component(): ReactElement {
  const { theme } = useTheme()
  // Use theme.colors, theme.spacing, etc.
}
```

### Path Aliases
Using TypeScript path aliases for clean imports:
```tsx
import Welcome from '@components/Welcome'
import { useWindowSize } from '@hooks/useWindowSize'
```

## Theme System

### Available Theme Values
```tsx
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

### Theme Provider Setup
The app is wrapped with ThemeProvider in `App.tsx`:
```tsx
function App(): ReactElement {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <BrowserRouter>
          {/* Routes */}
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  )
}
```
