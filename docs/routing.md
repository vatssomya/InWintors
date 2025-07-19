# Routing Guide

## Setup
The project uses React Router v6 for client-side routing.

## Route Configuration
Routes are defined in `App.tsx`:

```typescript
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
```

## Route Types

### Public Routes
- Accessible to all users
- Examples: Home, About, Contact

### Protected Routes
- Require authentication
- Example: Dashboard

## Navigation

### Using Links
```typescript
import { Link } from 'react-router-dom'

<Link to="/about">About</Link>
```

### Programmatic Navigation
```typescript
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()
navigate('/dashboard')
```

## Route Parameters

### URL Parameters
```typescript
// Route definition
<Route path="/user/:id" element={<UserProfile />} />

// In component
const { id } = useParams()
```

### Query Parameters
```typescript
// Using search params
const [searchParams, setSearchParams] = useSearchParams()
```

## Best Practices

1. **Route Organization**
   - Group related routes
   - Use nested routes for related content
   - Keep route definitions centralized

2. **Layout Handling**
   - Use layout routes for shared UI
   - Outlet component for nested routes
   - Consistent page structure

3. **Navigation Guards**
   - Implement authentication checks
   - Handle unauthorized access
   - Redirect appropriately
