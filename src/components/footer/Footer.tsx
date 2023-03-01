import React from "react";
import { Layout, Typography } from 'antd';
import styles from './index.module.less'
import { useTranslation } from 'react-i18next'

export const Footer: React.FC = () => {
  const { Footer } = Layout;
  const { Title } = Typography;
  const { t } = useTranslation()
  console.log(2, t('header.title'))

  return (
    <Footer className={styles["footer"]}>
      <Title level={3} style={{textAlign: "center"}}>{t('footer.detail')}</Title>
    </Footer>
  )
}