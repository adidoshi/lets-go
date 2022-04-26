import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Values", values);
};

// const validate = (values) => {
//   let errors = {};

//   if (!values.name) {
//     errors.name = "Required";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Invalid email format";
//   }

//   if (!values.channel) {
//     errors.channel = "Required";
//   }
//   return errors;
// };

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required')
})

const SimpleForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    // validate
  });

  // console.log('Formik values:', formik.values);
  console.log('Visited fields', formik.touched);

  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="inp">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="msg">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="inp">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="msg">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="inp">
            <label htmlFor="channel">Channel</label>
            <input
              type="text"
              id="channel"
              name="channel"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.channel}
            />
            {formik.touched.channel && formik.errors.channel ? (
              <div className="msg">{formik.errors.channel}</div>
            ) : null}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SimpleForm;
