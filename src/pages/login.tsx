import Login from '../../components/forms/loginForm';

const LoginPage = () => {
  const handleLogin = (email: string, password: string) => {

  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
