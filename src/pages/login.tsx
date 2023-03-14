import { useState } from 'react';
import Login from '../../components/forms/loginForm';
import ForgotPassword from '../../components/forms/forgotPasswordForm';

const LoginPage = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleLogin = (email: string, password: string) => {

  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleCancelForgotPassword = () => {
    setShowForgotPassword(false);
  };

  return (
    <div>
      <h1>Login</h1>
      {showForgotPassword ? (
        <ForgotPassword onCancel={handleCancelForgotPassword} />
      ) : (
        <>
          <Login onLogin={handleLogin} />
          <p>
            <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
          </p>
        </>
      )}
    </div>
  );
};

export default LoginPage;
