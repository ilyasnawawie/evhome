import React, { useState } from 'react';
import InputForm from '../inputfieldcomponents/inputForm';
import InputField from '../inputfieldcomponents/inputField';
import InputButton from '../inputfieldcomponents/inputButton';
import Header from '../headercomponents/header';
import { AuthNewPasswordService } from '../../services/newPasswordService';

const NewPassword = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const inputs = {
    password: {
      type: 'password',
      label: 'New Password:',
      placeholder: '',
    },
    newPassword: {
      type: 'password',
      label: 'Confirm Password:',
      placeholder: '',
    },
  };

  const authNewPasswordService = new AuthNewPasswordService();

  const handleResetPassword = () => {
    console.log('Password successfully changed!', formData);
  };

  const handleSubmit = async (formData: { [key: string]: string }) => {
    const { password, newPassword } = formData;

    if (!password || !newPassword) {
      console.log('Please fill in both fields');
    } else if (password !== newPassword) {
      console.log('Passwords do not match');
    } else {
      try {
        const response = await authNewPasswordService.changePassword(password, newPassword);
        if (response.status === 'ok') {
          setFormData(formData);
          handleResetPassword();
          console.log('Password reset successful');
        } else {
          console.log('Password reset failed', response.message);
        }
      } catch (error) {
        console.error(`Error resetting password: ${error}`);
      }
    }
  };

  return (
    <div className="w-full flex max-w-md mx-auto justify-center items-center h-screen rounded-lg">
      <div className="w-full max-w-md">
        <Header logo="logo.png" header="Enter your new password" />
        <InputForm onSubmit={handleSubmit} inputs={inputs}>
          <InputField
            name="password"
            label={inputs.password.label}
            type={inputs.password.type}
            placeholder={inputs.password.placeholder}
            value={formData.password ?? ''}
            onChange={(event) => setFormData({ ...formData, password: event.target.value })}
          />
          <InputField
            name="newPassword"
            label={inputs.newPassword.label}
            type={inputs.newPassword.type}
            placeholder={inputs.newPassword.placeholder}
            value={formData.newPassword ?? ''}
            onChange={(event) => setFormData({ ...formData, newPassword: event.target.value })}
          />
          <InputButton buttonLabel="Reset Password" />
        </InputForm>
      </div>
    </div>
  );
};

export default NewPassword;
