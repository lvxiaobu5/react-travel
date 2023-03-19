import React from "react";
import { useParams } from 'react-router-dom'
import { UserLayout } from "../../layouts";

export const SignIn:React.FC = (props) => {
  const params = useParams()

  return (
    <UserLayout>
      <h1>登录页面</h1>
    </UserLayout>
  )
}