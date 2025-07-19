# TypeScript Best Practices

## Type Definitions

### Component Props
```typescript
interface ComponentProps {
  // Required props
  title: string
  onAction: (value: string) => void
  
  // Optional props
  subtitle?: string
  className?: string
}
```

### React Types
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

## Custom Types

### Utility Types
```typescript
// Union types
type Status = 'idle' | 'loading' | 'success' | 'error'

// Generic types
interface ApiResponse<T> {
  data: T
  status: Status
}
```

### Event Handlers
```typescript
// Click events
type ClickHandler = (event: React.MouseEvent<HTMLElement>) => void

// Form events
type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void
```

## Type Safety

### Strict Mode
The project uses strict TypeScript settings:
```json
{
  "strict": true,
  "noImplicitAny": true,
  "strictNullChecks": true,
  "strictFunctionTypes": true
}
```

### Type Assertions
Use type assertions sparingly:
```typescript
// Prefer type checking
if (element instanceof HTMLInputElement) {
  element.value = ''
}

// Over type assertion
(element as HTMLInputElement).value = ''
```

## Organization

### Type Files
- Place shared types in `src/types/`
- Co-locate component types with components
- Use barrel exports for type collections

### Naming Conventions
- Interfaces: PascalCase, prefix with 'I' (optional)
- Types: PascalCase
- Generics: Single uppercase letter or descriptive PascalCase

## Advanced Patterns

### Type Guards
```typescript
function isError(value: unknown): value is Error {
  return value instanceof Error
}
```

### Mapped Types
```typescript
type Nullable<T> = { [K in keyof T]: T[K] | null }
```

### Conditional Types
```typescript
type ArrayElement<T> = T extends Array<infer U> ? U : never
```
