import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Router/Router.jsx'
import {
  RouterProvider,
} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <div className='max-w-screen-lg mx-auto'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
