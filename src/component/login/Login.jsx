import { Fragment } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./Login.css";
import TextError from "../TextError";
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("Email format is not Valid"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="login-logo"
        />
      </Link>
      <div class="login__container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            console.log(formik);
            return (
              <fragment>
                <Form>
                  <h1 className="form-title">Sign-in</h1>
                  <div className="form-control">
                    <label className="form-label" htmlFor="email">
                      E-mail
                    </label>
                    <Field
                      className="form-field"
                      id="email"
                      type="email"
                      name="email"
                    />
                    <ErrorMessage name="email" component={TextError} />
                  </div>
                  <div className="form-control">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <Field
                      className="form-field"
                      id="password"
                      type="password"
                      name="password"
                    />
                    <ErrorMessage name="password" component={TextError} />
                  </div>
                  <button className="login__signInBtn" type="submit">
                    Sign in
                  </button>
                </Form>
                <p className="login__text">
                  By signing-in you agree to Amazon Conditions of Use & Sale.
                  Please see our Privacy Notice, our Cookies Notice and our
                  Interest-Based Ads Notice
                </p>
                <button className="login__registerBtn">
                  Create your Amazon Account
                </button>
              </fragment>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
