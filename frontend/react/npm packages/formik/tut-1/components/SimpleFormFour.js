import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from "formik";
import * as Yup from 'yup';
import TextError from "./TextError";

// Manually triggering validations

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
      facebook: '',
      twitter: ""
  },
  phoneNumbers: ["", ""],
  phNumbers: [""]
};

const savedData = {
    name: "Adi",
  email: "adi@example.com",
  channel: "coderAdii",
  comments: "hey there",
  address: "Dubai",
  social: {
      facebook: '',
      twitter: ""
  },
  phoneNumbers: ["", ""],
  phNumbers: [""]
}

const onSubmit = (values, onSubmitProps) => {
  console.log("Form Data", values);
  console.log("Submit props", onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm()
};

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required')
})

const validateComments = value => {
    let error
    if (!value) {
        error = 'Required'
    }
    return error
}

const SimpleFormFour = () => {
const [formData, setFormData] = useState(null)
  // console.log('Formik values:', formik.values);
//   console.log('Visited fields', formik.touched);

  return (
    <>
    <Formik 
    initialValues = {formData || initialValues}
    validationSchema = {validationSchema}
    onSubmit = {onSubmit}
    enableReinitialize
    // validateOnChange={false}
    // validateOnBlur={false}
        // validateOnMount

    >

        {
            formik => {
console.log('Formik props', formik)
return (
    <div className="container">
        <Form>
          <div className="inp">
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              name="name"
              id="name"
              
            />
            <ErrorMessage name='name' component={TextError}/>
          </div>

          <div className="inp">
            <label htmlFor="email">E-mail</label>
            <Field
              type="email"
              id="email"
              name="email"
            />
            <ErrorMessage name='email'>
                {
                    (errorMsg) => <div className="msg">{errorMsg}</div>
                }
            </ErrorMessage>
          </div>

          <div className="inp">
            <label htmlFor="channel">Channel</label>
            <Field
              type="text"
              id="channel"
              name="channel"
              placeholder='Enter channel name'
            />
            <ErrorMessage name='channel' />
          </div>

          <div className="inp">
            <label htmlFor="comments">Comments</label>
            <Field
              as="textarea"
              id="comments"
              name="comments"
              validate={validateComments}
            />
            <ErrorMessage name='comments' component={TextError} />
          </div>

          <div className="inp">
            <label htmlFor="address">Address</label>
            <FastField name='address'>
            {props => {
                //  console.log('Field Render')
                // We can include form as well 
                    const {field,  meta} = props
                    return (
                        <div>
                            <input type="text" id="address" {...field} />
                            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                        </div>
                    )
                }
            }  
            </FastField>
          </div>

          <div className="inp">
            <label htmlFor="facebook">Facebook handle</label>
            <Field
            type='text'
              id="facebook"
              name="social.facebook"
            />
          </div>

          <div className="inp">
            <label htmlFor="twitter">Twitter handle</label>
            <Field
            type='text'
              id="twitter"
              name="social.twitter"
            />
          </div>

          <div className="inp">
            <label htmlFor="primaryPhone">Primary Phone </label>
            <Field
            type='text'
              id="primaryPhone"
              name="phoneNumbers[0]"
            />
          </div>

          <div className="inp">
            <label htmlFor="secondaryPhone">Secondary phone no</label>
            <Field
            type='text'
              id="secondaryPhone"
              name="phoneNumbers[1]"
            />
          </div>

          <div className="inp">
            <label >Phone num list</label>
            <FieldArray name="phNumbers">
            {
                fieldArrayProps => {
                    // console.log('field Array Props', fieldArrayProps)
                    const { push, remove, form } = fieldArrayProps
                    const { values } = form
                    const { phNumbers } = values

                    // console.log('Form erros',form.errors)
                    return (
                        <div>
                            {phNumbers.map((elem, index) => (
                                <div key={index}>
                                    <Field name={`phNumbers[${index}]`} />
                                    {index > 0 && (
                                        <>
                                        <button type='button' onClick={() => remove(index)}>-</button>
                                        </>
                                    )}
                                    <button type='button' onClick={() => push('')}>+</button>
                                </div>
                            ))}
                        </div>
                    )
                }
            }
            </FieldArray>
          </div>

          <button type="button" onClick={() => formik.validateField('comments')}>Validate comments</button>
          <button type="button" onClick={() => formik.validateForm()}>Validate All</button>

          <button type="button" onClick={() => formik.setFieldTouched('comments')}>Visit Comments</button>
          <button type="button" onClick={() => formik.setTouched({
              name: true,
              email: true,
              channel: true,
              comments: true
          })}>Validate fields</button>
          <button type="reset">Reset</button>
          <div>
          <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
          </div>
          <div>
              <button type="button" onClick={() => setFormData(savedData)}>
          Load saved data
              </button>
          </div>
          {/* disabled={!formik.isValid} */}
        </Form>
      </div>
)
            }
        }
      
      </Formik>
    </>
  );
};

export default SimpleFormFour;
