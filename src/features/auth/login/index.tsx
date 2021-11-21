import React from 'react';
import {View, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as loginCalls from './actions/apiCalls';
import styles from './styles';
import NavigationService from '../../../navigation/NavigationService';
import CustomScreen from '../../../components/shared/CustomScreens';
import AppInput from '../../../components/shared/Forms/Input';
import AppButton from '../../../components/shared/Button';
import {Formik} from 'formik';

import {yupSchema} from './yup';
import {ILoginFormState, ILoginReducer} from './actions/login.interface';
import CustomLoader from '../../../components/shared/CustomLoader';
import AppText from '../../../components/shared/AppText';

interface ILoginReducerState {
  loginReducer: ILoginReducer;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: ILoginReducerState) => state.loginReducer.isLoginLoading,
  );
  const onLogin = (values: ILoginFormState) => {
    loginCalls.loginUser(values, dispatch);
    // loginCalls.login(payload, dispatch)
  };
  return (
    <>
      {isLoading === true ? (
        <CustomLoader />
      ) : (
        <CustomScreen
          title="Welcome back!"
          subTitle={'Sign in your account to continue'}
          size={'big'}>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={onLogin}
            validationSchema={yupSchema}>
            {({handleChange, handleSubmit, values, errors, touched}) => (
              <View style={styles.content}>
                <TouchableWithoutFeedback>
                  <View style={styles.input}>
                    <AppInput
                      label={'Email address'}
                      onChangeText={handleChange('email')}
                      value={values.email}
                      isError={errors.email && touched.email}
                      placeholder={'salesagent@pantha.com'}
                    />
                    <AppInput
                      label={'Password'}
                      isError={errors.password && touched.password}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      isPassword={true}
                      placeholder={'******'}
                    />
                    <TouchableOpacity
                      style={styles.goToForgotten}
                      onPress={() =>
                        NavigationService.navigate('ForgotPassword')
                      }>
                      <AppText style={styles.loginLink}>
                        {' '}
                        Forgot Password?{' '}
                      </AppText>
                    </TouchableOpacity>
                  </View>
                </TouchableWithoutFeedback>
                <View style={styles.button}>
                  <AppButton text={'Login'} method={handleSubmit} />
                  <TouchableOpacity
                    style={styles.goRegister}
                    onPress={() => NavigationService.navigate('Register')}>
                    <AppText style={styles.alreadyHasAccount}>
                      {' '}
                      {"Don't have an account?"}{' '}
                    </AppText>
                    <AppText style={styles.loginLink}>Register</AppText>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </CustomScreen>
      )}
    </>
  );
};

export default Login;
