import React from "react";
import styles from './index.module.less'
import { MainLayout } from "../../layouts";
import { Row, Col, Affix } from 'antd'
import { ProductList, PaymentCard } from "../../components";

export const ShoppingCart: React.FC = () => {
  

  return (
    <MainLayout>
      <Row>
        {/* 购物车清单 */}
        <Col span={16}>
          <div className={styles["product-list-container"]}>
            {/* <ProductList /> */}
          </div>
        </Col>
        {/* 支付卡组件 */}
        <Col span={8}>
          <Affix>
            <div className={styles["payment-card-container"]}>
              {/* <PaymentCard /> */}
            </div>
          </Affix>
        </Col>
      </Row>
    </MainLayout>
  )
}