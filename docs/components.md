# Component Structure

## Overview
The project uses a hierarchical component structure with styled-components and theme context to maintain clean, reusable, and consistent code.

## Directory Organization

### `/src/components`
Reusable UI components that can be shared across multiple pages, using styled-components for styling.

#### ErrorBoundary
```typescript
// Error handling component that catches JavaScript errors
// Uses styled-components with theme integration
// Used in App.tsx to wrap the entire application
```

### `/src/layouts`
Layout components that define the structure of pages with theme-aware styling.

#### MainLayout
```typescript
// Main layout component that includes:
// - Navigation with theme integration
// - Header with responsive design
// - Footer with consistent styling
// - Content area with proper spacing
```

### `/src/contexts`
Theme and context management for consistent styling across the application.

#### ThemeContext
```typescript
// Central theme management with:
// - Color palette (primary, secondary, background, surface)
// - Spacing system (xs, sm, md, lg, xl)
// - Border radius values
// - Shadow system
// - Text color variants
```

## Component Types

### Page Components
- Located in `/src/pages`
- Represent full pages/routes
- Handle data fetching and state management
- Use styled-components for consistent theming
- Examples: Home.tsx, About.tsx, Dashboard.tsx, Contact.tsx

### Feature Components
- Located in `/src/components/features`
- Represent complex UI features
- Can contain multiple smaller components
- Handle specific feature logic with theme integration

### UI Components
- Located in `/src/components/ui`
- Pure presentational components
- Highly reusable with styled-components
- Minimal business logic
- Consistent theming through context

## Styled Components Pattern

### Basic Structure
```typescript
import { type ReactElement } from 'react'
import styled from 'styled-components'
import { useTheme } from '../contexts/ThemeContext'

const StyledContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
`

const StyledTitle = styled.h1`
  color: ${props => props.theme.colors.text.primary};
  font-size: 2rem;
  margin-bottom: ${props => props.theme.spacing.lg};
`

export function ComponentName(): ReactElement {
  const { theme } = useTheme()
  
  return (
    <StyledContainer theme={theme}>
      <StyledTitle theme={theme}>Title</StyledTitle>
    </StyledContainer>
  )
}
```

### Theme Integration
All components have access to the centralized theme:

```typescript
// Colors
theme.colors.primary
theme.colors.secondary
theme.colors.background
theme.colors.surface
theme.colors.text.primary
theme.colors.text.secondary
theme.colors.text.error

// Spacing
theme.spacing.xs  // 0.25rem
theme.spacing.sm  // 0.5rem
theme.spacing.md  // 1rem
theme.spacing.lg  // 1.5rem
theme.spacing.xl  // 2rem

// Border Radius
theme.borderRadius.sm  // 4px
theme.borderRadius.md  // 8px
theme.borderRadius.lg  // 12px

// Shadows
theme.shadows.sm  // 0 1px 3px rgba(0, 0, 0, 0.1)
theme.shadows.md  // 0 4px 6px rgba(0, 0, 0, 0.1)
theme.shadows.lg  // 0 10px 15px rgba(0, 0, 0, 0.1)
```

## Best Practices

1. **Component Structure**
   ```typescript
   import { type ReactElement } from 'react'
   import styled from 'styled-components'
   import { useTheme } from '../contexts/ThemeContext'
   
   interface Props {
     // Props definition
   }
   
   const StyledComponent = styled.div`
     // Styled component definition
   `
   
   export function ComponentName({ prop1, prop2 }: Props): ReactElement {
     const { theme } = useTheme()
     
     return (
       <StyledComponent theme={theme}>
         {/* JSX */}
       </StyledComponent>
     )
   }
   ```

2. **Props Typing**
   - Always define prop interfaces
   - Use explicit types
   - Avoid `any`
   - Include theme prop for styled components

3. **Component Organization**
   - One component per file
   - Clear, descriptive names
   - Consistent file structure
   - Group styled components at the top
   - Always use theme context

4. **Styled Components**
   - Use semantic component names
   - Leverage theme values for consistency
   - Use responsive design patterns
   - Keep styled components close to usage
   - Always pass theme prop

5. **Theme Usage**
   - Always import and use useTheme hook
   - Pass theme prop to all styled components
   - Use theme values instead of hardcoded values
   - Maintain consistency across components
