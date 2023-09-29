import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, Button, Alert } from "antd";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

interface RegisterFormProps {
  onSubmit: (values: RegisterFormValues) => void;
}

const RegisterPage: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const initialValues: RegisterFormValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (
    values: RegisterFormValues,
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
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              as={Input}
              placeholder="Enter Name"
            />
            <ErrorMessage name="name" component={Alert} />
          </div>
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
              Register
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterPage;
