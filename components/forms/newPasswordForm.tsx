import React from 'react';
import Form from '../inputfieldcomponents/inputField'

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
    <div className="flex max-w-md mx-auto justify-center items-center h-screen rounded-lg">
    <Form onSubmit={handleSubmit} inputs={inputs} buttonLabel="Reset Password" />
    </div>
  );
};

export default NewPassword;
