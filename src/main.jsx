import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



import App from './App.jsx'
import Login from './pages/pageLogin.jsx'
import CreateUser from './pages/pageCreateUser.jsx'

const router = createBrowserRouter ([
  {
    path: 'deploy-login/',
    element: <App/>
  },
  {
    path: 'deploy-login/login',
    element: <Login/>
  },
  {
    path: 'deploy-login/create-user',
    element: <CreateUser/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
