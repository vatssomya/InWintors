# Build Configuration

## Vite Configuration
The project uses Vite as its build tool. Here's a detailed explanation of the configuration in `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Plugins configuration
  plugins: [
    react()  // Enables React features including JSX/TSX transformation
  ],
  
  // Module resolution
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  }
})
```

## TypeScript Configuration
The `tsconfig.json` file is configured for optimal TypeScript and React development:

```json
{
  "compilerOptions": {
    // Language and Environment
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "jsx": "react-jsx",

    // Modules
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,

    // Type Checking
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    // JavaScript Support
    "allowJs": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,

    // Other
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## Build Scripts
Available npm scripts in `package.json`:

- `dev`: Start development server
- `build`: Build for production
- `lint`: Run ESLint
- `preview`: Preview production build locally

## Development vs Production

### Development
- Hot Module Replacement (HMR)
- Source maps
- Development-specific plugins
- Detailed error messages

### Production
- Minification
- Tree shaking
- Code splitting
- Asset optimization

## Performance Optimizations

1. **Code Splitting**
   - Route-based splitting
   - Dynamic imports

2. **Asset Handling**
   - Automatic public path
   - Asset size limits
   - Image optimization

3. **Bundle Optimization**
   - Tree shaking
   - Minification
   - Compression
