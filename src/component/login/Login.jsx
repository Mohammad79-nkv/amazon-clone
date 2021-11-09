import { Fragment } from "react";
import { useHistory } from "react-router";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./Login.css";
import TextError from "../TextError";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStateValue } from "../../Store/StateProvider";
import { useState } from "react";
import Home from "./../Home";
const Login = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useHistory();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("Email format is not Valid"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    const { email, password } = values;
    // console.log(values);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res.user.email);
        toast.success(`Hello, ${res.user.email}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        history.replace("/");
      })
      .catch((err) => {
        toast.error(`${err.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  if (user) {
    history.replace("/");
  }
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
            // console.log(formik);
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
                <p className="login__text" disabled={!formik.isValid}>
                  By signing-in you agree to Amazon Conditions of Use & Sale.
                  Please see our Privacy Notice, our Cookies Notice and our
                  Interest-Based Ads Notice
                </p>
                <Link to="/register">
                  <button className="login__registerBtn">
                    Create your Amazon Account
                  </button>
                </Link>
              </fragment>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
