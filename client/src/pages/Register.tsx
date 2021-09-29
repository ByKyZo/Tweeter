import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import * as Yup from 'yup';
import AuthInput from '../components/auth/AuthInput';
import AuthLayout from '../components/auth/AuthLayout';

/**
 * ? First and Last name min and max chars source :
 * ? https://www.isignthis.com/knowledge/what-are-the-max-length-characters-for-first-name-and-last-name
 */

const Register = () => {
    const handleRegister = () => {
        console.log('REGISTER');
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string()
                .required()
                .min(2, 'First name is too short min 2 chars')
                .max(26, 'First name is too long max 26 chars'),
            lastName: Yup.string()
                .required()
                .min(2, 'Last name is too short min 2 chars')
                .max(26, 'Last name is too long max 26 chars'),
            email: Yup.string().email().required(),
            password: Yup.string().required(),
            confirmPassword: Yup.string()
                .required('Please confirm your password')
                .oneOf([Yup.ref('password'), null], 'Password must matched'),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    useEffect(() => {
        console.log(formik.errors);
    }, [formik.errors]);

    return (
        <AuthLayout onFormSubmit={formik.handleSubmit} isSignin={false}>
            <AuthInput
                {...formik.getFieldProps('firstName')}
                type="text"
                placeholder="First name"></AuthInput>
            <AuthInput
                {...formik.getFieldProps('lastName')}
                type="text"
                placeholder="Last name"></AuthInput>
            <AuthInput
                {...formik.getFieldProps('email')}
                type="email"
                placeholder="Email"></AuthInput>
            <AuthInput
                {...formik.getFieldProps('password')}
                type="password"
                placeholder="Password"></AuthInput>
            <AuthInput
                {...formik.getFieldProps('confirmPassword')}
                type="password"
                placeholder="Confirm Password"></AuthInput>
        </AuthLayout>
    );
};

export default Register;
