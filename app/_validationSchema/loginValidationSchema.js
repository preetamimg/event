import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password cannot exceed 20 characters")
    .required("Password is required"),

});
