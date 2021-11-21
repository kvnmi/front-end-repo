import {IOnboarding} from './type';
import SplashScreen from '../features/splash';
import OnboardingScreen from '../features/onboarding';
import LoginScreen from '../features/auth/login';
import RegisterScreen from '../features/auth/register';
import ForgotPasswordScreen from '../features/auth/forgot-password';
import ActivateUserScreen from '../features/auth/activate-user';
import HomeScreen from '../features/Dashboards/Home';
import DistributorScreen from '../features/onboarding/Distributor/Distributor';
import CreateStoreScreen from '../features/store/createStore/createStore';
import tabNavigation from './tabNavigation';
import StoreDashBoardScreen from '../features/store/Dashboard/Home/dashboard';
import EmptyStoreScreen from '../features/store/Dashboard/EmptyStore/EmptyStore';
import AddInventoryScreen from '../features/store/Dashboard/AddInventory/addInventory';

const homeIcon = require('../assets/images/homeIcon.png');
const orderIcon = require('../assets/images/orderIcons.png');
const walletIcon = require('../assets/images/profile.png');
const profileIcon = require('../assets/images/wallet.png');

export const AuthData: Array<IOnboarding> = [
  {
    name: 'Login',
    component: LoginScreen,
  },
  {
    name: 'Register',
    component: RegisterScreen,
  },
  {
    name: 'ForgotPassword',
    component: ForgotPasswordScreen,
  },
  {
    name: 'ActivateUser',
    component: ActivateUserScreen,
  },
  {
    name: 'Splash',
    component: SplashScreen,
  },
  {
    name: 'Onboarding',
    component: OnboardingScreen,
  },
  {
    name: 'DistributorOnboarding',
    component: DistributorScreen,
  },
];

export const dashboardData: Array<IOnboarding> = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'createStore',
    component: CreateStoreScreen,
  },
  {
    name: 'StoreDashboard',
    component: tabNavigation,
  },
  {
    name: 'Empty Store',
    component: EmptyStoreScreen,
  },
  {
    name: 'Add Inventory',
    component: AddInventoryScreen,
  },
];

export const tabNavData: Array<any> = [
  {
    name: 'Home',
    component: StoreDashBoardScreen,
    src: homeIcon,
  },
  {
    name: 'Orders',
    component: CreateStoreScreen,
    src: orderIcon,
  },
  {
    name: 'Wallet',
    component: CreateStoreScreen,
    src: walletIcon,
  },
  {
    name: 'Profile',
    component: CreateStoreScreen,
    src: profileIcon,
  },
];
