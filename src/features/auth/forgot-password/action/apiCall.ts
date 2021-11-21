import NavigationService from '../../../../navigation/NavigationService';
import fetchClient from '../../../../utils/requestClient/index';

export const forgotPassword = async (payload: any, setError) => {
  try {
    await fetchClient.post('users/recover-password', payload);
    setError('');
  } catch (error) {
    setError(error.response.data.message);
  }
};

export const verifyOtp = async (payload: any) => {
  try {
    await fetchClient.post('users/validate-reset-token', payload);
    NavigationService.navigate('Login');
  } catch (error) {
    console.log(error);
  }
};
