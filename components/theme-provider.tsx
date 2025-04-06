'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
  useTheme as useNextTheme,
} from 'next-themes'
import { ThemeToggle } from './theme-toggle'
import { Toaster } from './ui/toaster'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { resolvedTheme } = useNextTheme()

  return (
    <NextThemesProvider {...props}>
      {children}
      <ThemeToggle />
      <Toaster />
    </NextThemesProvider>
  )
}
