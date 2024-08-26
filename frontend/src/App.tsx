import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogInPage from './components/LogInPage';
import SignUpPage from './components/SignUpPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
    </Routes>
  );
};

export default App;
