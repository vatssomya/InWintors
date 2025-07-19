# Type System

## Overview
The project uses TypeScript for type safety and better developer experience.

## Common Types

### Component Props
```typescript
interface ComponentProps {
  // Required props
  title: string;
  onAction: (id: string) => void;
  
  // Optional props
  description?: string;
  className?: string;
}
```

### React Element Types
```typescript
import { type ReactElement, type ReactNode } from 'react'

// Function components
function Component(): ReactElement {
  return <div />
}

// Components with children
interface ParentProps {
  children: ReactNode
}
```

### Event Handlers
```typescript
// Click events
type ClickHandler = (event: React.MouseEvent<HTMLElement>) => void

// Form events
type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void

// Input events
type InputHandler = (event: React.ChangeEvent<HTMLInputElement>) => void
```

## Type Organization

### Type Files
- Located in `/src/types`
- Shared type definitions
- Type utilities

### Component Types
- Co-located with components
- Specific to component needs
- Export for reuse if needed

## Best Practices

1. **Type Inference**
   - Let TypeScript infer types when obvious
   - Explicit types for function parameters
   - Explicit return types for components

2. **Type vs Interface**
   - Use `interface` for object types
   - Use `type` for unions and primitives
   - Extend interfaces when possible

3. **Generic Types**
   - Use for reusable components
   - Constraint generics appropriately
   - Document generic parameters

4. **Strict Mode**
   - Enable strict TypeScript checks
   - No implicit any
   - Strict null checks
   - Exact object types
