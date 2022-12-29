import { types } from '../../../src/auth';

describe('Types', () => {
  test('should to return this types', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth Logout]'
    });
  });
});
