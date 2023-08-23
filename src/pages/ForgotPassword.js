import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { email } = useParams(); 

  const [loading, setLoading] = useState(false);

  const submitHandler = (values) => {
    try {


      setLoading(true);
      const storedUser = JSON.parse(localStorage.getItem('user'));
      

      if (storedUser && storedUser.email === values.email) {
      
        // Update the password for the matched email
        storedUser.password = values.password;
        localStorage.setItem('user', JSON.stringify(storedUser));
        message.success('Password updated successfully.');
        navigate('/login');
      } 
      else {
        message.error('Email not found.');
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error('Failed to update password.');
    }
  };

  return (
    <div className="reset-password-page">
      <Form layout="vertical" onFinish={submitHandler}>
        <h1>Reset Password</h1>
        <Form.Item label="Email" name="email">
          <Input type="email" />
        </Form.Item>
        <Form.Item label="New Password" name="password">
          <Input type="password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Update Password
        </Button>
      </Form>
    </div>
  );
};

export default ResetPassword;
