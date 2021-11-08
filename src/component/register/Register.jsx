import { ErrorMessage, Field, Form, Formik } from "formik";
import {useHistory} from 'react-router'
import { Link } from "react-router-dom";
import TextError from "../TextError";
import * as Yup from "yup";
import "./register.css";
import { auth } from "../../firebase";

const Register = () => {
    const history = useHistory();
  const initialValues = {
    email: "",
    password: "",
    passwordConfirm: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("Email format is not Valid"),
    password: Yup.string().required("Required"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required"),
  });
  const onSubmit = (values) => {
    const { email, passwordConfirm } = values;
    auth
      .createUserWithEmailAndPassword(email, passwordConfirm)
      .then((res) => {
        console.log(res);
        history.replace("/login")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="register-logo"
        />
      </Link>
      <div class="register__container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnMount
        >
          {(formik) => {
            // console.log(formik);
            return (
              <fragment>
                <Form>
                  <h1 className="form-title">Sign-up</h1>
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
                  <div className="form-control">
                    <label className="form-label" htmlFor="passwordConfirm">
                      Confirm Password
                    </label>
                    <Field
                      className="form-field"
                      id="passwordConfirm"
                      type="password"
                      name="passwordConfirm"
                    />
                    <ErrorMessage
                      name="passwordConfirm"
                      component={TextError}
                    />
                  </div>
                  <button
                    className="register__signInBtn"
                    type="submit"
                    disabled={!formik.isValid}
                  >
                    Sign up
                  </button>
                </Form>
              </fragment>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
