import React from 'react';
import Form from '../inputfieldcomponents/inputField';
import Header from '../header/header';
import EmptyInputFieldResponse from '../../services/emptyInputFieldService';
import NewPasswordResponse from '../../services/newPasswordResponse';

const NewPassword = () => {
  const [formData, setFormData] = React.useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = React.useState(false);
  const [hasEmptyFields, setHasEmptyFields] = React.useState(false);

  const handleSubmit = (data: { [key: string]: string }) => {
    if (!data.password || !data.newPassword) {
      setHasEmptyFields(true);
      setTimeout(() => {
        setHasEmptyFields(false);
      }, 5000);
    } else {
      const success = data.password === data.newPassword;
      setFormData(data);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return success;
    }
  };

  const inputs = {
    password: {
      type: 'password',
      label: 'New Password:',
    },
    newPassword: {
      type: 'password',
      label: 'Confirm Password:',
    },
  };

  return (
    <div className="w-full flex max-w-md mx-auto justify-center items-center h-screen rounded-lg">
      <div className="w-full max-w-md">
        <Header logo="logo.png" header="Enter your new password" />
        <Form onSubmit={handleSubmit} inputs={inputs} buttonLabel="Reset Password" />
        {hasEmptyFields && (
          <EmptyInputFieldResponse hasError={hasEmptyFields} />
        )}
        {submitted && (
          <NewPasswordResponse success={formData.password === formData.newPassword} />
        )}
      </div>
    </div>
  );
};

export default NewPassword;
