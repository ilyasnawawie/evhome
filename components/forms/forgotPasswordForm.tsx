import React from 'react';
import Form from '../inputfieldcomponents/inputField'

const ForgotPassword = () => {
  const handleForgotPassword = (data: { [key: string]: string }) => {
    // handle forgot password logic here
  };

  return (
    <div className="flex max-w-md mx-auto justify-center items-center h-screen rounded-lg">
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
  );
};

export default ForgotPassword;
