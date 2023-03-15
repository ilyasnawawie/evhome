import { useState } from 'react';

interface Props {
  onLogin: (email: string, password: string) => void;
}

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
    <div className="flex justify-center items-center h-screen rounded-lg">
      <form className="max-w-md mx-auto border-2 border-orange-300 bg-white-100 rounded-lg p-4 space-y-4" onSubmit={handleSubmit}>
        <div className="w-full">
          <label className="block text-black" htmlFor="email">
            Email Address:
          </label>
          <input
            className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring focus:ring-orange-300 placeholder-gray-500 border border-gray-300"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder=""
          />
        </div>
        <div className="w-full">
          <label className="block text-black" htmlFor="password">
            Password:
          </label>
          <input
            className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring focus:ring-orange-300 border border-gray-300"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder=""
          />
        </div>
        <button className="w-full px-4 py-2 text-white-100 bg-yellow-500 rounded hover:bg-yellow-600" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
