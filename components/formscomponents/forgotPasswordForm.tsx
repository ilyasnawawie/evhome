import React from 'react';
import Form from '../inputfieldcomponents/inputField';
import Header from '../header/header';
import ForgotPasswordResponse from '../../services/forgotPasswordResponse';
import EmptyInputFieldResponse from '../../services/emptyInputFieldService';

const ForgotPassword = () => {
  const [formData, setFormData] = React.useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = React.useState(false);
  const [hasEmptyFields, setHasEmptyFields] = React.useState(false);

  const handleForgotPassword = (data: { [key: string]: string }) => {
    if (!data.email || !data.confirmEmail) {
      setHasEmptyFields(true);
      setTimeout(() => {
        setHasEmptyFields(false);
      }, 5000);
    } else {
      setFormData(data);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className="w-full flex max-w-md mx-auto justify-center items-center h-screen rounded-lg">
      <div className="w-full max-w-md">
        <Header logo="logo.png" header="Reset your password" />
        <Form
          onSubmit={handleForgotPassword}
          inputs={{
            email: {
              type: 'email',
              label: 'Email:',
              placeholder: '',
            },
            confirmEmail: {
              type: 'email',
              label: 'Confirm Email:',
              placeholder: '',
            },
          }}
          buttonLabel="Reset Password"
        />
        {hasEmptyFields && (
          <EmptyInputFieldResponse hasError={hasEmptyFields} />
        )}
        {submitted && (
          <ForgotPasswordResponse
            email={formData.email}
            confirmedEmail={formData.confirmEmail}
          />
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
