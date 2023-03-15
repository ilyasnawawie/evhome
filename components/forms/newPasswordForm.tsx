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
    <Form onSubmit={handleSubmit} inputs={inputs} buttonLabel="Reset Password" />
  );
};

export default NewPassword;
