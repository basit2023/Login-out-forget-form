import React, { useState, useEffect } from 'react';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submitHandler = (values) => {
    try {
    localStorage.setItem('user', JSON.stringify(values));
    
      
      message.success('Registration Successful');
      navigate('/login');
    } catch (error) {
      message.error('Something went wrong!!');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/register');
    }
  }, [navigate]);

  return (
    <>
      <div className="register-page">
        <Form layout="vertical" onFinish={submitHandler}>
          <h1>Register Form</h1>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link className="reg" to="/login">Already Registered? Click here to login</Link>
            <button className="btn btn-primary" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;
