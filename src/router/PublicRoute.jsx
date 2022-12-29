import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../auth';

export const PublicRoute = () => {
  const { logged } = useAuthContext();
  return logged ? <Navigate to="/" replace /> : <Outlet />;
};
