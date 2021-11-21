import React from 'react';
import {View, TouchableOpacity} from 'react-native';
// import AppButton from '../../../components/shared/Button';
import styles from './styles';
// import * as loginCalls from '../../../features/auth/login/actions/apiCalls';
// import {useDispatch} from 'react-redux';
import {ILoginReducer} from '../../../auth/login/actions/login.interface';
import CustomScreen from '../../../../components/shared/CustomScreens';
import AppButton from '../../../../components/shared/Button';
import {Formik} from 'formik';
import AppInput from '../../../../components/shared/Forms/Input';

interface ILoginReducerState {
  loginReducer: ILoginReducer;
}

const AddInventory: React.FC = () => {
  //   const dispatch = useDispatch();
  //   const onLogout = () => loginCalls.logout(dispatch);
  const onLogin = (values: any) => {
    console.log(values);
    // loginCalls.login(payload, dispatch)
  };

  return (
    <CustomScreen size="big">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={onLogin}
        validationSchema={yupSchema}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <View style={styles.content}>
            <View>
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
                  onPress={() => NavigationService.navigate('ForgotPassword')}>
                  <AppText style={styles.loginLink}> Forgot Password? </AppText>
                </TouchableOpacity>
              </View>
            </View>
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
  );
};

export default AddInventory;
