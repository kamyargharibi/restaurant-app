import React, { useEffect, useState } from "react";
import PizzaLeft from "../assets/images/pizzaLeft.jpg";
import { useFormik } from "formik";
import * as Yup from 'yup'
import emailjs from '@emailjs/browser';
import "../assets/styles/Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Contact() {

  const [buttonState, setButtonState] = useState('Send Message');

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      try{
        emailjs.send('service_g0l71cq', 'template_1e72ilc', values, 'LRb8j5w-JXmQK6fRm')
        .then(() => {
        setButtonState('Send Email');
        });
      }
      catch {
        setButtonState('Send Email');
      }
      resetForm();
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(3, 'Too short !').required('* Required.'),
      email: Yup.string().email('Invalid Email !').required('* Required.'),
      subject: Yup.string().min(3, 'Too short !').required('* Required.'),
      message: Yup.string().min(3, 'Too short !').max(500, 'Max characters for type 500').required('* Required.')
    }),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
    emailjs.init('LRb8j5w-JXmQK6fRm');
  }, []);

  return (
    <div className="contact">
      <div
        data-aos="fade-right"
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div data-aos="fade-left" className="rightSide">
        <h1>Contact Us</h1>
        <form className="contactForm" onSubmit={formik.handleSubmit}>
          <div className="contactFormItem">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              {...formik.getFieldProps('fullName')}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <span> {formik.errors.fullName} </span>
            ) : null}
          </div>

          <div className="contactFormItem">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <span> {formik.errors.email} </span>
            ) : null}
          </div>

          <div className="contactFormItem">
            <label htmlFor="subject">Subject</label>
            <input
              type="subject"
              id="subject"
              {...formik.getFieldProps('subject')}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <span> {formik.errors.subject} </span>
            ) : null}
          </div>

          <div className="contactFormItem">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Enter message..."
              rows="6"
              {...formik.getFieldProps('message')}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <span> {formik.errors.message} </span>
            ) : null}
          </div>
          
          <div className="contactFormButton">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}
