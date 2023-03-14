import { useState } from 'react';

interface Props {
  onLogin: (email: string, password: string) => void;
};

const Login = ({ onLogin }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={handleEmailChange} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
