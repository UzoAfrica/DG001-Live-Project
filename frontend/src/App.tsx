import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reset from './components/ResetPassword/Reset';
import ReSend from './components/ResendOtp/Resend';
import LogIn from './components/Login/LogInPage';
import SignUp from './components/SignUp/SignUpPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="reset" element={<Reset />} />
            <Route path="otp" element={<ReSend />} />

            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
