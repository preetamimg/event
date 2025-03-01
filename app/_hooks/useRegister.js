"use client"

import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { API_ENDPOINT } from '../_constant/apiConstants';
import { registerValidationSchema } from '../_validationSchema/registerValidationSchema';
import { postAPI } from '../_services/apiInstance';

const useRegister = () => {

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    country_code: "+91",
    mobile_no: "",
    company: "",
  };

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await postAPI(API_ENDPOINT.AUTH.REGISTER, values);
      if(response?.data?.status === 'success') {
        sessionStorage.setItem("user_data", JSON.stringify(values));
        toast.success(response?.data?.message)
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
    } finally {
      setSubmitting(false);
    }
  };

  // Initialize Formik with initial values, validation schema, and submit handler.
  const formik = useFormik({
    initialValues,
    validationSchema: registerValidationSchema,
    onSubmit,
  });

  return formik;
}

export default useRegister