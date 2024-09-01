import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/LandingPage/Header';
import Hero from './components/LandingPage/Hero';
import WhyUseUs from './components/LandingPage/WhyUseUS';
import TrendingSales from './components/LandingPage/TrendingSales';
import Footer from './components/LandingPage/Footer';
import LogIn from './components/Login/LogInPage';
import SignUp from './components/SignUp/SignUpPage';
import Reset from './components/ResetPassword/Reset';
import ReSend from './components/ResendOtp/Resend';
import Wishlist from './components/Wishlist/Wishlist'; // Import Wishlist component
import Cart from './components/Cart/Cart'; // Import Cart component
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// Combine the landing page components into one main component
const MainPage: React.FC = () => (
  <>
    <Header />
    <Hero />
    <WhyUseUs />
    <TrendingSales />
    <Footer />
  </>
);

// Define the router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/reset',
    element: <Reset />,
  },
  {
    path: '/otp',
    element: <ReSend />,
  },
  {
    path: '/wishlist',
    element: <Wishlist userId="some-user-id" />,
  },
  {
    path: '/cart', // New route for Cart
    element: <Cart userId="some-user-id" />,
  },
  // Additional routes can be added here if needed
  // {
  //   path: '*',
  //   element: <NoPage />, // Uncomment this line if you have a NoPage component for handling 404s
  // },
]);

const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};

export default App;

