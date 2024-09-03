import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/LandingPage/Header';
import Hero from './components/LandingPage/Hero';
import WhyUseUs from './components/LandingPage/WhyUseUS';
import TrendingSales from './components/LandingPage/TrendingSales';
import Footer from './components/LandingPage/Footer';
import LogIn from './components/Login/LogInPage';
import SignUp from './components/SignUp/SignUpPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Reset from './components/ResetPassword/Reset';
import ReSend from './components/ResendOtp/Resend';
import CreateShop from './components/CreateShop/index';

const MainPage: React.FC = () => (
  <>
    <Header />
    <Hero />
    <WhyUseUs />
    <TrendingSales />
    <Footer />
  </>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="reset" element={<Reset />} />
        <Route path="otp" element={<ReSend />} />
        <Route path="create-shop" element={<CreateShop />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
