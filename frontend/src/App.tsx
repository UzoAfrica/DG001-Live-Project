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


// Product, Cart, and Wishlist Components
import Wishlist from './components/Cart/wishlist/WishlistPage';
import CartPage from './components/Cart/CartPage';
import Navbar from './components/Cart/Navbar';
import Product from './components/Cart/productInfo/ProductInfoPage';

// Define an interface for MainLayout props
interface MainLayoutProps {
  userProfile: {
    profileImage: string;
  };
}

// Define context type for Outlet
interface OutletContext {
  setOpenCart: Dispatch<SetStateAction<boolean>>;
}

// Wrapper component to pass setOpenCart to CartPage component
const CartWrapper: FC = () => {
  const { setOpenCart } = useOutletContext<OutletContext>();
  return <CartPage setOpenCart={setOpenCart} />;
};

// Layout component that includes Navbar and accepts userProfile as a prop
const MainLayout: FC<MainLayoutProps> = ({ userProfile }) => {
  const [setCartOpen] = useState<boolean>(false);

  return (
    <>
      <Navbar userProfile={userProfile} />
      {/* Pass setCartOpen function to Outlet context */}
      <Outlet context={{ setOpenCart: setCartOpen }} />
    </>
  );
};

// Define userProfile object to pass to MainLayout
const userProfile = {
  profileImage: 'path/to/image.png',
};

// New NotFound component
const NotFound: FC = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h2>404 - Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);

// Combine the landing page components into one main component
const MainPage: FC = () => (
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
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;

