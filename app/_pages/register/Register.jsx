import { Eye, Sparkle } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const Register = () => {
  return (
    <>
      <div className="h-100 authPage d-flex flex-column justify-content-lg-center align-items-center">
        <Sparkle strokeWidth={2} className='starIcon'/>
        <div className="wlcmTxt">Create Account</div>
        <div className="detailTxt mb-4">Please enter your details</div>
        <form className='w-100'>
          <div className="customInput">
            {/* <label htmlFor="email" className='form-label'>Email</label> */}
            <input type="text" className='form-control' placeholder='Name'/>
          </div>
          <div className="customInput">
            {/* <label htmlFor="email" className='form-label'>Email</label> */}
            <input type="email" className='form-control' placeholder='Email'/>
          </div>
          <div className="customInput">
            {/* <label htmlFor="email" className='form-label'>Password</label> */}
            <div className="position-relative">
              <input type="password" className='form-control' placeholder='Password'/>
              <div className="eyeIcon">
                <Eye size={16} />
              </div>
            </div>
          </div>
          <div className="customInput">
            {/* <label htmlFor="email" className='form-label'>Password</label> */}
            <div className="position-relative">
              <input type="password" className='form-control' placeholder='Confirm Password'/>
              <div className="eyeIcon">
                <Eye size={16} />
              </div>
            </div>
          </div>
          <button className='commonBtn w-100 mt-3'>Register</button>
        </form>
        <div className="detailTxt mt-3">
            Already have an account?
          <Link className='ps-2' href='/login'>Login</Link>
        </div>
      </div>
    </>
  )
}

export default Register