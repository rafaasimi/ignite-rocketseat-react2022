import { RouterProvider } from 'react-router'

import { Toaster } from 'sonner'

import './styles/global.css'
import { router } from './routes'
import { ThemeProvider } from './components/theme/theme-provider'

export function App() {
  return (
    <>
      <title>Pizza Shop</title>
      <ThemeProvider defaultTheme="system" storageKey="pizzashop-theme">
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}
