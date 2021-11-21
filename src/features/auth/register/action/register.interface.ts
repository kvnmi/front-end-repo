import { bool } from "yup";

export interface IRegisterResponse {
    id: number;
    image?: Object
    first_name: string,
    last_name: string,
    email_verified?: boolean,
    is_distributor?: boolean,
    bvn_verified?: boolean,
    suspended?: boolean,
    facebookId?: string,
    _id?: string,
    phone_number: number,
    email: string,
    createdAt?: string,
    updatedAt?: string,
    username?: string,
    __v?: number,
    access_token: string
    refresh_token: string
}

export interface IRegisterRequestState {
    first_name: string,
    last_name: string,
    email: string,
    phone_number: string,
    password: string,
    is_distributor: boolean
  }

  export interface IRegisterFormState {
    first_name: string,
    last_name: string,
    email: string,
    phone_number: string,
    password: string,
  }  

  export interface IRegisterReducer {
    isRegisterLoading:boolean,
    errorMessage:string,
    email:string
  };
  
