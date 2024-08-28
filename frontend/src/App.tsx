import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Reset from './components/ResetPassword/Reset';
import ReSend from './components/ResendOtp/Resend';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="reset" element={<Reset />} />
            <Route path="resend" element={<ReSend />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import LogIn from './components/Login/LogInPage';
import SignUp from './components/SignUp/SignUpPage';

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
