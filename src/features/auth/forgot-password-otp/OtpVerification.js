import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  
} from 'react-native';
import { Platform } from 'react-native';
import PinInput from './PinInput';
import AppButton from '../../../components/shared/Button';
import styles from './styles';

import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '../../../navigation/NavigationService';
const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';

const RESEND_OTP_TIME_LIMIT = 30; // 30 secs
const AUTO_SUBMIT_OTP_TIME_LIMIT = 4; // 4 secs

let resendOtpTimerInterval;
let autoSubmitOtpTimerInterval;

const OtpVerification = props => {
  const {  method, payload, keys, callback, navigation,  dispatch } = props;
  const [otpArray, setOtpArray] = useState(['', '', '', '']);
  const [submittingOtp, setSubmittingOtp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // disable resend btns
  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
    RESEND_OTP_TIME_LIMIT,
  );

  // 0 < autoSubmitOtpTime < 4 to show auto submitting OTP text
  const [autoSubmitOtpTime, setAutoSubmitOtpTime] = useState(
    AUTO_SUBMIT_OTP_TIME_LIMIT,
  );

  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const fifthTextInputRef = useRef(null);
  const sixTextInputRef = useRef(null);


  // a reference to autoSubmitOtpTimerIntervalCallback to always get updated value of autoSubmitOtpTime

  // useEffect(() => {
  //   startResendOtpTimer();
  //   return () => {
  //     if (resendOtpTimerInterval) {
  //       clearInterval(resendOtpTimerInterval);
  //     }
  //   };
  // }, [resendButtonDisabledTime]);

  // const startResendOtpTimer = () => {
  //   if (resendOtpTimerInterval) {
  //     clearInterval(resendOtpTimerInterval);
  //   }
  //   resendOtpTimerInterval = setInterval(() => {
  //     if (resendButtonDisabledTime <= 0) {
  //       clearInterval(resendOtpTimerInterval);
  //     } else {
  //       setResendButtonDisabledTime(resendButtonDisabledTime - 1);
  //     }
  //   }, 1000);
  // };

  // this callback is being invoked from startAutoSubmitOtpTimer which itself is being invoked from useEffect
  // since useEffect use closure to cache variables data, we will not be able to get updated autoSubmitOtpTime value
  // as a solution we are using useRef by keeping its value always updated inside useEffect(componentDidUpdate)
 
  // const autoSubmitOtpTimerIntervalCallback = () => {
  //   if (autoSubmitOtpTime <= 0) {
  //     clearInterval(autoSubmitOtpTimerInterval);
  //     // submit OTP
  //     onSubmitButtonPress();
  //   }
  //   setAutoSubmitOtpTime(autoSubmitOtpTime - 1);
  // };

  const refCallback = textInputRef => node => {
    textInputRef.current = node;
  };

  const onResendOtpButtonPress = async () => {
    // clear last OTP
    if (firstTextInputRef) {
      setOtpArray(['', '', '', '']);
      firstTextInputRef.current.focus();
    }

    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    startResendOtpTimer();

    // await axios
    //   .post('url', {
    //     phone: phone,
    //   })
    //   .then(res => {
    //     Alert.alert(
    //       'A validation code has been sent to the number you provided',
    //     );
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     setErrorMessage('invalid inputs');
    //     Alert.alert('An error occured, Phone number incorrect');
    //   });

    // resend OTP Api call
    // todo
    console.log('todo: Resend OTP');
  };

  const onSubmitButtonPress = async () => {
    try {
      const code = otpArray.join('').toString();
      const data = {
        ...payload,
        [keys]:code,
      }
      method(data);
      if(callback){
        callback();
      }
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Invalid inputs");
    }
  };

  // this event won't be fired when text changes from '' to '' i.e. backspace is pressed
  // using onOtpKeyPress for this purpose
  const onOtpChange = index => {
    return value => {
      if (isNaN(Number(value))) {
        // do nothing when a non digit is pressed
        return;
      }
      const otpArrayCopy = otpArray.concat();
      otpArrayCopy[index] = value;
      setOtpArray(otpArrayCopy);

      // auto focus to next InputText if value is not blank
      if (value !== '') {
        if (index === 0) {
          secondTextInputRef.current.focus();
        } else if (index === 1) {
          thirdTextInputRef.current.focus();
        } else if (index === 2) {
          fourthTextInputRef.current.focus();
        }else if (index === 3) {
          fifthTextInputRef.current.focus();
        }else if (index === 4) {
          sixTextInputRef.current.focus();
        }
      }
    };
  };

  // only backspace key press event is fired on Android
  // to have consistency, using this event just to detect backspace key press and
  // onOtpChange for other digits press
  const onOtpKeyPress = index => {
    return ({ nativeEvent: { key: value } }) => {
      // auto focus to previous InputText if value is blank and existing value is also blank
      if (value === 'Backspace' && otpArray[index] === '') {
        if (index === 1) {
          firstTextInputRef.current.focus();
        } else if (index === 2) {
          secondTextInputRef.current.focus();
        } else if (index === 3) {
          thirdTextInputRef.current.focus();
        }else if (index === 4) {
          fourthTextInputRef.current.focus();
        }else if (index === 5){
          fifthTextInputRef.current.focus();
        }

        /**
         * clear the focused text box as well only on Android because on mweb onOtpChange will be also called
         * doing this thing for us
         * todo check this behaviour on ios
         */
        if (isAndroid && index > 0) {
          const otpArrayCopy = otpArray.concat();
          otpArrayCopy[index - 1] = ''; // clear the previous box which will be in focus
          setOtpArray(otpArrayCopy);
        }
      }
    };
  };

  return (
      <View style={styles.container}>
        <View style={[styles.row]}>
          {[
            firstTextInputRef,
            secondTextInputRef,
            thirdTextInputRef,
            fourthTextInputRef,
            fifthTextInputRef,
            sixTextInputRef
          ].map((textInputRef, index) => (
            <PinInput
              containerStyle={{
               
              }}
              value={otpArray[index]}
              onKeyPress={onOtpKeyPress(index)}
              onChangeText={onOtpChange(index)}
              keyboardType={'numeric'}
              maxLength={1}
              style={styles.otpText}
              autoFocus={index === 0 ? true : undefined}
              refCallback={refCallback(textInputRef)}
              key={index}
            />
          ))}
        </View>
        {errorMessage ? (
          <Text style={styles.errorMessages}>{errorMessage}</Text>
        ) : null}
        
        <View style={styles.button}>
               <AppButton text={"Otp"} widt={320} method={onSubmitButtonPress} />
                <TouchableOpacity style={styles.goRegister} onPress={() => onSubmitButtonPress} >
                  <Text style={styles.alreadyHasAccount}> {"Remember Password?"} </Text>
                  <Text style={styles.loginLink}>Login</Text>
                </TouchableOpacity>
            </View>
      </View>
  );
};

OtpVerification.defaultProps = {
 
};

OtpVerification.propTypes = {
  // phone: PropTypes.string.isRequired,
  method: PropTypes.func.isRequired,
  keys:PropTypes.string.isRequired,
  payload:PropTypes.object,
  dispatch:PropTypes.func,
  callback:PropTypes.func
};

export default OtpVerification;