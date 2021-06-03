import React from "react";
import { Formik, useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";

import { useUserContext } from "./UserContext";
const useStyles = makeStyles({
  input: {
    "&:valid": {
      backgroundColor: "red",
    },
    "&:invalid": {
      backgroundColor: "blue",
    },
    "&:invalid:required": {
      backgroundImage: `linear-gradient(to right, pink, lightgreen)`,
    },
  },
});

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "password required";
  } else if (values.password.length < 8) {
    errors.password = "password at least 8 characters";
  }

  return errors;
};

export default function FormikDemo(props) {
  const { store, dispatch } = useUserContext();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate,

    onSubmit: (values, { setSubmitting }) => {
      console.log(`${values} submited`);
      dispatch({
        type: "login",
        data: values,
      });
      setTimeout(() => {
        setSubmitting(false);
      }, 1000);
    },
  });
  return (
    <div
      style={{
        border: "1px red solid",
      }}
    >
      <p>Formik demo</p>
      <p>{JSON.stringify(store)}</p>
      {/* <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(`${values} submited`);
          setTimeout(() => {
            setSubmitting(false);
          }, 1000);
        }}
      >
        {LoginForm}
      </Formik> */}
      <form onSubmit={formik.handleSubmit} noValidate>
        <input
          type="email"
          name="email"
          {...formik.getFieldProps("email")}
          className={classes.input}
        />

        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={classes.input}
        />
        <button type="submit" disabled={formik.isSubmitting}>
          Submit
        </button>
      </form>
      <p>{JSON.stringify(formik.errors)}</p>
      <p>{JSON.stringify(formik.touched)}</p>
    </div>
  );
}
