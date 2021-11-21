import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const customRequest = () => {
  
  const url = 'https://staging-api-rain.herokuapp.com/api/';
  const defaultOptions = {
    baseURL : url,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },    
  };

  let ApiClient = axios.create(defaultOptions);

  ApiClient.interceptors.request.use(async config => {
    const token = await AsyncStorage.getItem('token');
    console.log('tokean', token);
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  });


  ApiClient.interceptors.response.use((response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  });

  return ApiClient;
};



export default customRequest();