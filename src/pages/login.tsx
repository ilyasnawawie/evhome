import Login from '../../components/forms/loginForm';

const LoginPage = () => {
  const handleLogin = (email: string, password: string) => {

  };

  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
