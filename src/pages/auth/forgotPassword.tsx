import React, { useState } from 'react';
import InputForm from '../../../components/inputComponents/inputForm';
import InputField from '../../../components/inputComponents/inputField';
import InputButton from '../../../components/inputComponents/inputButton';
import Header from '../../../components/headerComponents/header';
import { ForgotPasswordService } from '../../../services/forgotPasswordService';

const ForgotPasswordPage = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

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
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
      }
    }
  };

  const handlePopupClose = () => {
    setSubmitted(false);
    setError(false);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
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
          {submitted && (
            <div
              className="bg-green-200 border-green-600 border-2 rounded-md p-4 mt-4 text-green-600"
              role="alert"
            >
              Thank you! We will send you an email shortly.
              <button className="float-right" onClick={handlePopupClose}>
                x
              </button>
            </div>
          )}
          {error && (
            <div
              className="bg-red-200 border-red-600 border-2 rounded-md p-4 mt-4 text-red-600"
              role="alert"
            >
              Oops! An unexpected error occurred. Please try again later.
              <button className="float-right" onClick={handlePopupClose}>
                x
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
