import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, Button, Alert } from "antd";

interface LoginFormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (
    values: LoginFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    onSubmit(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              as={Input}
              placeholder="Enter Email"
            />
            <ErrorMessage name="email" component={Alert} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              as={Input.Password}
              placeholder="Enter Password"
            />
            <ErrorMessage name="password" component={Alert} />
          </div>
          <div>
            <Button type="primary" htmlType="submit" disabled={isSubmitting}>
              Login
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
