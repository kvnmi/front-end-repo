import * as yup from 'yup';

export const yupSchema = yup.object().shape({
  store_name: yup.string().required('Required'),
  shop_address: yup.string().required('Required'),
  country: yup.string().required('Required'),
  state: yup.string().required('Required'),
});
