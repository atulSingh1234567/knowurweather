import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Weather from './components/Weather.jsx'
import About from './components/About.jsx'

const router = createBrowserRouter([{
  path: '',
  element: <Layout/>,
  children: [
    {
      path: '',
      element: <Home />
    },
    {
      path: '/weather',
      element: <Weather/>
    },
    {
      path: '/about',
      element: <About/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}> 
  </RouterProvider>,
)
