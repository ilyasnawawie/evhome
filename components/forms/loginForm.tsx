import React, { useState } from 'react';
import Form from '../inputfieldcomponents/inputField';
import Header from '../header/header';
import LoginResponse from '../../services/loginResponse'

interface Props {
  onLogin: (email: string, password: string) => void;
}

const Login = ({ onLogin }: Props) => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const inputs = {
    email: {
      type: 'email',
      label: 'Email Address:',
      placeholder: '',
    },
    password: {
      type: 'password',
      label: 'Password:',
      placeholder: '',
    },
  };

  const handleSubmit = (formData: { [key: string]: string }) => {
    console.log('Submitting login form with:', formData);
    onLogin(formData.email, formData.password);
    console.log("Login success!");
    setLoginSuccess(true);
  };

  const rememberMe = true;
  const rememberMeSlot = <span>Remember me</span>;
  const forgotPasswordLink = 'https://example.com/forgot-password';
  const forgotPasswordSlot = (
    <a href={forgotPasswordLink}>Forgot Password?</a>
  );

  return (
    <div className="flex max-w-md mx-auto justify-center items-center h-screen rounded-lg">
      <div className="w-full max-w-md">
        <Header logo="logo.png" header="Sign in to your account" />
        <Form
          onSubmit={handleSubmit}
          inputs={inputs}
          buttonLabel="Sign in"
          rememberMe={rememberMe}
          forgotPasswordLink={forgotPasswordLink}
          rememberMeSlot={rememberMeSlot}
          forgotPasswordSlot={forgotPasswordSlot}
        />
        <LoginResponse success={loginSuccess} />
      </div>
    </div>
  );
};

export default Login;
