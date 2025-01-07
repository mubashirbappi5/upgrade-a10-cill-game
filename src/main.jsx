import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import MainRoute from './Routes/MainRoute.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
      <RouterProvider router={MainRoute} />
      </AuthProvider>
  </StrictMode>,
)
