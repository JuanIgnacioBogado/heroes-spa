import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const onLogin = () => {
    login('Nacho');
    const path = localStorage.getItem('lastPath') || '/';
    navigate(path, { replace: true });
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
