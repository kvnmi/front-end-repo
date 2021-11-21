
import React from 'react';
import { View,  SafeAreaView, TouchableOpacity,Animated  } from 'react-native';
import { Text, Button  } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../../../store/actions/loginActions';
import styles from './styles';
import { ILoginState } from '../../../models/reducer/login';
import NavigationService from '../../../navigation/NavigationService';
import CustomScreen from '../../../components/shared/CustomScreens';
import OtpVerification from '../forgot-password-otp/OtpVerification';
import AppButton from '../../../components/shared/Button';
import * as Animatable from 'react-native-animatable';
import { IRegisterReducer } from '../register/action/register.interface';
interface IState {
  registerReducer: IRegisterReducer;
}
import { verifyOtp } from '../register/action/apiCalls';
const ActivateUser: React.FC = () => {

  const email = useSelector((state: IState) => state.registerReducer.email);
    const payload = {
      email:email
  }



  const dispatch = useDispatch();
//   const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
//   const onForgot = () => NavigationService.navigate('ForgotPassword');
  return (

       
            <CustomScreen title="" subTitle={""} size={"big"} >
            <Animatable.View animation="fadeInUpBig">
                <View style={styles.content}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Register</Text>
                    </View>
                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subtitleText}>Enter codes sent to your emsil to confirm registration</Text>
                    </View>
                    <View style={styles.inviteCodeContainer}>
                        <Text style={styles.inviteText}>Invite Code</Text>
                    </View>
                    <View style={styles.otpContainer}>
                        <OtpVerification key={"activation_code"} payload={payload} method={verifyOtp} dispatch={dispatch} />
                    </View>
                </View>
                </Animatable.View>
         </CustomScreen>
        
      
    
  );
};

export default ActivateUser;