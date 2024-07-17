import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home';
import Dashboard from '../DashBoard/Dashboard';
import Overview from '../DashBoard/User/Overview';
import Sendmoney from '../DashBoard/User/Sendmoney';
import Cashout from '../DashBoard/User/Cashout';
import AggentRegister from '../Pages/Agent/AgentRegister';
import Login from '../Pages/Login';
import Cashin from '../DashBoard/User/Cashin';

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
        path: '/aggent',
        element: <AggentRegister />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/dashboard',
        element:<Dashboard />,
        children:[
          {
            path:'',
            element:<Overview />
          },
          {
            path:'send',
            element:<Sendmoney />
          },
          {
            path:'cashout',
            element:<Cashout />
          },
          {
            path:'cashin',
            element:<Cashin />
          },
        ]
      },
      
    ],
  },
]);
