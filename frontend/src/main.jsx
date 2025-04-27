import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CHAT, DASHBOARD } from './routes.js';
import Home from './pages/home/Home.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Chat from './pages/chat/Chat.jsx';
import RootLayout from './layouts/rootLayout/rootLayout.jsx';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/sign-in/*',
        element: <Login />
      },
      {
        path: '/sign-up/*',
        element: <Register />
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: DASHBOARD,
            element: <Dashboard />
          },
          {
            path: CHAT,
            element: <Chat />,
          },
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
