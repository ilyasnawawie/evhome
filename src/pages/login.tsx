import Login from '../../components/formscomponents/loginForm';

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
