import NavigationService from '../../../../navigation/NavigationService';
import fetchClient from '../../../../utils/requestClient/index';

export const forgotPassword = async (payload: any, setError) => {
  try {
    const response = await fetchClient.post('stores', payload);
    setError('');
    NavigationService.navigate('StoreDashboard');
    return response;
  } catch (error) {
    setError(error.response.data.message);
  }
};
