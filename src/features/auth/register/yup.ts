import * as yup from 'yup';
export const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const phoneRegExp =  /^[+\d]+(?:[\d-.\s()]*)$/;


export const yupSchema = yup.object().shape({
    first_name: yup.string().required("Required field"),
    last_name:yup.string().required("Required field"),
    phone_number:yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required field"),
    email: yup.string().email().required("Required"),
    password: yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
})