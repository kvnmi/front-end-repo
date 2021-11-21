
 import createReducer from '../../../../lib/createReducer';
 import * as types from './type';
 import { IRegisterReducer, IRegisterResponse } from './register.interface';
 
 const initialState: IRegisterReducer = {
   isRegisterLoading:false,
   errorMessage:'',
   email:''
 };
 
 
 export const registerReducer = createReducer(initialState, {
   [types.REGISTER_ENABLE_LOADER](state:IRegisterReducer){
     return {...state, isRegisterLoading:true};
   },
   [types.REGISTER_DISABLE_LOADER](state:IRegisterReducer){
     return{ ...state, isRegisterLoading:false}
   },
   [types.REGISTRATION_ERROR](state:IRegisterReducer, payload){
    return{ ...state, isRegisterLoading:false, errorMessage: payload.payload}
  },
  [types.REGISTRATION_SUCCESS](state:IRegisterReducer, payload){
    return{ ...state, isRegisterLoading:false, errorMessage: "", email:payload.payload}
  }

 });