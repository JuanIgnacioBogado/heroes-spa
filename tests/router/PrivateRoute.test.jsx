import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('PrivateRoute', () => {
  test('should to show children if is authenticated', () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        name: 'Nacho',
        id: 123
      }
    };

    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <AuthContext.Provider value={contextValue}>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="search" element={<h1>Private route</h1>} />
            </Route>
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/private route/i)).toBeTruthy();
    expect(localStorage.setItem).toBeCalledWith('lastPath', '/search?q=batman');
  });
});
