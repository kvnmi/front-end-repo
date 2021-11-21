import fetchClient from '../../../../utils/requestClient/index';
import * as registerAction from './registerAction';
import NavigationService from '../../../../navigation/NavigationService';
import axios from 'axios';

export const registerUser = async (payload:any, dispatch:any) => {
    try {
        dispatch(registerAction.enableRegisterLoader());
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              }, 
        }
        dispatch(registerAction.enableRegisterLoader());
        const response = await axios.post('https://staging-api-rain.herokuapp.com/api/auth/register', payload,  config);
        dispatch(registerAction.successRegistration(response?.data?.user?.email));
        const otpVerify = {
            email:response?.data?.user?.email
        }
        const url = `https://staging-api-rain.herokuapp.com/api/users/${response?.data?.user?._id}/activate`;
        console.log(url);
        console.log(otpVerify);
        // const result = await axios.put(`https://staging-api-rain.herokuapp.com/api/users/${response?.data?.user?._id}/activate`, otpVerify, config )
        // console.log(response?.data);
        // console.log(response?.data?.user?.email);
        // console.log(response?.data?.user?._id);
        NavigationService.navigate('ActivateUser');
    } catch (error) {
        console.log(error?.response?.data?.message);
        dispatch(registerAction.errorRegistrationMessage(error?.response?.data?.message))
    }
}

export const verifyOtp = async (payload:any, dispatch: any) => {
    try {
        dispatch(registerAction.enableRegisterLoader());
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              }, 
        }
        await axios.post(`https://staging-api-rain.herokuapp.com/api/users/verify`, payload, config )
        dispatch(registerAction.disableRegisterLoader());
    } catch (error) {
        
    }
}

