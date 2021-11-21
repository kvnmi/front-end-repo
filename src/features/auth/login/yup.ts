import * as yup from 'yup';

export const yupSchema = yup.object().shape({
  email: yup.string().email().required('Required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password is too short - should be 6 chars minimum'),
});
