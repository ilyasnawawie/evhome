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

  return (
    <div className="flex max-w-md mx-auto justify-center items-center h-screen rounded-lg">
      <div className="w-full max-w-md">
        <Header logo="logo.png" header="Sign in to your account" />
        <Form
          onSubmit={(formData) => onLogin(formData.email, formData.password)}
          inputs={inputs}
          buttonLabel="Sign in"
          rememberMe={true}
          forgotPasswordLink="https://example.com/forgot-password"
        />
      </div>
    </div>
  );
};

export default Login;
