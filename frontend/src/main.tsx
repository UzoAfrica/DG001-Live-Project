import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.tsx';
import './index.css';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './dev';

// Use environment variable for Google Client ID
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// Ensure clientId is defined and not an empty string
if (!clientId) {
  console.error(
    'Google Client ID is missing. Please set VITE_GOOGLE_CLIENT_ID in your .env file.',
  );
}

// Check if root element exists
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <GoogleOAuthProvider clientId={clientId as string}>
        {' '}
        {/* Ensure clientId is treated as a string */}
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
          <App />
        </DevSupport>
      </GoogleOAuthProvider>
    </React.StrictMode>,
  );
} else {
  console.error('Root element not found. Please check your index.html file.');
}
