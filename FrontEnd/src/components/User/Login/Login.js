import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  CloseCircleOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { LoginSchema } from "../../schemas";
import axios from "axios";

import Nuki from "../../../assets/Extra/nuki.webp";

import Footer from "../../Footer/Footer";
import { UserContext } from "../../Context/UserContext";

const Login = () => {
  const { setUser, setFirstName, setLastName } = useContext(UserContext);

  let history = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: data => {
      axios
        .post("http://localhost:3001/login", {
          email: data.email,
          password: data.password,
        })
        .then(response => {
          setFirstName(response.data[0].first_name);
          setLastName(response.data[0].last_name);
          setUser(true);

          alert("Login Successful!");
        })
        .catch(error => {
          console.log(error);
          setWarningSign(true);
        });
    },
  });
  // console.log(formik);
  // show/hide password
  const [PasswordType, setPasswordType] = useState("password");
  function togglePasswordType() {
    if (PasswordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }

  // show/hide unsuccessful login
  const [WarningSign, setWarningSign] = useState(false);
  function toggleWarningSign() {
    if (WarningSign) {
      setWarningSign(false);
    }
    if (formik.touched.email || formik.touched.password) {
      setWarningSign(false);
    }
  }
  return (
    <>
      <div className="login">
        <img src={Nuki} alt="Nuki" style={{ height: "5rem" }} />
        <h1 className="heading">LOGIN</h1>
        <p className="sub-heading">Please enter your e-mail and password:</p>
        <form onSubmit={formik.handleSubmit} autoComplete="true">
          {/* error message */}
          {WarningSign ? (
            <div className={WarningSign ? "show" : "hide"}>
              <div className="error-msg">
                <h3>Login not successful</h3>
                <button type="button" onClick={toggleWarningSign}>
                  <CloseCircleOutlined style={{ fontSize: "20px" }} />
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* email */}
          <div className="bundle">
            <div>
              <label htmlFor="email">
                <h3 className="label">Email</h3>
              </label>
            </div>
            <input
              type="text"
              id="email"
              className={
                formik.errors.email && formik.touched.email ? "input-error" : ""
              }
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onClick={toggleWarningSign}
            />
            {formik.errors.email && formik.touched && (
              <p className="error">{formik.errors.email}</p>
            )}
          </div>
          {/* password */}
          <div className="bundle">
            <div>
              <label htmlFor="password">
                <h3 className="label">Password</h3>
              </label>
            </div>
            <div className="password-holder">
              <input
                type={PasswordType}
                id="password"
                className={
                  formik.errors.password && formik.touched.password
                    ? "input-error"
                    : ""
                }
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onClick={toggleWarningSign}
              />
              {formik.errors.password && formik.touched.password && (
                <p className="error">{formik.errors.password}</p>
              )}
              <button
                type="button"
                className="password"
                onClick={togglePasswordType}
              >
                {PasswordType === "password" ? (
                  <EyeInvisibleOutlined
                    style={{ fontSize: "20px" }}
                    className="hide-password"
                  />
                ) : (
                  <EyeOutlined
                    style={{ fontSize: "20px" }}
                    className="show-password"
                  />
                )}
              </button>
            </div>
          </div>
          <button
            // disabled={formik.isSubmitting}
            type="submit"
            className="submit-btn"
          >
            LOGIN
          </button>
        </form>
        <div>
          <p>
            Don't have an account? <Link to="/register">Create One</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
