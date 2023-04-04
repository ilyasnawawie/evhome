import React, { useState } from 'react';
import InputForm from '../inputfieldcomponents/inputForm';
import InputField from '../inputfieldcomponents/inputField';
import InputButton from '../inputfieldcomponents/inputButton';
import Header from '../headercomponents/header';
import EmptyInputFieldResponse from '../../services/emptyInputFieldService';
import { AuthService } from '../../services/authservice';

interface Props {
  onLogin: (email: string, password: string) => void;
}

const Login = ({ onLogin }: Props) => {
  const authService = new AuthService();
  const [hasEmptyFields, setHasEmptyFields] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSubmit = async (formData: { [key: string]: string }) => {
    if (formData.email && formData.password) {
      const token = await authService.loginUser(formData.email, formData.password);
      if (token) {
        onLogin(formData.email, formData.password);
        console.log('Login success!', formData);
      } else {
        console.log('Invalid credentials', formData);
      }
    } else {
      setHasEmptyFields(true);
      setTimeout(() => {
        setHasEmptyFields(false);
      }, 5000);
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
        <EmptyInputFieldResponse hasError={hasEmptyFields} />
      </div>
    </div>
  );
};

export default Login;
