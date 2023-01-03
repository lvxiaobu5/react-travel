import React from "react";
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';

export const Footer: React.FC = () => {
  const { Footer } = Layout;
  const { Title } = Typography;

  return (
    <Footer>
      <Title level={3} style={{textAlign: "center"}}>版权所有 @ 携程旅游网</Title>
    </Footer>
  )
}