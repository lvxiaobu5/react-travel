import React from "react";
import styles from './index.module.less'
import { Image, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

interface PropsType {
  id: string | number;
  size: 'large' | 'small';
  imageSrc: string;
  price: number | string;
  title: string;
}

export const ProductImage:React.FC<PropsType> = (props) => {
  const { id, size, imageSrc, price, title } = props
  const { Text } = Typography
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`detail/${id}`)}>
      {size === "large" ? (
        <Image src={imageSrc} width={490} height={285}></Image>
      ) : (
        <Image src={imageSrc} width={240} height={120}></Image>
      )}
      <div>
        <Text type="secondary">{title.slice(0, 25)}</Text>
        <Text type="danger" strong>￥ {price} 起</Text>
      </div>
    </div>
  )
}