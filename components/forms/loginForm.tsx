import React from 'react';
import Form from '../inputfieldcomponents/inputField'


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
    <div className="flex justify-center items-center h-screen rounded-lg">
      <Form onSubmit={(formData) => onLogin(formData.email, formData.password)} 
            inputs={inputs} 
            buttonLabel="Login" />
    </div>
  );
};

export default Login;
