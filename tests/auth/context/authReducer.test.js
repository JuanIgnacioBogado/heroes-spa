import { authReducer, types } from '../../../src/auth';

describe('authReducer', () => {
  const initialState = {
    logged: false
  };

  test('should to return initialState', () => {
    const newState = authReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test('should to call login and set the user', () => {
    const action = {
      type: types.login,
      user: {
        id: 1,
        name: 'Nacho'
      }
    };

    const newState = authReducer(initialState, action);
    expect(newState.logged).toBeTruthy();
    expect(newState.user).toEqual(action.user);
  });

  test('should to call logout and delete the user', () => {
    const initialState = {
      logged: true,
      user: {
        id: 1,
        name: 'Nacho'
      }
    };
    const action = {
      type: types.logout
    };

    const newState = authReducer(initialState, action);
    expect(newState.logged).toBeFalsy();
    expect(newState.user).toBeFalsy();
  });
});
