"use client"
import React from "react";
import { useFormik } from "formik";
import { register_schema } from "@/utils/validation-schema";
import UserThree from "@/svg/UserThree";
import ErrorMsg from "./ErrorMsg";
import Email from "@/svg/email";
import Link from "next/link";
import LockIcon from "@/svg/LockIcon";


const RegisterForm = () => {
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      },
      validationSchema: register_schema,
      onSubmit: (values, { resetForm }) => {
        resetForm();

      }
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="login__input-wrapper">
        <div className="login__input-item">
          <div className="login__input">
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Enter your name"
              id="name"
              required
            />
            <span>
              <UserThree />
            </span>
          </div>
          {touched.name && <ErrorMsg error={errors.name} />}
        </div>
        <div className="login__input-item">
          <div className="login__input">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Enter your email"
              id="email"
              required
            />
            <span>
              <Email/>
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
                required
              />
              <span>
                <LockIcon />
              </span>
            </div>
          </div>
          {touched.password && <ErrorMsg error={errors.password} />}
        </div>

        <div className="login__input-item">
          <div className="login__input-item-inner p-relative">
            <div className="login__input">
              <input
                name="passwordConfirmation"
                value={values.passwordConfirmation}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Confirm Password"
                id="passwordConfirmation"
                required
              />
              <span>
                <LockIcon />
              </span>
            </div>
          </div>
          {touched.passwordConfirmation && (
            <ErrorMsg error={errors.passwordConfirmation} />
          )}
        </div>
      </div>
      <div className="login__option mb-25 d-sm-flex justify-content-between align-items-center">
        <div className="login__remember">
          <input type="checkbox" id="tp-remember" />
          <label htmlFor="tp-remember">Remember me</label>
        </div>
      </div>
      <div className="login__btn text-center">
      <div className="login__btn text-center">
        <Link className="btn" href="/login">
          <span className="btn-text">
            Sign Up <i className="fas fa-long-arrow-alt-right"></i>
          </span>
        </Link>
      </div>
      </div>
    </form>
  );
};

export default RegisterForm;
