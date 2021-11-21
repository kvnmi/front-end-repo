import React from 'react';
import {View} from 'react-native';
import AppButton from '../../../components/shared/Button';
import {Picker} from '@react-native-community/picker';
// import AppButton from '../../../components/shared/Button';
import styles from './styles';
// import * as loginCalls from '../../../features/auth/login/actions/apiCalls';
// import {useDispatch} from 'react-redux';

import AppInput from '../../../components/shared/Forms/Input';
import CustomScreen from '../../../components/shared/CustomScreens';
import {Formik} from 'formik';
import {yupSchema} from './yup';

const CreateStore: React.FC = () => {
  const [error, setError] = React.useState('');
  //   const dispatch = useDispatch();
  //   const onLogout = () => loginCalls.logout(dispatch);

  const onCreateStore = values => {
    console.log(values);
    // const payload = {
    //   ...values,
    // };
    // registerCalls.registerUser(payload, setError);
  };

  return (
    <CustomScreen
      title={'Create an account'}
      subTitle={'Become a distributor'}
      size={'big'}>
      <Formik
        initialValues={{
          store_name: '',
          shop_address: '',
          country: '',
          state: '',
        }}
        onSubmit={onCreateStore}
        validationSchema={yupSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <AppInput
              label={'Store Name'}
              onChangeText={handleChange('store_name')}
              value={values.store_name}
              onBlur={handleBlur('store_name')}
              isError={touched.store_name && errors.store_name}
              placeholder={'Eyo'}
            />
            <AppInput
              label={'Shop Address'}
              onChangeText={handleChange('shop_address')}
              value={values.shop_address}
              onBlur={handleBlur('shop_address')}
              isError={touched.shop_address && errors.shop_address}
              placeholder={'Store Address'}
            />
            <AppInput
              label={'Country'}
              onChangeText={handleChange('country')}
              value={values.country}
              isError={touched.country && errors.country}
              onBlur={handleBlur('country')}
              placeholder={'country'}
            />
            <AppInput
              label={'State'}
              onChangeText={handleChange('state')}
              value={values.state}
              isError={touched.state && errors.state}
              onBlur={handleBlur('state')}
              placeholder={'state'}
            />
            <AppButton
              text={'Continue'}
              // method={handleSubmit}
              navigationTo={'StoreDashboard'}
            />
          </View>
        )}
      </Formik>
    </CustomScreen>
  );
};

export default CreateStore;
