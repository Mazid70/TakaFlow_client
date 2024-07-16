import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home';
import Dashboard from '../DashBoard/Dashboard';
import Overview from '../DashBoard/User/Overview';

export const allRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/dashboard',
        element:<Dashboard />,
        children:[
          {
            path:'',
            element:<Overview />
          }
        ]
      },
      
    ],
  },
]);
