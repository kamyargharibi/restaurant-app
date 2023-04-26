import React, { useEffect } from 'react'
import * as Yup from 'yup'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Login.css'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

export default function Login() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid Email').required('*Required .'),
      password: Yup.string().min(8, 'too short your password').required('*Required .')
    })
  });

    useEffect(() => {
      window.scrollTo(0, 0);
      AOS.init();
    }, [])

  return (
    <>
      <div className="App">
        <div className='loginBox' data-aos="zoom-in">
          <form className='LogRegForm' onSubmit={formik.handleSubmit}>
            <div className="itemLogReg">
              <label htmlFor="email">Email</label>
              <input type="email" id='email' {...formik.getFieldProps('email')} />
              {formik.touched.email && formik.errors.email ? (
              <span> {formik.errors.email} </span>
              ) : null}
            </div>

            <div className="itemLogReg">
              <label htmlFor="password">Password</label>
              <input type="password" id='password' {...formik.getFieldProps('password')} />
              {formik.touched.password && formik.errors.password ? (
              <span> {formik.errors.password} </span>
              ) : null}
            </div>

            <div className="submitBtn">
              <button className='upinBtn' type="submit">Login</button>
              <Link className='formLinkItem' to='/forgetpassword'>Forget password?</Link>
            </div>

            <div className="formLinks">
              <Link className='formLinkItem' to='/register'>Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
