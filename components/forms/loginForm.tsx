import React from 'react';
import Form from '../inputfieldcomponents/inputField';
import Header from '../header/header';

interface Props {
  onLogin: (email: string, password: string) => void;
}

const Login = ({ onLogin }: Props) => {
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
          onSubmit={(formData) => onLogin(formData.email, formData.password)}
          inputs={inputs}
          buttonLabel="Sign in"
          rememberMe={rememberMe}
          forgotPasswordLink={forgotPasswordLink}
          rememberMeSlot={rememberMeSlot}
          forgotPasswordSlot={forgotPasswordSlot}
        />
      </div>
    </div>
  );
};

export default Login;
