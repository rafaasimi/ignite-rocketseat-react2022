import { RouterProvider } from 'react-router'

import './styles/global.css'
import { router } from './routes'

export function App() {
  return (
    <>
    <title>Pizza Shop</title>
    <RouterProvider router={router} />
    
    </>
     
    
  )
}
