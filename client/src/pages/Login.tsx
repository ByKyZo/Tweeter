import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import AuthInput from '../components/auth/AuthInput';
import AuthLayout from '../components/auth/AuthLayout';

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <AuthLayout onFormSubmit={formik.handleSubmit} isSignin={true}>
            <AuthInput
                {...formik.getFieldProps('email')}
                error={formik.errors.email}
                isTouched={formik.touched.email}
                type="email"
                placeholder="Email"></AuthInput>
            <AuthInput
                {...formik.getFieldProps('password')}
                error={formik.errors.password}
                isTouched={formik.touched.password}
                type="password"
                placeholder="Password"></AuthInput>
        </AuthLayout>
    );
};

export default Login;
