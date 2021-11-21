import fetchClient from '../../../../utils/requestClient/index';
import * as loginAction from './loginAction';
import NavigationService from '../../../../navigation/NavigationService';
import {inAsync, clearStorage} from '../../../../lib/inAsync';
export const loginUser = async (payload, dispatch) => {
  try {
    dispatch(loginAction.disableLoader());
    const response = await fetchClient.post('auth/login', payload);
    const token = response?.data?.user?.access_token;
    inAsync('token', token);
    dispatch(loginAction.successRegistration(response?.data?.user));
    NavigationService.navigate('Home');
  } catch (error) {
    console.log(error.response);
    console.log(error?.response?.data?.message);
    dispatch(
      loginAction.errorRegistrationMessage(error?.response?.data?.message),
    );
  }
};

export const logout = async dispatch => {
  try {
    console.log('loginout');
    clearStorage();
    dispatch(loginAction.logout());
  } catch (error) {
    console.log(error);
  }
};
