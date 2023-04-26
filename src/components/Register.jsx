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
      fullName: '',
      tel: '',
      address: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(3, 'Too short !').required('* Required.'),
      tel: Yup.number().min(12, 'Too short !').required('* Required.'),
      address: Yup.string().min(5, 'Too short !').required('* Required.'),
      email: Yup.string().email('Invalid Email').required('* Required.'),
      password: Yup.string().min(8, 'too short your password').max(32, 'max 32 character for passowrd.').required('* Required.')
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
              <label htmlFor="fullName">Full Name</label>
              <input type="fullName" id='fullName' {...formik.getFieldProps('fullName')} />
              {formik.touched.fullName && formik.errors.fullName ? (
              <span> {formik.errors.fullName} </span>
              ) : null}
            </div>

            <div className="itemLogReg">
              <label htmlFor="tel">Phone Number</label>
              <input type="tel" id='tel' placeholder='exp: (301) 274-4021' {...formik.getFieldProps('tel')} />
              {formik.touched.tel && formik.errors.tel ? (
              <span> {formik.errors.tel} </span>
              ) : null}
            </div>

            <div className="itemLogReg">
              <label htmlFor="address">Home Address</label>
              <input type="address" id='address' placeholder='6958 Oak Glen Dr, Hughesville, MD, 20637' {...formik.getFieldProps('address')} />
              {formik.touched.address && formik.errors.address ? (
              <span> {formik.errors.address} </span>
              ) : null}
            </div>

            <div className="itemLogReg">
              <label htmlFor="email">Email</label>
              <input type="email" id='email' {...formik.getFieldProps('email')} />
              {formik.touched.email && formik.errors.email ? (
              <span> {formik.errors.email} </span>
              ) : null}
            </div>

            <div className="itemLogReg">
              <label htmlFor="password">Password</label>
              <input type="password" id='password' placeholder='**************' {...formik.getFieldProps('password')} />
              {formik.touched.password && formik.errors.password ? (
              <span> {formik.errors.password} </span>
              ) : null}
            </div>

            <div className="submitBtn">
              <button className='upinBtn' type="submit">Sing Up</button>
              <div className="formLinks">
                <Link className='formLinkItem' to='/login'>Log In</Link>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}
