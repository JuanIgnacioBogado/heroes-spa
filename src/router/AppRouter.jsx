import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => (
  <Routes>
    <Route element={<PublicRoute />}>
      <Route path="login" element={<LoginPage />} />
    </Route>

    <Route element={<PrivateRoute />}>
      <Route path="/*" element={<HeroesRoutes />} />
    </Route>
  </Routes>
);
