export interface ILoginFormState {
    email: string,
    password: string,
  }  

  export interface ILoginReducer {
    isLoginLoading:boolean,
    errorMessage:string,
    token:string,
    user:any,
    isLoggedIn:boolean
  };


export interface ILoginResponse {
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