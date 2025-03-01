"use client"

import useLogin from '@/app/_hooks/useLogin';
import { Eye, Sparkle } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import Form from 'react-bootstrap/Form';


const Login = () => {
  const formik = useLogin()
  return (
    <>
      <div className="h-100 authPage d-flex flex-column justify-content-lg-center align-items-center">
        <Sparkle strokeWidth={2} className='starIcon'/>
        <div className="wlcmTxt">Welcome Back</div>
        <div className="detailTxt mb-4">Please enter your details</div>
        <form className='w-100' onSubmit={formik?.handleSubmit}>
          <div className="customInput">
            <input 
                type="email" 
                name='email'
                id='email'
                placeholder='Email'
                value={formik?.values?.email || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-control ${formik.touched.email && formik.errors.email ? 'inputError' : ''}`}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="errorText">{formik.errors.email}</div>
              )}
          </div>
            <div className="customInput">
              <div className="position-relative">
              <input 
                type="text" 
                name='password'
                id='password'
                placeholder='Password'
                value={formik?.values?.password || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-control ${formik.touched.password && formik.errors.password ? 'inputError' : ''}`}
              />
                <div className="eyeIcon">
                  <Eye size={16} />
                </div>
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="errorText">{formik.errors.password}</div>
              )}
            </div>
          <div className="d-flex align-items-center justify-content-between">
            <Form.Check // prettier-ignore
              type={'checkbox'}
              id={`rememberMe`}
              label={`Remember Me`}
              className='customCheckbox'
            />
          </div>
          <button type='submit' className='commonBtn w-100 mt-3'>Login</button>
        </form>
        <div className="detailTxt mt-3">
          Don't have an account?
          <Link className='ps-2' href='/register'>Sign up</Link>
        </div>
      </div>
    </>
  )
}

export default Login