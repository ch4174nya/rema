import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import DemoLayout from './demo/DemoLayout';
import Dashboard from './demo/pages/Dashboard';
import PropertyListings from './demo/pages/PropertyListings';
import ChatManagement from './demo/pages/ChatManagement';
import Calendar from './demo/pages/Calendar';
import Analytics from './demo/pages/Analytics';
import Profile from './demo/pages/Profile';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/demo',
    element: <DemoLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'listings',
        element: <PropertyListings />,
      },
      {
        path: 'chat',
        element: <ChatManagement />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);