import React,{useState,useEffect} from 'react'
import {Form, Input,message} from 'antd'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const navigate=useNavigate()
    const submitHandler=async (values)=>{
        console.log('Entered Values:', values);
    try{
           
      const storedUser = JSON.parse(localStorage.getItem('user'));
      console.log('Stored User:', storedUser);
      if (storedUser && storedUser.email === values.email && storedUser.password === values.password) {
        
        message.success('Login success');
        navigate('/');
      } else {
        message.error('Invalid email or password');
      }
        
           
        }catch(error){
            message.success("Something went wrong!!")
        }
    }
    //prevent for login user
    // useEffect(()=>{
    //     if(localStorage.getItem('user')){
    //         navigate('/')
    //     }
    // },[navigate]);
  return (
    <>
    <div className='register-page'>
    
        <Form layout='vartical' onFinish={submitHandler}>
            <h1>Login Form</h1>
            <Form.Item label="Email" name="email">
                <Input type='email'/>
            </Form.Item>
            <Form.Item label="Password" name="password">
                <Input type='password'/>
            </Form.Item>
            <div className='d-flex justify-content-between'>
                <Link className="log" to='/register'>Not a User ? Cleck here to Register</Link>
                <button className='btn btn-primary'>Login</button>
            </div>
            <div>
            <Link className='d-flex justify-content-between' to="/forgot-password">Forgot Password</Link>
            </div>
        </Form>
     </div>
    
    </>
  )
}

export default Login