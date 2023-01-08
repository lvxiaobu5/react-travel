import React from "react";
import { Layout, Typography } from 'antd';
import styles from './index.module.less'

export const Footer: React.FC = () => {
  const { Footer } = Layout;
  const { Title } = Typography;

  return (
    <Footer className={styles["footer"]}>
      <Title level={3} style={{textAlign: "center"}}>版权所有 @ React旅游网</Title>
    </Footer>
  )
}