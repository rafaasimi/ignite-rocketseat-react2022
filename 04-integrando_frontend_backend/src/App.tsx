import { RouterProvider } from 'react-router'

import './styles/global.css'
import { router } from './routes'

export function App() {
  return <RouterProvider router={router}></RouterProvider>
}
