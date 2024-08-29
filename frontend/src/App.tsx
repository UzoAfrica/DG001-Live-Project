import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reset from './components/ResetPassword/Reset';
import ReSend from './components/ResendOtp/Resend';
import LogIn from './components/Login/LogInPage';
import SignUp from './components/SignUp/SignUpPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
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
