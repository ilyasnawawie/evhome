import React from 'react';
import Form from '../inputfieldcomponents/inputField'
import Header from '../header/header';

const NewPassword = () => {
  const handleSubmit = (data: { [key: string]: string }) => {
  };

  const inputs = {
    password: {
      type: 'password',
      label: 'New Password:',
    },
    confirmPassword: {
      type: 'password',
      label: 'Confirm Password:',
    },
  };

  return (
    <div className="w-full flex max-w-md mx-auto justify-center items-center h-screen rounded-lg">
      <div className="w-full max-w-md">
        <Header logo="logo.png" header="Enter your new password" />
        <Form onSubmit={handleSubmit} inputs={inputs} buttonLabel="Reset Password" />
      </div>
    </div>
  );
};

export default NewPassword;
