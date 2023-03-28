import React from 'react';

interface Props {
  success: boolean;
}

const LoginResponse = ({ success }: Props) => {
  return (
    <div className={`text-center mt-4 ${success ? 'text-green-600' : 'text-red-600'}`}>
      {success ? 'Login successful!' : 'Login failed. Please try again.'}
    </div>
  );
};

export default LoginResponse;
