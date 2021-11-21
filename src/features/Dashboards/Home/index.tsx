import React from 'react';
import {View} from 'react-native';
// import AppButton from '../../../components/shared/Button';
import styles from './styles';
// import * as loginCalls from '../../../features/auth/login/actions/apiCalls';
// import {useDispatch} from 'react-redux';
import {ILoginReducer} from '../../auth/login/actions/login.interface';
import CustomScreen from '../../../components/shared/CustomScreens';
import WelcomeBox from './components/WelcomeBox/WelcomeBox';
import AppText from '../../../components/shared/AppText';
import Separator from './components/Separator/Separator';
import OrderBox from './components/OrderBox/OrderBox';

interface ILoginReducerState {
  loginReducer: ILoginReducer;
}

const Home: React.FC = () => {
  //   const dispatch = useDispatch();
  //   const onLogout = () => loginCalls.logout(dispatch);

  return (
    <CustomScreen>
      <View style={styles.container}>
        <View style={styles.box}>
          <WelcomeBox />
        </View>
        <View style={styles.recentContainer}>
          <AppText style={styles.recentOrder}>RECENT ORDERS</AppText>
        </View>
        <Separator />
        <OrderBox />
        {/* <AppButton text="logout" method={onLogout} /> */}
      </View>
    </CustomScreen>
  );
};

export default Home;
