import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Values", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

const SimpleFormTwo = () => {
  // console.log('Formik values:', formik.values);
  //   console.log('Visited fields', formik.touched);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <div className="container">
          <Form>
            <div className="inp">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" id="name" />
              <ErrorMessage name="name" />
            </div>

            <div className="inp">
              <label htmlFor="email">E-mail</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" />
            </div>

            <div className="inp">
              <label htmlFor="channel">Channel</label>
              <Field type="text" id="channel" name="channel" />
              <ErrorMessage name="channel" />
            </div>

            <button type="submit">Sign in</button>
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default SimpleFormTwo;
