
 import createReducer from '../../lib/createReducer';
 import * as types from '../../store/actions/types';
 import { ILoading } from '../../models/reducer/loading';
 
 const initialState: ILoading = {
   isLoginLoading: false,
   isRegisterLoading:false
 };
 

 export const loadingReducer = createReducer(initialState, {
   [types.LOGIN_ENABLE_LOADER](state: ILoading) {
     return { ...state, isLoginLoading: true };
   },
   [types.LOGIN_DISABLE_LOADER](state: ILoading) {
     return { ...state, isLoginLoading: false };
   },
 });