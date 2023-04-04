import React, { useState } from 'react';
import InputForm from '../inputfieldcomponents/inputForm';
import InputField from '../inputfieldcomponents/inputField';
import InputButton from '../inputfieldcomponents/inputButton';
import Header from '../headercomponents/header';
import { ForgotPasswordService } from '../../services/forgotPasswordService';

const ForgotPassword = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const forgotPasswordService = new ForgotPasswordService();

  const handleForgotPassword = async (data: { [key: string]: string }) => {
    if (!data.email || !data.confirmEmail) {
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } else {
      setFormData(data);
      try {
        const response = await forgotPasswordService.forgotPassword(data.email);
        console.log(response);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error(`Error sending forgot password request: ${error}`);
      }
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
          <InputButton buttonLabel="Reset Password" />
        </InputForm>
        {submitted && <p>Thank you! We will send you an email shortly.</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
