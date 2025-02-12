import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import { MenuProvider } from './contexts/MenuContext.tsx';
import { router } from './routes/router.tsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
// console.log("🚀 ~ PUBLISHABLE_KEY:", PUBLISHABLE_KEY)
// Import your Publishable Key

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env.local file')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider
          publishableKey={PUBLISHABLE_KEY}
          afterSignOutUrl="/"
        >
        <ThemeProvider>
          <MenuProvider>
            <RouterProvider router={router} />
          </MenuProvider>
        </ThemeProvider>
    </ClerkProvider>
  </React.StrictMode>
);
