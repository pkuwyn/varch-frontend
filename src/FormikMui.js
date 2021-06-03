import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
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
export default function FormikMui(props) {
  return (
    <div
      style={{
        border: "1px solid red",
        padding: 20,

        width: "50%",
        margin: "auto",
      }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          console.log(`${values} submited`);

          setTimeout(() => {
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({ submitForm, isSubmitting, handleSubmit }) => {
          console.log(submitForm === handleSubmit);
          return (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                height: 300,
              }}
            >
              <Field
                component={TextField}
                type="email"
                name="email"
                label="Standard"
              ></Field>
              <Field
                component={TextField}
                type="password"
                label="Password"
                name="password"
                variant="outlined"
              />
              {isSubmitting && <LinearProgress />}
              <br />
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
