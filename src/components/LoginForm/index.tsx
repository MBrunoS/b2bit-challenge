import { useFormik } from "formik";
import React from "react";
import { Button, Form, FormControl, Input } from "./styles";

export const LoginForm: React.FC = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormControl>
        <label htmlFor="email">E-mail</label>
        <Input type="text" name="email" id="email" placeholder="@gmail.com" />
      </FormControl>

      <FormControl>
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="****************"
        />
      </FormControl>

      <Button type="submit">Sign In</Button>
    </Form>
  );
};
