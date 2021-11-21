import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import NavigationService from '../../../navigation/NavigationService';
import CustomScreen from '../../../components/shared/CustomScreens';
import AppInput from '../../../components/shared/Forms/Input';
import CustomLoader from '../../../components/shared/CustomLoader';
import * as registerCalls from './action/apiCalls';
import {Formik} from 'formik';
import {yupSchema} from './yup';
import {
  IRegisterReducer,
  IRegisterFormState,
} from './action/register.interface';

interface IRegisterReducerState {
  registerReducer: IRegisterReducer;
}

interface RegisterProps {
  [key: string]: any;
}

const Register: React.FC<RegisterProps> = ({route}) => {
  const navParams = route.params.is_distributor;
  console.log(navParams);
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: IRegisterReducerState) => state.registerReducer.isRegisterLoading,
  );
  const errorMessage = useSelector(
    (state: IRegisterReducerState) => state.registerReducer.errorMessage,
  );
  const onRegister = (values: IRegisterFormState) => {
    const payload = {
      ...values,
      is_distributor: navParams || false,
    };
    registerCalls.registerUser(payload, dispatch);
  };

  //   const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  //   const onForgot = () => NavigationService.navigate('ForgotPassword');
  return (
    <>
      {isLoading == true ? (
        <CustomLoader />
      ) : (
        <CustomScreen
          title="Register"
          subTitle={
            navParams !== true
              ? 'Create a new account for free'
              : 'Become a Distributor'
          }>
          <ScrollView style={styles.content}>
            <View style={styles.formContainer}>
              {errorMessage ? (
                <Text style={styles.errorMessage}>
                  {errorMessage && errorMessage}
                </Text>
              ) : null}
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <Formik
                  initialValues={{
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    password: '',
                  }}
                  onSubmit={onRegister}
                  validationSchema={yupSchema}>
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                  }) => (
                    <View>
                      <AppInput
                        label={'First Name'}
                        onChangeText={handleChange('first_name')}
                        value={values.first_name}
                        onBlur={handleBlur('first_name')}
                        isError={errors.first_name && touched.first_name}
                        placeholder={'Eyo'}
                      />
                      <AppInput
                        label={'Last Name'}
                        onChangeText={handleChange('last_name')}
                        value={values.last_name}
                        onBlur={handleBlur('last_name')}
                        isError={errors.last_name && touched.last_name}
                        placeholder={'Alison'}
                      />
                      <AppInput
                        label={'Phone Number'}
                        onChangeText={handleChange('phone_number')}
                        value={values.phone_number}
                        onBlur={handleBlur('phone_number')}
                        isError={errors.phone_number && touched.phone_number}
                        placeholder={'07035345753'}
                      />
                      <AppInput
                        label={'Email address'}
                        onChangeText={handleChange('email')}
                        value={values.email}
                        isError={errors.email && touched.email}
                        onBlur={handleBlur('email')}
                        placeholder={'salesagent@pantha.com'}
                      />
                      <AppInput
                        label={'Password'}
                        onChangeText={handleChange('password')}
                        value={values.password}
                        isError={errors.password && touched.password}
                        onBlur={handleBlur('password')}
                        isPassword={true}
                        placeholder={'******'}
                      />
                      <TouchableOpacity
                        style={[styles.button]}
                        onPress={handleSubmit}>
                        <Text> Register </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.goRegister}
                        onPress={() => NavigationService.navigate('Login')}>
                        <Text style={styles.alreadyHasAccount}>
                          {' '}
                          {'Already had an account'}{' '}
                        </Text>
                        <Text style={styles.loginLink}> Login </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </Formik>
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </CustomScreen>
      )}
    </>
  );
};

export default Register;
