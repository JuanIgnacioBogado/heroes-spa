import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui';

// Esto es para hacer la versión con useNavigate
// const mockedUseNavigate = jest.fn();
// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: () => mockedUseNavigate
// }));

describe('Navbar', () => {
  const contextValue = {
    logged: true,
    user: { name: 'Nacho', id: 123 },
    logout: jest.fn()
  };

  beforeEach(() => jest.clearAllMocks());

  test('should to show the user name if is authenticated', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText(/nacho/i)).toBeTruthy();
  });

  test('should to call logout function', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const btnLogout = screen.getByText(/logout/i);
    fireEvent.click(btnLogout);

    expect(contextValue.logout).toBeCalled();
  });

  // Versión con el useNavigate y función navigate para hacer logout
  // test('should to call logout and navigate functions whit clicked', () => {
  //   render(
  //     <AuthContext.Provider value={contextValue}>
  //       <MemoryRouter>
  //         <Navbar />
  //       </MemoryRouter>
  //     </AuthContext.Provider>
  //   );

  //   const btnLogout = screen.getByText(/logout/i);
  //   fireEvent.click(btnLogout);

  //   expect(contextValue.logout).toBeCalled();
  //   expect(mockedUseNavigate).toBeCalledWith('login', { replace: true });
  // });
});
