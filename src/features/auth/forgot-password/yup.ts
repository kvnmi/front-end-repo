import * as yup from 'yup';

export const yupSchema = yup.object().shape({
    email: yup.string().email().required("Required")
})