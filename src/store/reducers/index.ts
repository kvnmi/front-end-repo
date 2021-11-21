/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from '../../features/auth/login/actions/loginReducer';
import * as themeReducer from './themeReducer';
import * as registerReducer from '../../features/auth/register/action/registerReducer'
export default Object.assign(loginReducer, registerReducer, loadingReducer, themeReducer);