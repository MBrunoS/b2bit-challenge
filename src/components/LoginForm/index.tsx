import axios, { AxiosError } from "axios";
import { Formik, ErrorMessage, Field } from "formik";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { Button } from "../Button";
import { ErrorBox, Form, FormControl } from "./styles";

type Values = {
  email: string;
  password: string;
};

type ApiError = { detail: string };

export const LoginForm: React.FC = () => {
  const { token, setToken, setTokenRefresh } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate("/profile");
    }
  }, [token]);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {} as Values;

        if (!values.email) {
          errors.email = "This field is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.password) {
          errors.password = "This field is required";
        }

        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const { data } = await axios.post(
            "https://frontendproject.b2bit.company/account/tokens/",
            {
              email: values.email,
              password: values.password,
            }
          );
          setToken(data.tokens.access);
          setTokenRefresh(data.tokens.refresh);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            const msg = (error as AxiosError).response?.data as ApiError;
            toast.error(msg.detail);
          }
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <FormControl>
            <label htmlFor="email">E-mail</label>
            <Field
              type="text"
              name="email"
              id="email"
              placeholder="@gmail.com"
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
            {formik.errors.email && (
              <ErrorBox>
                <ErrorMessage name="email" />
              </ErrorBox>
            )}
          </FormControl>

          <FormControl>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              id="password"
              placeholder="****************"
              onChange={formik.handleChange}
              value={formik.values.password}
              required
            />
            {formik.errors.password && (
              <ErrorBox>
                <ErrorMessage name="password" />
              </ErrorBox>
            )}{" "}
          </FormControl>

          <Button type="submit" disabled={formik.isSubmitting}>
            Sign In
          </Button>
        </Form>
      )}
    </Formik>
  );
};
