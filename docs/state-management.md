# State Management

## Local State
Using React's built-in state management with `useState` and `useReducer`.

### useState Example
```typescript
function Counter(): ReactElement {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      Count: {count}
    </button>
  )
}
```

### useReducer Example
```typescript
interface State {
  count: number
  isLoading: boolean
}

type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'setLoading', payload: boolean }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    case 'setLoading':
      return { ...state, isLoading: action.payload }
  }
}
```

## Context API
For sharing state between components without prop drilling.

### Theme Context
Central theme management for consistent styling across the application.

```typescript
// Theme interface
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

// Create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Provider
function ThemeProvider({ children }: PropsWithChildren): ReactElement {
  const defaultTheme: Theme = {
    colors: {
      primary: '#3498db',
      secondary: '#2c3e50',
      background: '#ffffff',
      surface: '#f8f9fa',
      text: {
        primary: '#2c3e50',
        secondary: '#888',
        error: '#e53e3e'
      },
      border: '#e2e8f0',
      hover: '#f1f5f9'
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem'
    },
    borderRadius: {
      sm: '4px',
      md: '8px',
      lg: '12px'
    },
    shadows: {
      sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
      md: '0 4px 6px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.1)'
    }
  }
  
  return (
    <ThemeContext.Provider value={{ theme: defaultTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook
function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
```

### Usage in Components
```typescript
function MyComponent(): ReactElement {
  const { theme } = useTheme()
  
  return (
    <StyledButton theme={theme}>
      Click me
    </StyledButton>
  )
}
```

## Data Fetching
Using custom hooks for data fetching and state management.

```typescript
function useData<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetchData()
  }, [url])

  async function fetchData() {
    try {
      const response = await fetch(url)
      const json = await response.json()
      setData(json)
    } catch (err) {
      setError(err as Error)
    } finally {
      setIsLoading(false)
    }
  }

  return { data, isLoading, error, refetch: fetchData }
}
```

## Best Practices

1. **State Location**
   - Keep state as close as possible to where it's used
   - Lift state up when needed by multiple components
   - Use context for truly global state (like theme)
   - Use theme context for consistent styling

2. **State Updates**
   - Use functional updates for state based on previous value
   - Batch related state updates
   - Consider using reducers for complex state
   - Always pass theme prop to styled components

3. **Performance**
   - Memoize callbacks with useCallback
   - Memoize expensive computations with useMemo
   - Use context selectively to avoid unnecessary rerenders
   - Theme context is stable and doesn't cause rerenders

4. **Theme Management**
   - Always use useTheme hook in components
   - Pass theme prop to all styled components
   - Use theme values instead of hardcoded values
   - Keep theme structure consistent across the app

5. **Styled Components**
   - Group styled components at the top of files
   - Use semantic names for styled components
   - Leverage theme values for consistency
   - Use responsive design patterns
