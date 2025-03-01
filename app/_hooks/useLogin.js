"use client"

import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { API_ENDPOINT } from '../_constant/apiConstants';
import { postAPI } from '../_services/apiInstance';
import { loginValidationSchema } from '../_validationSchema/loginValidationSchema';

const useLogin = () => {

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await postAPI(API_ENDPOINT.AUTH.LOGIN, values);
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
    validationSchema: loginValidationSchema,
    onSubmit,
  });

  return formik;
}

export default useLogin