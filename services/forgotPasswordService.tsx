import React from 'react';

interface ForgotPasswordResponseProps {
  email: string;
  confirmedEmail: string;
}

const ForgotPasswordResponse: React.FC<ForgotPasswordResponseProps> = ({ email, confirmedEmail }) => {
  const success = email === confirmedEmail;

  React.useEffect(() => {
    console.log(`Forgot password ${success ? 'success' : 'failed'}`);
  }, [success]);

  return (
    <div className={`text-center mt-4 ${success ? 'text-green-600' : 'text-red-600'}`}>
      {success ? (
        <p>Email for changing password has been sent</p>
      ) : (
        <p>Check your email</p>
      )}
    </div>
  );
};

export default ForgotPasswordResponse;
