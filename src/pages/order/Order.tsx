import React from "react";
import styles from './index.module.less'
import { PaymentForm, CheckOutCard } from "../../components";
import { MainLayout } from "../../layouts";
import { Row, Col } from "antd";

export const Order: React.FC = () => {
  

  return (
    <MainLayout>
      <Row>
        <Col span={12}>
          {/* 信用卡支付组件 */}
          <PaymentForm />
        </Col>
        <Col span={12}>
          {/* 订单的摘要 */}
          {/* <CheckOutCard /> */}
        </Col>
      </Row>
    </MainLayout>
  )
}