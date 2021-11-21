import * as types from './type';

export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}

export function successRegistration(payload: string) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: payload,
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}

export function errorRegistrationMessage(payload: string) {
  return {
    type: types.LOGIN_ERROR,
    payload: payload,
  };
}
