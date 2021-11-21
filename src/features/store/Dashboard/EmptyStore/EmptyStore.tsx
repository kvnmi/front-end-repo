import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
// import AppButton from '../../../components/shared/Button';
import styles from './styles';
// import * as loginCalls from '../../../features/auth/login/actions/apiCalls';
// import {useDispatch} from 'react-redux';
import {ILoginReducer} from '../../../auth/login/actions/login.interface';
import CustomScreen from '../../../../components/shared/CustomScreens';
// import WelcomeBox from './components/WelcomeBox/WelcomeBox';
import AppText from '../../../../components/shared/AppText';
//@ts-ignore
import emptyInventoryLogo from '../../../../assets/images/emptyStore.png';
import AppButton from '../../../../components/shared/Button';

interface ILoginReducerState {
  loginReducer: ILoginReducer;
}

const EmptyStore: React.FC = () => {
  //   const dispatch = useDispatch();
  //   const onLogout = () => loginCalls.logout(dispatch);
  return (
    <CustomScreen size="big">
      <View style={styles.container}>
        <Image source={emptyInventoryLogo} style={styles.images} />
        <AppText style={styles.emptyMessage}>Oops! Your Store is empty</AppText>
        <TouchableOpacity style={styles.buttons}>
          <AppButton text={'Add Inventory'} navigationTo={'Add Inventory'} />
        </TouchableOpacity>
      </View>
    </CustomScreen>
  );
};

export default EmptyStore;
