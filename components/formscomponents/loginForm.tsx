import React, { useState } from 'react';
import InputForm from '../inputfieldcomponents/inputForm';
import InputField from '../inputfieldcomponents/inputField';
import InputButton from '../inputfieldcomponents/inputButton';
import Header from '../headercomponents/header';
import { AuthService } from '../../services/authservice';

interface Props {
  onLogin: (email: string, password: string) => void;
}

const Login = ({ onLogin }: Props) => {
  const authService = new AuthService();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSubmit = async () => {
    if (emailValue && passwordValue) {
      const token = await authService.loginUser(emailValue, passwordValue);
      if (token) {
        onLogin(emailValue, passwordValue);
        console.log('Login success!');
      } else {
        console.log('Invalid credentials');
      }
    }
  };

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
        <InputForm onSubmit={handleSubmit} inputs={inputs}>
          <InputField
            key="email"
            name="email"
            label={inputs.email.label}
            type={inputs.email.type}
            placeholder={inputs.email.placeholder}
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
          />
          <InputField
            key="password"
            name="password"
            label={inputs.password.label}
            type={inputs.password.type}
            placeholder={inputs.password.placeholder}
            value={passwordValue}
            onChange={(event) => setPasswordValue(event.target.value)}
          />
          <InputButton buttonLabel="Sign in" />
        </InputForm>
      </div>
    </div>
  );
};

export default Login;
