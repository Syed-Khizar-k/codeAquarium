import * as Yup from "yup";

// law_schema
export const contactUs_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  number: Yup.string().required().min(11).label("Number"),
  email: Yup.string().required().email().label("Email"),
  subject: Yup.string().required().label("Subject"),
  massage: Yup.string().required().min(20).label("Message"),
});
// blog_schema
export const blog_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  subject: Yup.string().required().label("Subject"),
  massage: Yup.string().required().min(20).label("Message"),
});

// contact_schema
export const contact_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  subject: Yup.string().required().email().label("Subject"),
  message: Yup.string().required().min(20).label("Message")
});
export const comment_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  comments: Yup.string().required().email().label("Subject"),
  website: Yup.string().required().min(20).label("Website")
});

export const register_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

export const login_schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

