import React from "react";
import { useParams } from 'react-router-dom'

export const SignIn:React.FC = (props) => {
  const params = useParams()

  return (
    <h1>登录页面</h1>
  )
}