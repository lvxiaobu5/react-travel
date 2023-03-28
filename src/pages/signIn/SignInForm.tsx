import React, { useEffect } from 'react';
import styles from './index.module.less'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { signIn } from '../../redux/user/slice';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';

export const SignInForm: React.FC = () => {
  const loading = useSelector(s => s.user.loading)
  const jwt = useSelector(s => s.user.token)
  const error = useSelector(s => s.user.error)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (jwt !== null) {
      navigate(`/`)
    }
  }, [jwt])

  const onFinish = (values: any) => {
    dispatch(signIn({
      email: values.username,
      password: values.password
    }))
  };
  
  const onFinishFailed = (errorInfo: any) => {};

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles["signIn-form"]}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button loading={loading} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}