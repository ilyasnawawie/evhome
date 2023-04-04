import React, { useState } from 'react';
import InputForm from '../inputfieldcomponents/inputForm';
import InputField from '../inputfieldcomponents/inputField';
import InputButton from '../inputfieldcomponents/inputButton';
import Header from '../headercomponents/header';
import EmptyInputFieldResponse from '../../services/emptyInputFieldService';
import NewPasswordResponse from '../../services/newPasswordService';

const NewPassword = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [hasEmptyFields, setHasEmptyFields] = useState(false);

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

  const handleResetPassword = () => {
    console.log('Password successfully changed!', formData);
  };

  const handleSubmit = (formData: { [key: string]: string }) => {
    const { password, newPassword } = formData;

    if (!password || !newPassword) {
      setHasEmptyFields(true);
      setTimeout(() => {
        setHasEmptyFields(false);
      }, 5000);
    } else if (password !== newPassword) {
      setFormData(formData);
    } else {
      setFormData(formData);
      handleResetPassword();
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
        {hasEmptyFields && (
          <EmptyInputFieldResponse hasError={hasEmptyFields} />
        )}
        {formData.password !== formData.newPassword && (
          <NewPasswordResponse success={false} />
        )}
      </div>
    </div>
  );
};

export default NewPassword;
