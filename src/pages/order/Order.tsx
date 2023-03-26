import React from "react";
import styles from './index.module.less'
import { PaymentForm, CheckOutCard } from "../../components";
import { MainLayout } from "../../layouts";
import { Row, Col } from "antd";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { placeOrder } from "../../redux/order/slice";

export const Order: React.FC = () => {
  const dispatch = useDispatch()
  const jwt = useSelector(s => s.user.token)
  const loading = useSelector(s => s.order.loading)
  const order = useSelector(s => s.order.currentOrder)

  const handlePay = () => {
    dispatch(placeOrder({jwt, orderId: order.id}))
  }

  return (
    <MainLayout>
      <Row>
        <Col span={12}>
          {/* 信用卡支付组件 */}
          <PaymentForm />
        </Col>
        <Col span={12}>
          {/* 订单的摘要 */}
          <CheckOutCard
            loading={loading}
            order={order}
            onCheckout={handlePay}
          />
        </Col>
      </Row>
    </MainLayout>
  )
}