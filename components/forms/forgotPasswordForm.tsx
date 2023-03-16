import React from 'react';
import Form from '../inputfieldcomponents/inputField'
import Header from '../header/header';

const ForgotPassword = () => {
  const handleForgotPassword = (data: { [key: string]: string }) => {

  };

  return (
    <div className="w-full flex max-w-md mx-auto justify-center items-center h-screen rounded-lg">
      <div className="w-full max-w-md">
      <Header logo="logo.png" header="Reset your password"/>
      <Form
        onSubmit={handleForgotPassword}
        inputs={{
          email: {
            type: 'email',
            label: 'Email:',
            placeholder: '',
          },
        }}
        buttonLabel="Reset Password"
      />
      </div>
    </div>
  );
};

export default ForgotPassword;
