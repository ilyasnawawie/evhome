import Login from '../../components/login';

const LoginPage = () => {
  const handleLogin = (email: string, password: string) => {
    
  };

  return (
    <div>
      <h1>Login</h1>
      <Login onLogin={handleLogin}/>
    </div>
  );
};

export default LoginPage;
