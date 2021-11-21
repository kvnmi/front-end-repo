import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import colors from '../../../utils/colors';
import { Platform, Dimensions } from 'react-native';


type Style = {
    submitButtonText:TextStyle,
    container:ViewStyle,
    otpResendButton:TextStyle,
    otpResendButtonText:TextStyle,
    updateName:ViewStyle,
    otpText:TextStyle,
    row:ViewStyle,
    formContainers:TextStyle,
    errorMessages:TextStyle,
    welcomeSection:ViewStyle,
    button:ViewStyle,
    goRegister:ViewStyle,
    alreadyHasAccount:TextStyle,
    loginLink:TextStyle
  };
  
  const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create<Style>({
    container: {
        width: width * 0.7,
        marginLeft:height * 0.05,
        height: 100,
        top:20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    
      },
      submitButtonText: {
        color: 'white',
      },
      otpResendButton: {
        alignItems: 'center',
        width: '100%',
        marginTop: 16,
      },
      otpResendButtonText: {
        color: 'orange',
        textTransform: 'none',
        textDecorationLine: 'underline',
      },
      updateName: {
        height: 45,
        width: '100%',
        borderColor: '#2196F3',
        color: 'white',
        textAlign: 'center',
      },
      otpText: {
        color: colors.customDark,
        fontSize: 25,
        width: '100%',
        textAlign: 'center',
      },
      row: {
        flexDirection: 'row',
        alignItems: 'flex-end',
      },
      formContainers: {
        alignItems: 'center',
        height: 45,
        borderColor: '#2196F3',
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 5,
        justifyContent: 'center',
        width: '80%',
      },
      errorMessages: {
        color: 'red',
        marginRight: 12,
        textAlign: 'center',
      },
      welcomeSection: {
        marginTop: 30,
        backgroundColor: colors.white,
        height: height * 0.075,
        width: width * 0.9,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      button:{
        top:60,
      },
      goRegister:{
        display:"flex",
        flexDirection:"row",
        marginLeft:60 
      },
      alreadyHasAccount:{
        textAlign:"center",
       },
       loginLink:{
        color:colors.orange,
    },
});

export default styles;