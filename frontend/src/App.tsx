import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Reset from './components/ResetPassword/Reset';
import ReSend from './components/ResendOtp/Resend';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="reset" element={<Reset />} />
            <Route path="resend" element={<ReSend />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
