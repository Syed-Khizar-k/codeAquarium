"use client";
import { comment_schema } from "@/utils/validation-schema";
import React from "react";
import { useFormik } from "formik";
import ErrorMsg from "@/form/ErrorMsg";

const BlogCommentsForm = () => {
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        comments: "",
        website: "",
      },
      validationSchema: comment_schema,
      onSubmit: (values, { resetForm }) => {
        resetForm();
      },
    });

  return (
    <>
      <div className="post-comments-form">
        <div className="post-comments-title">
          <h2>Post Comments 01</h2>
        </div>
        <form id="contacts-form" className="conatct-post-form" action="#">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-icon contacts-message">
              <textarea
                name="comments"
                id="comments"
                cols={30}
                rows={10}
                defaultValue={values.comments}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Write comments"
              ></textarea>
              <span>
                <i className="fas fa-pencil-alt"></i>
              </span>
              {touched.comments && <ErrorMsg error={errors.comments} />}
              </div>
            </div>
            <div className="col-xl-12">
              <div className="contact-icon contacts-name">
                <input
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Name Here ..."
                  id="email"
                />
                <span>
                  <i className="fas fa-user"></i>
                </span>
                {touched.name && <ErrorMsg error={errors.name} />}
              </div>
            </div>
            <div className="col-xl-12">
              <div className="contact-icon contacts-email">
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange} 
                onBlur={handleBlur}
                placeholder="Email Here ..."
              />
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              {touched.email && <ErrorMsg error={errors.email} />}
              </div>
            </div>
            <div className="col-xl-12">
              <div className="contact-icon contacts-website">
              <input
                type="text"
                name="website"
                value={values.website}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="website"
              />
              <span>
                <i className="fas fa-chevron-down"></i>
              </span>
              {touched.website && <ErrorMsg error={errors.website} />}
              </div>
            </div>
            <div className="col-xl-12">
              <button className="btn" type="submit">
                {" "}
                <span className="btn-text">
                  Post comment <i className="far fa-long-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BlogCommentsForm;
