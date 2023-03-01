import React from "react";
import styles from './index.module.less'
import { Divider, Row, Col, Image } from "antd";
import { useTranslation } from 'react-i18next'

import partner1 from '../../assets/Images/partner1.png'
import partner2 from '../../assets/Images/partner2.png'
import partner3 from '../../assets/Images/partner3.png'
import partner4 from '../../assets/Images/partner4.png'

// 首页合作企业
export const Partners: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles["partners"]}>
      <Divider orientation="left">
        <span className={styles["partnerText"]}>{t('home_page.joint_venture')}</span>
      </Divider>
      <Row>
        <Col span={6}>
          <Image className={styles["partnerImg"]} src={partner1} preview={false} />
        </Col>
        <Col span={6}>
          <Image className={styles["partnerImg"]} src={partner2} preview={false} />
        </Col>
        <Col span={6}>
          <Image className={styles["partnerImg"]} src={partner3} preview={false} />
        </Col>
        <Col span={6}>
          <Image className={styles["partnerImg"]} src={partner4} preview={false} />
        </Col>
      </Row>
    </div>
  )
}