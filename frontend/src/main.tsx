import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.tsx'; // Ensure the path and file extension is correct based on your setup
import './index.css';

// Use environment variable for Google Client ID
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

// Check if root element exists
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <GoogleOAuthProvider clientId={clientId}>
        <App />
      </GoogleOAuthProvider>
    </React.StrictMode>
  );
}
