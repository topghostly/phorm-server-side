import * as Yup from "yup"

export interface loginInterface{
    usermail: string;
    password: string;
}

export interface registrationInterface{
    username: string;
    usermail: string;
    password: string;
    passwordReEnter: string;
}

export interface decodedTokenInterface{
    date: object;
    exp: number;
    iat: number;
}

export const registrationSchema = Yup.object().shape({
    username: Yup.string().min(3, "username must be atleast 3 characters").required("Username is required"),
    usermail: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, "Password must have a minimum of 6 characters").required("password is required").matches(/^(?=.*[A-Z]).*$/, "Password must have atleast one capital letter"),
    passwordReEnter: Yup.string().required("Confirm password is required").oneOf([Yup.ref('password')], 'Passwords do not match')
})
export const loginSchema = Yup.object().shape({
    usermail: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required("password is required")
})