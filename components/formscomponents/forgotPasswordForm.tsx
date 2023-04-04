import React, { useState } from 'react';
import InputForm from '../inputfieldcomponents/inputForm';
import InputField from '../inputfieldcomponents/inputField';
import InputButton from '../inputfieldcomponents/inputButton';
import Header from '../headercomponents/header';
import ForgotPasswordResponse from '../../services/forgotPasswordService';
import EmptyInputFieldResponse from '../../services/emptyInputFieldService';

const ForgotPassword = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [hasEmptyFields, setHasEmptyFields] = useState(false);

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
        <InputForm
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
        >
          <InputField
            type="email"
            name="email"
            label="Email:"
            value={formData.email || ''}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
          <InputField
            type="email"
            name="confirmEmail"
            label="Confirm Email:"
            value={formData.confirmEmail || ''}
            onChange={(event) =>
              setFormData({ ...formData, confirmEmail: event.target.value })
            }
          />
          <InputButton
          buttonLabel="Reset Password"/>
        </InputForm>
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
