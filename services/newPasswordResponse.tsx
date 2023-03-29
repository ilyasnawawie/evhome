import React from 'react';

interface NewPasswordResponseProps {
  success: boolean;
}

const NewPasswordResponse: React.FC<NewPasswordResponseProps> = ({ success }) => {
  React.useEffect(() => {
    console.log(`New password ${success ? 'success' : 'failed'}`);
  }, [success]);

  return (
    <div className={`text-center mt-4 ${success ? 'text-green-600' : 'text-red-600'}`}>
      {success ? (
        <p>Your password has been reset.</p>
      ) : (
        <p>Check your password.</p>
      )}
    </div>
  );
};

export default NewPasswordResponse;
