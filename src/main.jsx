import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import LogIn from './components/Root/LogIn';
import Register from './components/Root/Register';
import AuthProvider from './Providers/AuthProvider';
import Order from './Order/Order';
import PrivateRoute from './PrivateRoute';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path: '/login',
        element: <LogIn></LogIn>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/order',
        element:<PrivateRoute><Order></Order></PrivateRoute>,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
