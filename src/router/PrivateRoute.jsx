import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '../auth';

export const PrivateRoute = () => {
  const { pathname, search } = useLocation();
  const { logged } = useAuthContext();

  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  return !logged ? <Navigate to="login" replace /> : <Outlet />;
};
