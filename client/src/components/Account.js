import React,  {useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';

import * as yup from "yup";


function Account({currentCustomer, setCurrentCustomer, onLogout, onDeleteAccount}) {
  
    const navigate = useNavigate();

    const [email, setEmail]=useState('');
    const [password, setPassword]=  useState('');
    const [firstname, setFirstName]=useState('');
    const [lastname, setLastName]=  useState('');
    const [address, setAddress]=  useState('');
    const [phone, setPhone]=  useState('');

  const formik = useFormik({
    initialValues: {
        firstname: currentCustomer.firstname,
        lastname: currentCustomer.lastname,
        email: currentCustomer.email,
        phone: currentCustomer.phone,
        address: currentCustomer.address,
        password: currentCustomer.password
    },
    validationSchema: yup.object({
        email: yup.string().email("Invalid email").required("Must enter email"),
        firstname: yup.string().required("Must enter a first name").max(15, 'must be 15 chars max'),
        lastname: yup.string().required("Must enter a  last name").max(15, 'must be 15 chars max'),
        address: yup.string().required("Must enter a street address").max(200, 'must be 200 chars max'),
        phone: yup.number().integer().required("phone number required").typeError("Phone number should only contain digits"),
        password: yup.string().required("please enter a password"),
    }),
  onSubmit: values => {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values, null, 2)
    };
    fetch(`http://127.0.0.1:5555/customers/${currentCustomer.id}`, requestOptions)
        .then(r => r.json())
        .then(updatedUser => setCurrentCustomer(updatedUser))
        .then(navigate("/account"))
  },
  });

  
    return (
        <div>
          <h1>hello account</h1>
          <div>
                <h2><b>Logged in as:</b></h2>
            </div>
            <br/>
            <div>Name: {currentCustomer.firstname} {currentCustomer.lastname}</div>
            <div>Email: {currentCustomer.email}</div>
            <div>Phone: {currentCustomer.phone}</div>
            <div>Address: {currentCustomer.address}</div>
          
            <ul>
              <li>
              <button onClick={onLogout}>Log Out</button>
              </li>
              <li>
              <button >View purchase history</button>
              </li>
              
                  <form onSubmit={formik.handleSubmit}>

                      <label htmlFor ="firstname">First Name</label>
                      <input onChange={formik.handleChange} value={formik.values.firstname}type = "text" placeholder="first name" id ="firstname" name="firstname"></input>
                      {formik.touched.firstname && formik.errors.firstname ? (
                              <div>{formik.errors.firstname}</div>
                          ) : null}

                      <label htmlFor ="lastname">Last Name</label>
                      <input onChange={formik.handleChange} value={formik.values.lastname}  type = "text" placeholder="last name" id ="lastname" name="lastname"></input>
                      {formik.touched.lastname && formik.errors.lastname ? (
                              <div>{formik.errors.lastname}</div>
                          ) : null}

                      <label htmlFor ="address">Address</label>
                      <input onChange={formik.handleChange} value={formik.values.address}  type = "text" placeholder="address" id ="address" name="address"></input>
                      {formik.touched.address && formik.errors.address ? (
                              <div>{formik.errors.address}</div>
                          ) : null}

                      <label htmlFor ="phone">Phone</label>
                      <input onChange={formik.handleChange} value={formik.values.phone} type = "text" placeholder="phone" id ="phone" name="phone"></input>
                      {formik.touched.phone && formik.errors.phone ? (
                              <div>{formik.errors.phone}</div>
                          ) : null}

                      <label htmlFor ="email">Email</label>
                      <input onChange={formik.handleChange} value={formik.values.email}type = "email" placeholder="email" id ="email" name="email"></input>
                      {formik.touched.email && formik.errors.email ? (
                              <div>{formik.errors.email}</div>
                          ) : null}

                      <label fhtmlFor ="password">Password</label>
                      <input onChange={formik.handleChange} value={formik.values.password}type = "password" placeholder="***********" id ="password" name="password"></input>
                      {formik.touched.password && formik.errors.password ? (
                              <div>{formik.errors.password}</div>
                          ) : null}

                          <button type='submit'>Update information</button>

                      
                  </form>
                
              <li>
                <br></br>
                <br></br>
              <button onClick={onDeleteAccount}  >Delete Account</button>
              </li>
            </ul>
          
        </div>
  );
}
export default Account;





