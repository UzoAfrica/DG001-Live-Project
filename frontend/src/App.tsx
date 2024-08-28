import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/landingPage/Header';
import Hero from './components/landingPage/Hero';
import WhyUseUs from './components/landingPage/WhyUseUS';
import TrendingSales from './components/landingPage/TrendingSales';
import Footer from './components/landingPage/Footer';
import LogIn from './components/Login/LogInPage';
import SignUp from './components/SignUp/SignUpPage';

// layout that includes the common components
const MainLayout: React.FC = () => (
  <div>
    <Header />
    <Hero />
    <Outlet /> {/* Renders the matched child route */}
    <WhyUseUs />
    <TrendingSales />
    <Footer />
  </div>
);

// Create the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'login',
        element: <LogIn />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;


// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import React from 'react';
// import LogIn from './components/Login/LogInPage';
// import SignUp from './components/SignUp/SignUpPage';

// const router = createBrowserRouter([
//   {
//     path: '/login',
//     element: <LogIn />,
//   },
//   {
//     path: '/signup',
//     element: <SignUp />,
//   },
// ]);

// const App: React.FC = () => {
//   return <RouterProvider router={router} />;
// };

// export default App;
