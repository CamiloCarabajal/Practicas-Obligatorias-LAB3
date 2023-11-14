import './App.css';

import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Protected from './components/protected/Protected';

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isLoggedInHandler = (value) => {
    setIsLoggedIn(value)
  }

  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="login" /> },
    { path: "/login", element: <Login isLoggedInHandler={isLoggedInHandler} /> },
    {
      path: "/home",
      element: (
        <Protected isLoggedIn = {isLoggedIn}>
          <Dashboard isLoggedInHandler = {isLoggedInHandler}/>
        </Protected>
      )
    },
  ])

  return <RouterProvider router={router} />
}

export default App;
