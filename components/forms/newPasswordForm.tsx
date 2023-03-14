import { useState } from 'react';


const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // function to do after success
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="password">New Password:</label>
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default NewPassword;
