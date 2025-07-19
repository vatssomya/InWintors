# Styling System

## Overview
The project uses styled-components with a centralized theme context for consistent, maintainable styling across all components. The application supports both light and dark themes with a toggle functionality.

## Architecture

### Theme Context
The application uses a centralized theme system managed through React Context with theme switching capabilities:

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

type ThemeMode = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  themeMode: ThemeMode
  toggleTheme: () => void
  setThemeMode: (mode: ThemeMode) => void
}
```

### Theme Provider Setup
The app is wrapped with ThemeProvider in `App.tsx`:

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

## Theme Switching

### Theme Toggle Component
A dedicated component for switching between light and dark themes:

```typescript
// src/components/ThemeToggle.tsx
function ThemeToggle(): ReactElement {
  const { theme, themeMode, toggleTheme } = useTheme()

  return (
    <ToggleButton theme={theme} onClick={toggleTheme}>
      <Icon>
        {themeMode === 'light' ? '🌙' : '☀️'}
      </Icon>
      {themeMode === 'light' ? 'Dark' : 'Light'}
    </ToggleButton>
  )
}
```

### Theme Persistence
Theme preference is automatically saved to localStorage:

```typescript
const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
  // Check localStorage for saved theme preference
  const saved = localStorage.getItem('theme-mode')
  return (saved as ThemeMode) || 'light'
})
```

### Usage in Components
```typescript
function MyComponent(): ReactElement {
  const { theme, themeMode, toggleTheme } = useTheme()
  
  return (
    <div>
      <p>Current theme: {themeMode}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
```

## Styled Components

### Basic Pattern
All components use styled-components with theme integration:

```typescript
import { type ReactElement } from 'react'
import styled from 'styled-components'
import { useTheme } from '../contexts/ThemeContext'

const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
`

const Title = styled.h1`
  color: ${props => props.theme.colors.text.primary};
  font-size: 2rem;
  margin-bottom: ${props => props.theme.spacing.lg};
`

function MyComponent(): ReactElement {
  const { theme } = useTheme()
  
  return (
    <Container theme={theme}>
      <Title theme={theme}>My Title</Title>
    </Container>
  )
}
```

### Theme Values Usage

#### Light Theme Colors
```typescript
// Light theme colors
theme.colors.primary    // #3498db
theme.colors.secondary  // #2c3e50
theme.colors.background // #ffffff
theme.colors.surface    // #f8f9fa
theme.colors.text.primary   // #2c3e50
theme.colors.text.secondary // #888
theme.colors.text.error     // #e53e3e
theme.colors.border // #e2e8f0
theme.colors.hover  // #f1f5f9
```

#### Dark Theme Colors
```typescript
// Dark theme colors
theme.colors.primary    // #60a5fa
theme.colors.secondary  // #94a3b8
theme.colors.background // #0f172a
theme.colors.surface    // #1e293b
theme.colors.text.primary   // #f1f5f9
theme.colors.text.secondary // #94a3b8
theme.colors.text.error     // #f87171
theme.colors.border // #334155
theme.colors.hover  // #334155
```

#### Spacing
```typescript
theme.spacing.xs // 0.25rem
theme.spacing.sm // 0.5rem
theme.spacing.md // 1rem
theme.spacing.lg // 1.5rem
theme.spacing.xl // 2rem
```

#### Border Radius
```typescript
theme.borderRadius.sm // 4px
theme.borderRadius.md // 8px
theme.borderRadius.lg // 12px
```

#### Shadows
```typescript
// Light theme shadows
theme.shadows.sm // 0 1px 3px rgba(0, 0, 0, 0.1)
theme.shadows.md // 0 4px 6px rgba(0, 0, 0, 0.1)
theme.shadows.lg // 0 10px 15px rgba(0, 0, 0, 0.1)

// Dark theme shadows
theme.shadows.sm // 0 1px 3px rgba(0, 0, 0, 0.3)
theme.shadows.md // 0 4px 6px rgba(0, 0, 0, 0.3)
theme.shadows.lg // 0 10px 15px rgba(0, 0, 0, 0.3)
```

## Component Examples

### Button Component
```typescript
const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.sm};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  font-weight: 500;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }

  &:disabled {
    background-color: #4a4a4a;
    cursor: not-allowed;
  }
`
```

### Card Component
```typescript
const Card = styled.div`
  background: ${props => props.theme.colors.surface};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.md};
  border: 1px solid ${props => props.theme.colors.border};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`
```

### Form Input
```typescript
const FormInput = styled.input`
  padding: ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.sm};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`
```

## Responsive Design

### Media Queries
```typescript
const ResponsiveContainer = styled.div`
  padding: ${props => props.theme.spacing.md};

  @media (min-width: 768px) {
    padding: ${props => props.theme.spacing.lg};
  }

  @media (min-width: 1024px) {
    padding: ${props => props.theme.spacing.xl};
  }
`
```

### Grid Layouts
```typescript
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing.md};

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
```

## Theme Transitions

### Smooth Theme Switching
The application includes smooth transitions when switching themes:

```css
/* Global transitions for theme changes */
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
```

### Component Transitions
Individual components can have their own transition effects:

```typescript
const AnimatedCard = styled.div`
  background: ${props => props.theme.colors.surface};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`
```

## Best Practices

### 1. Theme Usage
- Always use `useTheme()` hook in components
- Pass `theme` prop to all styled components
- Use theme values instead of hardcoded values
- Keep theme structure consistent
- Test components in both light and dark modes

### 2. Component Organization
- Group styled components at the top of files
- Use semantic names for styled components
- Keep styled components close to their usage
- Export styled components if reused

### 3. Performance
- Theme context is stable and doesn't cause rerenders
- Styled components are optimized for performance
- Use theme values efficiently
- Smooth transitions enhance user experience

### 4. Maintainability
- Centralized theme management
- Easy to modify colors, spacing, and other values
- Consistent design system across components
- Type-safe theme usage with TypeScript

### 5. Accessibility
- Use semantic color contrast ratios
- Maintain focus states with theme colors
- Ensure proper color usage for text readability
- Test theme switching with screen readers

### 6. Theme Switching
- Always provide a way to toggle themes
- Persist theme preference in localStorage
- Use appropriate icons for theme toggle
- Provide smooth transitions between themes

## Migration from CSS

### Before (CSS)
```css
.button {
  background-color: #3498db;
  color: white;
  padding: 1rem;
  border-radius: 4px;
}
```

### After (Styled Components)
```typescript
const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.sm};
`
```

## TypeScript Integration

### Theme Type Declaration
```typescript
// src/types/styled.d.ts
import 'styled-components'
import { Theme } from '../contexts/ThemeContext'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
```

This ensures full TypeScript support for theme values in styled components. 