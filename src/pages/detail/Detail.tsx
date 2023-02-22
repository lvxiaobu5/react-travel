import React from "react";
import { useParams } from 'react-router-dom'

export const Detail:React.FC = () => {
  const params = useParams()
  console.log(2, params)

  return (
    <h1>旅游路线详情页面，路线ID：{params.touristRouteId}</h1>
  )
}