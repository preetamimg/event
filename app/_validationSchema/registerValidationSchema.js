import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  first_name: Yup.string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters")
    .required("First name is required"),
  
  last_name: Yup.string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot exceed 50 characters")
    .required("Last name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password cannot exceed 20 characters")
    .required("Password is required"),

  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),

  country_code: Yup.string()
    .matches(/^\+\d{1,4}$/, "Invalid country code")
    .required("Country code is required"),

  mobile_no: Yup.string()
    .matches(/^\d{7,15}$/, "Invalid mobile number")
    .required("Mobile number is required"),

  company: Yup.string()
    .trim()
    .max(100, "Company name cannot exceed 100 characters")
    .required("Company name is required"),
});
