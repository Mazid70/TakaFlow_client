import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { allRouter } from './Provider/Routes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={allRouter}>
    <React.StrictMode>
      <App />
</React.StrictMode>,
  </RouterProvider>
  
)
