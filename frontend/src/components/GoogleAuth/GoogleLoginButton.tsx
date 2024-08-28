import React from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const GoogleLoginButton: React.FC = () => {
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      // Send the credential to the backend for verification and user creation
      const response = await fetch('/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: credentialResponse.credential }),
      });

      if (response.ok) {
        navigate('/'); // Redirect to homepage or dashboard
      } else {
        console.error('Failed to login with Google');
      }
    } else {
      console.error('No credential response received from Google');
    }
  };

  const handleError = () => {
    console.error('Google login failed');
  };

  return (
    <div>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
};

export default GoogleLoginButton;
