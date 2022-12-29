import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('AppRouter', () => {
  test('should to show login if not authenticated', () => {
    render(
      <AuthContext.Provider value={{ logged: false }}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getAllByText(/login/i)).toHaveLength(2);
  });

  test('should to show Marvel component if is authenticated', () => {
    const contextValue = {
      logged: true,
      user: { name: 'Nacho', id: 123 }
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getAllByText(/marvel/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/nacho/i)).toBeTruthy();
  });
});
