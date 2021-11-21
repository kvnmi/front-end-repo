import AsyncStorage from '@react-native-community/async-storage';

export const inAsync = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log('something went wrong');
    }
  };
  
  export const getAsync = async (key) => {
    try {
     const token = await AsyncStorage.getItem(key);
     console.log(token);
    } catch (e) {
      console.log('something went wrong');
    }
  };

  export const clearStorage = async () => {
    try {
        await AsyncStorage.removeItem('token');
    } catch (error) {
        console.log("error");
    }
  }