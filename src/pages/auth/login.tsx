import React, { useState } from 'react';
import InputForm from '../../../components/inputfieldcomponents/inputForm';
import InputField from '../../../components/inputfieldcomponents/inputField';
import InputButton from '../../../components/inputfieldcomponents/inputButton';
import Header from '../../../components/headercomponents/header';
import { AuthService } from '../../../services/authservice';

const LoginPage = () => {
  const authService = new AuthService();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [loginStatus, setLoginStatus] = useState<
    'success' | 'failure' | 'none'
  >('none');

  const handleSubmit = async () => {
    if (!emailValue && !passwordValue) {
      console.log('Both email and password fields cannot be empty');
    } else if (!emailValue) {
      console.log('Email cannot be empty');
    } else if (!passwordValue) {
      console.log('Password cannot be empty');
    } else {
      const token = await authService.loginUser(emailValue, passwordValue);
      if (token) {
        setLoginStatus('success');
      } else {
        setLoginStatus('failure');
      }
    }
  };

  const handlePopupClose = () => {
    setLoginStatus('none');
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
        <Header logo="/logo.png" header="Sign in to your account" />
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
        {loginStatus === 'success' && (
          <div
            className="bg-green-200 border-green-600 border-2 rounded-md p-4 mt-4 text-green-600"
            role="alert"
          >
            Login successful!
            <button className="float-right" onClick={handlePopupClose}>
              x
            </button>
          </div>
        )}
        {loginStatus === 'failure' && (
          <div
            className="bg-red-200 border-red-600 border-2 rounded-md p-4 mt-4 text-red-600"
            role="alert"
          >
            Invalid credentials
            <button className="float-right" onClick={handlePopupClose}>
              x
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
