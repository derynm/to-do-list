import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home.tsx'
import { Activity } from './Activity.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout.tsx'
import './assets/css/index.css'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/activity',
        element: <Activity />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
