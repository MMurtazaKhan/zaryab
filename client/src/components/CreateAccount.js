import React, { useState } from "react"
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';

function CreateAccount({currentCustomer, setCurrentCustomer}){
    
    const navigate = useNavigate();

    const [email, setEmail]=useState('');
    // const [password, setPassword]=  useState('');
    // const [firstname, setFirstName]=useState('');
    // const [lastname, setLastName]=  useState('');
    // const [address, setAddress]=  useState('');
    // const [phone, setPhone]=  useState('');
    


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(email)
    }
    
    const formik = useFormik({
        initialValues: {
            firstname:'',
            lastname: '',
            email: '',
            phone:'',
            address: '',
            password: ''
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
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values, null, 2)
        };
        fetch('http://localhost:5555/customers', requestOptions)
            .then(navigate('/login'))
            
    },
});

    return ( 
        <>
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
               
                <button type="submit">Create Account</button>
          
                <div>  
                Already have an Account?<a href="/login" >Log in here</a>
                </div>
            </form>
            
        </>
    )
}

export default CreateAccount;