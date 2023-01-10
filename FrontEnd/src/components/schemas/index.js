import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required*"),
  password: yup.string().required("Required*"),
});

export const RegisterSchema = yup.object().shape({
  firstname: yup.string().required("Required*"),
  lastname: yup.string().required("Required*"),
  email: yup.string().email("Please enter a valid email").required("Required*"),
  password: yup.string().required("Required*"),
});
