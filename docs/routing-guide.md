# Routing Guide

## Setup
Using React Router v6 for client-side routing.

## Basic Configuration

### Router Setup
```tsx
// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
```

## Route Types

### Page Routes
- Main content routes
- Rendered in layout
```tsx
<Route path="/about" element={<AboutPage />} />
```

### Layout Routes
- Wrapper routes with shared UI
```tsx
<Route element={<MainLayout />}>
  {/* Child routes rendered in Outlet */}
</Route>
```

### Nested Routes
- Child routes inheriting parent path
```tsx
<Route path="/dashboard">
  <Route index element={<DashboardHome />} />
  <Route path="profile" element={<Profile />} />
</Route>
```

## Navigation

### Link Component
```tsx
import { Link } from 'react-router-dom'

<Link to="/about">About</Link>
```

### Programmatic Navigation
```tsx
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()
navigate('/dashboard')
```

## Route Parameters

### URL Parameters
```tsx
// Route definition
<Route path="/user/:id" element={<UserProfile />} />

// Component
function UserProfile(): ReactElement {
  const { id } = useParams()
  // ...
}
```

### Query Parameters
```tsx
function SearchPage(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q')
  // ...
}
```

## Best Practices

### Route Organization
- Group related routes
- Use descriptive path names
- Keep route config centralized

### Layout Structure
- Use layout routes for shared UI
- Nested layouts for complex UIs
- Consistent navigation patterns

### Type Safety
- Type route parameters
- Type location state
- Use TypeScript for route config
