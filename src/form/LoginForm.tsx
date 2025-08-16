"use client";
import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
// internal
import { login_schema } from "@/utils/validation-schema";
import UserThree from "@/svg/UserThree";
import ErrorMsg from "./ErrorMsg";
import LockIcon from "@/svg/LockIcon";
const LoginForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: login_schema,
      onSubmit: (values, { resetForm }) => {
        resetForm();
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="login__input-wrapper">
        <div className="login__input-item">
          <div className="login__input">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Enter Your Email"
              id="email"
            />
            <span>
              <UserThree />
            </span>
          </div>
          {touched.email && <ErrorMsg error={errors.email} />}
        </div>

        <div className="login__input-item">
          <div className="login__input-item-inner p-relative">
            <div className="login__input">
              <input
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Password"
                id="password"
              />
              <span>
                <LockIcon/>
              </span>
            </div>
          </div>
          {touched.password && <ErrorMsg error={errors.password} />}
        </div>
      </div>

      <div className="login__option mb-25 d-sm-flex justify-content-between">
        <div className="login__remember">
          <input type="checkbox" id="tp-remember" />
          <label htmlFor="tp-remember">Remember me</label>
        </div>
        <div className="login__forgot">
          <Link href="/forgot-password" className="text-warning">forgot password?</Link>
        </div>
      </div>
      <div className="login__btn text-center">
        <Link className="btn" href="/">
          <span className="btn-text">
            Sign In <i className="fas fa-long-arrow-alt-right"></i>
          </span>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
