"use client";
import { contact_schema } from "@/utils/validation-schema";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short!").required("Name is required"),
  email: Yup.string()
    .email("Must be a valid email")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string()
    .min(10, "Message should be at least 10 characters")
    .required("Message is required"),
});

const ContactForm = () => { 
  

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    // onSubmit: (values, { resetForm }) => {
    //   console.log("Submitted Values:", values);
    //   alert("Message Sent Successfully!");
    //   resetForm();
    // },

    onSubmit: async (values, { resetForm }) => {
      try {
        // Fetch the CSRF token
        const tokenResponse = await axios.get(
          "https://nextorbit-drupal.asdev.tech/session/token"
        );
        const csrfToken = tokenResponse.data;

        // Headers for request
        const headers = {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        };

        // Send the request
        const response = await axios.post(
          "752eccf3-142a-4460-b4aa-76508b222f66",
          values,
          { headers }
        );

        console.log("Response:", response.data);
        toast.success("Message Sent Successfully! 🚀", {
          position: "top-right",
          autoClose: 3000, // Close after 3 seconds
        });
        resetForm();
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error:", error.message);
          alert("Failed to send the message. Please try again.");
        } else {
          toast.error("Unexpected error occurred!", {
            position: "top-right",
            autoClose: 3000,
          });
  
        }
      }
    },

  });





  return (
    <>
      <div className="contact-2-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
              <div className="section-title text-center ml-50 mr-50 mb-75">
                <span className="border-left-1"></span>
                <span>contact us</span>
                <span className="border-right-1"></span>
                <h1>{`Don't`} Hesitate To Contact Us</h1>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="appointment-wrapper contact-form-page">
              <form action="https://api.web3forms.com/submit" method="POST" id="appointment-form" onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-box user-icon mb-30">
                      <input type="hidden" name="access_key" value="752eccf3-142a-4460-b4aa-76508b222f66"></input>
                      <input
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Full Name"
                        className="w-full p-3 border rounded-lg"
                      />

                      <span>
                        <i className="fas fa-user"></i>
                      </span>
                      {formik.touched.name && formik.errors.name && (
                        <p className="text-danger text-sm">
                          {formik.errors.name}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-box email-icon mb-30">
                      <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Email"
                        className="w-full p-3 border rounded-lg"
                      />
                      <span>
                        <i className="fas fa-envelope"></i>
                      </span>
                      {formik.touched.email && formik.errors.email && (
                        <p className="text-danger text-sm">
                          {formik.errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12 mb-4">
                    <select
                      name="subject"
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-select w-100 p-3 border rounded"
                    >
                      <option value="" label="Select Subject" />
                      <option value="Web Development" label="Web Development" />
                       <option value="Agentic AI" label="Agentic AI" />
              <option value="Workflow Automation" label="Workflow Automation" />
                      <option
                        value="Artificial Inteligence"
                        label="Artificial Inteligence"
                      />
                      <option
                        value="Digital Marketing"
                        label="Digital Marketing"
                      />
                      <option value="DevOps Services" label="DevOps Services" />
                      <option value="Data Scraping" label="UI/UX Design" />
                      <option value="UI/UX Design" label="UI/UX Design" />
                    </select>
                    {formik.touched.subject && formik.errors.subject && (
                      <p className="text-danger text-sm">
                        {formik.errors.subject}
                      </p>
                    )}
                  </div>

                  <div className="col-lg-12">
                    <div className="form-box message-icon mb-30">
                      <textarea
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Write your message..."
                        className="w-full p-3 border rounded-lg"
                        rows={4}
                      ></textarea>
                      <span>
                        <i className="fas fa-pencil-alt"></i>
                      </span>
                      {formik.touched.message && formik.errors.message && (
                        <p className="text-danger text-sm">
                          {formik.errors.message}
                        </p>
                      )}
                    </div>
                    <div className="contact-btn">
                      <button className="btn" type="submit">
                        <span className="btn-text">
                          send message{" "}
                          <i className="fas fa-long-arrow-alt-righ"></i>
                        </span>{" "}
                        <span className="btn-border"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
