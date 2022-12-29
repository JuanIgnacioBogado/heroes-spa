import { useReducer } from 'react';
import { AuthContext, authReducer } from './';

import { types } from '../types/types';

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user,
    user
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = '') => {
    const user = {
      id: crypto.randomUUID(),
      name
    };
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({
      type: types.login,
      user
    });
  };

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: types.logout });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
