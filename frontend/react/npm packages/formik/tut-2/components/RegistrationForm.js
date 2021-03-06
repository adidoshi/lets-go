import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function RegistrationForm() {
    const options = [
        {key: 'Email', value: 'emailmoc'},
        {key: 'Telephone', value: 'telephonemoc'}
    ]

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
        modeOfContact: Yup.string().required('Required'),
        phone: Yup.string().when('modeOfContact', {
            is: 'telephonemoc',
            then: Yup.string().required('Required')
        })
    })

    const onSubmit = values => {
        console.log('Form Data', values)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return <Form>
                        <FormikControl control='input' type='email' name='email' label='Email' />
                        <FormikControl control='input' type='password' name='password' label='Password' />
                        <FormikControl control='input' type='password' name='confirmPassword' label='Confirm Password' />
                        <FormikControl control='radio' name='modeOfContact' label='Mode Of Contact' options={options} />
                        <FormikControl control='input' type='text' name='phone' label='Phone Number' />
                        <button type='submit' disabled={!formik.isValid}>Submit</button>
                    </Form>
                }
            }
        </Formik>
    )
}

export default RegistrationForm
