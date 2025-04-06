# Expat Blog - Next.js Application

A modern blog application built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

### Core Technologies

1. **Next.js 14**
   - Version: 14.x
   - Purpose: React framework for production
   - Key Features:
     - Server-side rendering
     - Static site generation
     - API routes
     - File-based routing
   - How to Edit:
     - Pages are in the `app` directory
     - API routes in `app/api`
     - Components in `components` directory

2. **TypeScript**
   - Version: 5.x
   - Purpose: Adding type safety to JavaScript
   - Key Features:
     - Static type checking
     - Interfaces and types
     - Better IDE support
   - How to Edit:
     - Type definitions in `.ts` files
     - Interface definitions in `types` directory
     - Edit `tsconfig.json` for TypeScript settings

3. **Tailwind CSS**
   - Version: 3.x
   - Purpose: Utility-first CSS framework
   - Key Features:
     - Responsive design
     - Customizable theme
     - CSS-in-JS alternative
   - How to Edit:
     - Customize in `tailwind.config.js`
     - Add utilities directly in JSX
     - Use @apply for common styles

### State Management

1. **React Context**
   - Purpose: State management
   - Key Features:
     - Global state
     - Provider pattern
     - Custom hooks
   - How to Edit:
     - Context providers in `context` directory
     - Custom hooks in `hooks` directory
     - Use `useContext` for access

### UI Components

1. **Shadcn/ui**
   - Version: Latest
   - Purpose: Reusable UI components
   - Key Features:
     - Consistent design system
     - Customizable components
     - TypeScript support
   - How to Edit:
     - Components in `components/ui`
     - Theme customization in `theme.json`
     - Add new components with `npx shadcn-ui@latest add`

### Development Tools

1. **ESLint**
   - Version: Latest
   - Purpose: Code linting
   - Key Features:
     - Code style enforcement
     - Error prevention
     - Automatic fixes
   - How to Edit:
     - Rules in `.eslintrc.json`
     - Run `npm run lint` to check
     - Run `npm run lint:fix` to fix

2. **Prettier**
   - Version: Latest
   - Purpose: Code formatting
   - Key Features:
     - Consistent formatting
     - Automatic formatting
     - Editor integration
   - How to Edit:
     - Settings in `.prettierrc`
     - Run `npm run format` to format

## 🛠️ Project Structure

```
expat-blog/
├── app/                     # Next.js pages and routes
├── components/              # Reusable React components
│   └── ui/                 # Shadcn/ui components
├── context/                # React context providers
├── hooks/                  # Custom React hooks
│   └── use-toast.ts       # Toast notification hook
├── lib/                    # Utility functions
├── public/                 # Static assets
├── styles/                 # Global styles
└── types/                  # TypeScript type definitions
```

## 🔧 Development Setup

1. **Prerequisites**
   - Node.js (v18 or higher)
   - npm (v8 or higher)
   - Git

2. **Getting Started**
   ```bash
   # Install dependencies
   npm install

   # Run development server
   npm run dev

   # Open http://localhost:3000
   ```

## 📝 Code Style Guidelines

1. **Naming Conventions**
   - Components: PascalCase
   - Functions: camelCase
   - Variables: camelCase
   - Constants: UPPER_SNAKE_CASE

2. **File Structure**
   - Keep related components together
   - Export default components
   - Use barrels (index.ts) for exports

3. **TypeScript Usage**
   - Always use strict mode
   - Define interfaces for complex objects
   - Use enums for fixed value sets
   - Avoid any type

## 📦 Package Management

### Adding New Dependencies

1. **Development Dependencies**
   ```bash
   npm install -D <package-name>
   ```

2. **Production Dependencies**
   ```bash
   npm install <package-name>
   ```

### Package Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run lint:fix`: Fix ESLint issues
- `npm run format`: Format code with Prettier

## 📚 Documentation

1. **Component Documentation**
   - Add JSDoc comments for all components
   - Document props and return values
   - Include usage examples

2. **State Management**
   - Document context providers
   - Explain state structure
   - Document custom hooks

3. **API Documentation**
   - Document all API routes
   - Include request/response examples
   - Document authentication

## 🚀 Deployment

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Use Vercel (recommended)
   - Configure environment variables
   - Set up deployment hooks

## 📝 Best Practices

1. **Component Design**
   - Keep components small and focused
   - Use composition over inheritance
   - Extract reusable logic

2. **State Management**
   - Lift state up when needed
   - Use context for global state
   - Keep state flat

3. **Performance**
   - Use memoization for expensive calculations
   - Implement proper error boundaries
   - Optimize images

4. **Accessibility**
   - Use semantic HTML
   - Implement ARIA attributes
   - Test with screen readers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
