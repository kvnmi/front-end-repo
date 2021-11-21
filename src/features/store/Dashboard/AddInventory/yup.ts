import * as yup from 'yup';

export const yupSchema = yup.object().shape({
  category_id: yup.string().email().required('Required'),
});
