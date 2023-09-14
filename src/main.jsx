import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Userhome from './component/Userhome.jsx'
import Adminhome from './component/Adminhome.jsx'
import Owner from './component/Owner.jsx'


const router =  createBrowserRouter ([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/userhome',
    element:<Userhome/>
  },
  {
    path:'/adminhome',
    element:<Adminhome/>
  },
  {
    path:'/owner',
    element:<Owner/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
