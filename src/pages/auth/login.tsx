import React, { useState } from 'react';
import { useRouter } from 'next/router';
import InputForm from '../../../components/inputComponents/inputForm';
import InputField from '../../../components/inputComponents/inputField';
import InputButton from '../../../components/inputComponents/inputButton';
import InputCheckbox from '../../../components/inputComponents/inputCheckbox';
import Header from '../../../components/headercomponents/header';
import { AuthService } from '../../../services/authservice';
import nookies from 'nookies';

const LoginPage = () => {
  const authService = new AuthService();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [rememberMeChecked, setRememberMeChecked] = useState(false);
  const [loginStatus, setLoginStatus] = useState<
    'success' | 'failure' | 'none'
  >('none');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    setEmailError('');
    setPasswordError('');

    if (emailValue.trim().length === 0 && passwordValue.trim().length === 0) {
      setErrorMessage('Both email and password fields cannot be empty');
      setLoginStatus('failure');
    } else if (emailValue.trim().length === 0) {
      setEmailError('Email cannot be empty');
      setLoginStatus('failure');
    } else if (passwordValue.trim().length === 0) {
      setPasswordError('Password cannot be empty');
      setLoginStatus('failure');
    } else {
      try {
        const result = await authService.loginUser(emailValue, passwordValue);

        if ('token' in result) {
          setLoginStatus('success');
          setErrorMessage('');
          nookies.set(null, 'authToken', result.token, { path: '/' });

          setTimeout(() => {
            router.push('/');
          }, 2000);
        } else {
          setLoginStatus('failure');
          if (result.errors.email) {
            setEmailError(result.errors.email[0]);
          }
          if (result.errors.password) {
            setPasswordError(result.errors.password[0]);
          }
        }
      } catch (error: any) {
        setLoginStatus('failure');
        setErrorMessage('An unexpected error occurred.');
      }
    }
  };

  const handlePopupClose = () => {
    setLoginStatus('none');
    setErrorMessage('');
  };

  const handleForgotPassword = () => {
    router.push('forgotPassword');
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
            error={emailError}
            onChange={(event) => setEmailValue(event.target.value)}
          />
          <InputField
            key="password"
            name="password"
            label={inputs.password.label}
            type={inputs.password.type}
            placeholder={inputs.password.placeholder}
            value={passwordValue}
            error={passwordError}
            onChange={(event) => setPasswordValue(event.target.value)}
          />
          <div className="flex items-center justify-between">
            <InputCheckbox
              name="rememberMe"
              label="Remember me"
              checked={rememberMeChecked}
              onChange={(event) => setRememberMeChecked(event.target.checked)}
            />
            <button
              onClick={handleForgotPassword}
              className="text-sm text-orange-300 hover:text-orange-200 focus:outline-none"
            >
              Forgot password?
            </button>
          </div>
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
      </div>
    </div>
  );
};

export default LoginPage;
