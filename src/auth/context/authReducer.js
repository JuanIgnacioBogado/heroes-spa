import { types } from '../types/types';

export const authReducer = (state = {}, { type, ...props } = {}) => {
  switch (type) {
    case types.login:
      return {
        ...state,
        logged: true,
        ...props
      };

    case types.logout:
      return {
        logged: false
      };

    default:
      return state;
  }
};
