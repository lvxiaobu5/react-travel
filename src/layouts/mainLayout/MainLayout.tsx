import React from "react";
import styles from './index.module.less'
import { useTranslation } from 'react-i18next'
import { Header, Footer } from "../../components";

export const MainLayout: React.FC<any> = ({ children }) => {
  

  return (
    <div>
      <Header />
      <div className={styles["page-content"]}>
        {children}
      </div>
      <Footer />
    </div>
  )
}