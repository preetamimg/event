import { Eye, Sparkle } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const Login = () => {
  return (
    <>
      <div className="h-100 authPage d-flex flex-column justify-content-center align-items-center">
        <Sparkle strokeWidth={2} className='starIcon'/>
        <div className="wlcmTxt">Welcome Back</div>
        <div className="detailTxt mb-4">Please enter your details</div>
        <form className='w-100'>
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
          <div className="d-flex align-items-center justify-content-between">
            <Form.Check // prettier-ignore
              type={'checkbox'}
              id={`rememberMe`}
              label={`Remember Me`}
              className='customCheckbox'
            />
          </div>
          <button className='commonBtn w-100 mt-3'>Login</button>
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