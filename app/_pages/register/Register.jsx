"use client"
import { countryCodes } from '@/app/_constant/countryCodes';
import useRegister from '@/app/_hooks/useRegister';
import { Eye, Sparkle } from 'lucide-react'
import Link from 'next/link';
import React from 'react'



const Register = () => {
  const formik = useRegister()
  return (
    <>
      <div className="h-100 authPage d-flex flex-column justify-content-xxl-center align-items-center">
        <Sparkle strokeWidth={2} className='starIcon' style={{minHeight : 24, minWidth : 24}}/>
        <div className="wlcmTxt">Create Account</div>
        <div className="detailTxt mb-4">Please enter your details</div>
        <form className='row mx-0 w-100' onSubmit={formik?.handleSubmit}>
          <div className="col-6">
            <div className="customInput">
              <input 
                type="text" 
                name='first_name'
                id='first_name'
                placeholder='First Name'
                value={formik?.values?.first_name || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-control ${formik.touched.first_name && formik.errors.first_name ? 'inputError' : ''}`}
              />
              {formik.touched.first_name && formik.errors.first_name && (
                <div className="errorText">{formik.errors.first_name}</div>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="customInput">
            <input 
                type="text" 
                name='last_name'
                id='last_name'
                placeholder='Last Name'
                value={formik?.values?.last_name || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-control ${formik.touched.last_name && formik.errors.last_name ? 'inputError' : ''}`}
              />
              {formik.touched.last_name && formik.errors.last_name && (
                <div className="errorText">{formik.errors.last_name}</div>
              )}
            </div>
          </div>
          <div className="col-12">
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
          </div>
          <div className="col-12">
            <div className="customInput">
              <div className="position-relative">
                <select
                    name='country_code'
                    id='country_code'
                    value={formik?.values?.country_code || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='contryCodeSelect'
                >
                  {
                    countryCodes?.map(item => (
                      <option key={item?.code} value={`+${item?.code}`}>
                        +{item?.code} { ' '} - {" "} {item?.country}
                      </option>
                    ))
                  }
                </select>
                <input 
                    style={{paddingLeft: 75}}
                    type="text" 
                    name='mobile_no'
                    id='mobile_no'
                    placeholder='Mobile Number'
                    value={formik?.values?.mobile_no || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`form-control ${formik.touched.mobile_no && formik.errors.mobile_no ? 'inputError' : ''}`}
                  />

              </div>
              {formik.touched.mobile_no && formik.errors.mobile_no && (
                <div className="errorText">{formik.errors.mobile_no}</div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="customInput">
            <input 
                type="text" 
                name='company'
                id='company'
                placeholder='Company'
                value={formik?.values?.company || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-control ${formik.touched.company && formik.errors.company ? 'inputError' : ''}`}
              />
              {formik.touched.company && formik.errors.company && (
                <div className="errorText">{formik.errors.company}</div>
              )}
            </div>
          </div>
          <div className="col-12">
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
          </div>
          <div className="col-12">
            <div className="customInput">
            <div className="position-relative">
              <input 
                type="text" 
                name='password_confirmation'
                id='password_confirmation'
                placeholder='Confirm Password'
                value={formik?.values?.password_confirmation || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`form-control ${formik.touched.password_confirmation && formik.errors.password_confirmation ? 'inputError' : ''}`}
              />
                <div className="eyeIcon">
                  <Eye size={16} />
                </div>
              </div>
              {formik.touched.password_confirmation && formik.errors.password_confirmation && (
                <div className="errorText">{formik.errors.password_confirmation}</div>
              )}
            </div>
          </div>
          <div className="col-12">
            <button type='submit' className='commonBtn w-100 mt-3'>Register</button>
          </div>
        </form>
        <div className="detailTxt my-3">
            Already have an account?
          <Link className='ps-2' href='/login'>Login</Link>
        </div>
      </div>
    </>
  )
}

export default Register