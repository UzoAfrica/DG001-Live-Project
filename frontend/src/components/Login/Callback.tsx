// src/pages/CallbackPage.tsx
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CallbackPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    if (token) {
      // Store token in localStorage
      localStorage.setItem('token', token);

      // Redirect to home page or dashboard
      navigate('/product-page');
    } else {
      // Handle error or redirect
      navigate('/login?error=Authentication failed');
    }
  }, [location.search, navigate]);

  return <div>Processing...</div>;
};

export default CallbackPage;
