import { RouterProvider } from 'react-router'

import { Toaster } from 'sonner'

import './styles/global.css'
import { router } from './routes'

export function App() {
  return (
    <>
      <title>Pizza Shop</title>
      <Toaster richColors />
      <RouterProvider router={router} />
    </>
  )
}
