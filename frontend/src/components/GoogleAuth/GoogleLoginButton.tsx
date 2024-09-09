import React from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

interface GoogleLoginButtonProps {
  action: 'login' | 'signup';
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ action }) => {
  const navigate = useNavigate();


  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    console.log({credentialResponse})
    if (credentialResponse.credential) {
      // Determine the API endpoint based on the action
      const endpoint =
        action === 'login'
          ? 'http://localhost:5001/auth/google/login'
          : 'http://localhost:5001/auth/google/signup';

          console.log({endpoint})

      try {
        // Send the credential to the backend for verification and user creation
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: credentialResponse.credential }),
        });

        if (response.ok) {
          navigate('/'); // Redirect to homepage or dashboard after successful authentication
        } else {
          console.error('Failed to authenticate with Google');
        }
      } catch (error) {
        console.error('Error during authentication:', error);
      }
    } else {
      console.error('No credential response received from Google');
    }
  };

  const handleError = () => {
    console.error('Google authentication failed');
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        ux_mode="redirect" // Optionally use popup mode for a better user experience
      />
    </div>
  );
};

export default GoogleLoginButton;
