import React from "react";
import styles from './index.module.less'
import { Divider, Row, Col, Image } from "antd";

import partner1 from '../../assets/Images/partner1.png'
import partner2 from '../../assets/Images/partner2.png'
import partner3 from '../../assets/Images/partner3.png'
import partner4 from '../../assets/Images/partner4.png'

// 首页左侧导航菜单
export const Partners: React.FC = () => {
  return (
    <div className={styles["partners"]}>
      <Divider orientation="left">
        <span className={styles["partnerText"]}>合作企业</span>
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