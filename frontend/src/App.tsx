import { useState, Dispatch, SetStateAction, FC } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useOutletContext,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from '../src/components/Cart/CartProvider';

// Landing Page Components

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/LandingPage/Header';
import Hero from './components/LandingPage/Hero';
import WhyUseUs from './components/LandingPage/WhyUseUS';
import TrendingSales from './components/LandingPage/TrendingSales';
import Footer from './components/LandingPage/Footer';

// Authentication and Utility Components
import LogIn from './components/Login/LogInPage';
import SignUp from './components/SignUp/SignUpPage';
import Reset from './components/ResetPassword/Reset';
import ReSend from './components/ResendOtp/Resend';
import UserProfile from './components/Userpofile/UserProfile';

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
    path: '/', // Base path for the main layout with Navbar
    element: <MainLayout userProfile={userProfile} />, // Main layout with Navbar
    children: [
      {
        path: 'wishlist',
        element: <Wishlist />,
      },
      {
        path: 'cart',
        element: <CartWrapper />,
      },
      {
        path: 'product',
        element: <Product />,
      },
      {
        path: 'profile',
        element: <
      }
      {
        path: '*',
        element: <NotFound />,
      },

    ],
  },
]);

const App: FC = () => {
  return (
    <CartProvider>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="reset" element={<Reset />} />
        <Route path="otp" element={<ReSend />} />
        <Route path="profile" element={<UserProfile />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

