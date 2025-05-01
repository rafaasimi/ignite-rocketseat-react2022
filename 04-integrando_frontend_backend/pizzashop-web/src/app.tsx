import { RouterProvider } from 'react-router'

import { Toaster } from 'sonner'

import './styles/global.css'
import { router } from './routes'
import { ThemeProvider } from './components/theme/theme-provider'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

export function App() {
  return (
    <>
      <title>Pizza Shop</title>
      <ThemeProvider defaultTheme="system" storageKey="pizzashop-theme">
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}
