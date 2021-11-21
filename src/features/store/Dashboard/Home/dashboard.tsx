import React from 'react';
import {View} from 'react-native';
// import AppButton from '../../../components/shared/Button';
import styles from './styles';
// import * as loginCalls from '../../../features/auth/login/actions/apiCalls';
// import {useDispatch} from 'react-redux';
import {ILoginReducer} from '../../../auth/login/actions/login.interface';
import CustomScreen from '../../../../components/shared/CustomScreens';
// import WelcomeBox from './components/WelcomeBox/WelcomeBox';
import OrderBox from '../components/Order/Order';
import ItemBox from '../components/ItemOrder/Item';

interface ILoginReducerState {
  loginReducer: ILoginReducer;
}

const Home: React.FC = () => {
  //   const dispatch = useDispatch();
  //   const onLogout = () => loginCalls.logout(dispatch);

  return (
    <CustomScreen size="big">
      <View style={styles.container}>
        <View style={styles.box}>
          <OrderBox />
        </View>
        <View style={styles.recentOrder}>
          <ItemBox title={'Manage Store'} navigateTo={'Empty Store'} />
          <ItemBox title={'Order'} navigateTo={'Order'} />
        </View>
        <View style={styles.recentOrder}>
          <ItemBox title={'Payment'} navigateTo={'Payment'} />
          <ItemBox title={'Withdraw'} navigateTo={'Withdraw'} />
        </View>
      </View>
    </CustomScreen>
  );
};

export default Home;
