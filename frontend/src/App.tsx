import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import LogIn from './components/Login/LogInPage'; // Corrected path
import SignUp from './components/SignUp/SignUpPage'; // Corrected path

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
