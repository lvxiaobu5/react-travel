import React from "react";
import { useParams } from 'react-router-dom'
import { UserLayout } from "../../layouts";
import { SignInForm } from "./SignInForm";

export const SignIn:React.FC = (props) => {
  const params = useParams()

  return (
    <UserLayout>
      <SignInForm />
    </UserLayout>
  )
}