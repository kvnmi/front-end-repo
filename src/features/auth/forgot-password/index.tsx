/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import AppInput from '../../../components/shared/Forms/Input';
import AppButton from '../../../components/shared/Button';
import BackArrow from '../../../components/shared/BackArrow';
import * as Animatable from 'react-native-animatable';
import Otp from './Otp';
import * as forgotPasswordCall from './action/apiCall';
import {yupSchema} from './yup';

import {Formik} from 'formik';
import AppText from '../../../components/shared/AppText';
type ModalProp = {
  isVisible: boolean;
  setVisible: any;
};

const index: React.FC<ModalProp> = ({setVisible}) => {
  const [goToOtp, setGotoOtp] = React.useState(false);
  const [error, setError] = React.useState('');

  const forgotPassword = values => {
    console.log(values);
    const result = forgotPasswordCall.forgotPassword(values, setError);
    if (result) {
      moveToOtp();
    }
  };

  const moveToOtp = () => {
    setGotoOtp(true);
  };

  const ForgotPassword = () => (
    <View>
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subTitle}>
        Don’t worry, resetting your password is easy! Enter the email you used
        on sign up.
      </Text>
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={forgotPassword}
        validationSchema={yupSchema}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <>
            <View style={styles.formSection}>
              {error ? <AppText>error</AppText> : null}
              <AppInput
                label={'Email address'}
                onChangeText={handleChange('email')}
                value={values.email}
                isError={errors.email && touched.email ? true : false}
                placeholder={'salesagent@pantha.com'}
              />
            </View>
            <View style={styles.button}>
              <AppButton text={'Proceed'} widt={320} method={handleSubmit} />
              <TouchableOpacity
                style={styles.goRegister}
                onPress={() => setVisible(false)}>
                <Text style={styles.alreadyHasAccount}>
                  {' '}
                  {'Remember Password?'}{' '}
                </Text>
                <Text style={styles.loginLink}>Login</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );

  return (
    <View style={styles.topYellowContainer}>
      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => setVisible(false)}>
        <BackArrow />
      </TouchableOpacity>
      <Animatable.View animation="fadeInUpBig" style={styles.container}>
        {goToOtp ? <Otp setVisible={setVisible} /> : <ForgotPassword />}
      </Animatable.View>
    </View>
  );
};

export default index;
