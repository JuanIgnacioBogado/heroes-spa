import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router/PublicRoute';

describe('PrivateRoute', () => {
  test('should to show children if not authenticated', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ logged: false }}>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route index element={<h1>Public route</h1>} />
            </Route>
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/public route/i)).toBeTruthy();
  });

  test('should to redirect whit <Navigate /> to marvel page', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Nacho',
        id: 123
      }
    };
    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="login" element={<h1>Public route</h1>} />
            </Route>
            <Route path="/" element={<h1>Marvel Page</h1>} />
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/marvel page/i)).toBeTruthy();
  });
});
