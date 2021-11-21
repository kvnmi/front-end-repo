import * as types from './type';

export function enableRegisterLoader(){
    return {
        type:types.REGISTER_ENABLE_LOADER
    }
}

export function disableRegisterLoader(){
    return {
        type:types.REGISTER_DISABLE_LOADER
    }
}

export function successRegistration(payload:string){
    return {
        type:types.REGISTRATION_SUCCESS
    }
}

export function errorRegistrationMessage(payload:string){
    return {
        type:types.REGISTRATION_ERROR,
        payload:payload
    }
}