import createReducer from '../../../../lib/createReducer';
import * as types from './type';
import {ILoginReducer} from './login.interface';

const initialState: ILoginReducer = {
  isLoginLoading: false,
  errorMessage: '',
  token: '',
  user: {},
  isLoggedIn: false,
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_ENABLE_LOADER](state: ILoginReducer) {
    return {...state, isLoginLoading: true};
  },
  [types.LOGIN_DISABLE_LOADER](state: ILoginReducer) {
    return {...state, isLoginLoading: false};
  },
  [types.LOGIN_ERROR](state: ILoginReducer, payload) {
    return {...state, isLoginLoading: false, errorMessage: payload.payload};
  },
  [types.LOGIN_SUCCESS](state: ILoginReducer, payload) {
    return {
      ...state,
      isLoginLoading: false,
      errorMessage: '',
      user: payload.payload,
      token: payload.payload.access_token,
      isLoggedIn: true,
    };
  },
  [types.LOGOUT](state: ILoginReducer) {
    return {
      ...state,
      isLoginLoading: false,
      errorMessage: '',
      user: {},
      token: '',
      isLoggedIn: false,
    };
  },
});
