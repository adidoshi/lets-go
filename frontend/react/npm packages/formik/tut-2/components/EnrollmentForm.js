import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from "yup";
import FormikControl from "./FormikControl";


function EnrollmentForm() {

    const dropdownOptions = [
        {key: 'Select your couse', value: ''},
        {key: 'React', value: 'react'},
        {key:'Angular', value: 'angular'},
        {key: 'Vue', value:'vue'}
    ]

    const checkboxOptions = [
        {key: 'HTML', value: 'html'},
        {key: 'CSS', value: 'css'},
        {key: 'Javascript', value: 'js'}
    ]

    const initialValues = {
        email: '',
        bio: '',
        course: '',
        skills: [],
        courseDate: null
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        bio: Yup.string().required('Required'),
        course: Yup.string().required('Required'),
        skills: Yup.array().min(1, 'Minimum one skill required'),
        courseDate: Yup.date().required('Required').nullable()
    })

    const onSubmit = values => {
        console.log('Form Data', values)
    }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
            {
                formik => {
                    return <Form>
                        <FormikControl control='input' type='email' name='email' label='Email' />
                        <FormikControl control='textarea' label='Bio' name='bio' />
                        <FormikControl control='select' name='course' options={dropdownOptions} label='Course selection' />
                        <FormikControl control='checkbox' name='skills' label='Skills' options={checkboxOptions} />
                        <FormikControl control='date' name='courseDate' label='Course Date' />

                        <button type='submit'>Submit</button>
                        <button type='reset'>Reset</button>
                    </Form>
                }
            }
        </Formik>
    )
}

export default EnrollmentForm
