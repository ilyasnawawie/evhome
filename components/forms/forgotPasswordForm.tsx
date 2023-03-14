import { useState } from 'react';

interface Props {
  onCancel: () => void;
};

const ForgotPassword = ({ onCancel }: Props) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle forgot password submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={handleEmailChange} />
      <button type="submit">Reset Password</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default ForgotPassword;
