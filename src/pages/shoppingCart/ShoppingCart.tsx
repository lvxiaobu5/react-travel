import React from "react";
import styles from './index.module.less'
import { MainLayout } from "../../layouts";
import { Row, Col, Affix } from 'antd'
import { ProductList, PaymentCard } from "../../components";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/hooks";
import { clearShoppingCart, checkout } from "../../redux/shoppingCart/slice";
import { useNavigate } from "react-router-dom";

export const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loading = useSelector(s => s.shoppingCart.loading)
  const shoppingCartItems = useSelector(s => s.shoppingCart.items)
  const jwt = useSelector(s => s.user.token)

  const handlePay = () => {
    if (shoppingCartItems.length <= 0) return
    dispatch(checkout(jwt))
    navigate(`/order`)
  }
  const handleClearCart = () => {
    dispatch(clearShoppingCart({jwt, itemIds: shoppingCartItems.map(s => s.id)}))
  }

  return (
    <MainLayout>
      <Row>
        {/* 购物车清单 */}
        <Col span={16}>
          <div className={styles["product-list-container"]}>
            <ProductList data={shoppingCartItems.map(s => s.touristRoute)} />
          </div>
        </Col>
        {/* 支付卡组件 */}
        <Col span={8}>
          <Affix>
            <div className={styles["payment-card-container"]}>
              <PaymentCard
                loading={loading}
                originalPrice={
                  // 下面报错很常见，空数组调用reduce会报错
                  shoppingCartItems.length && shoppingCartItems
                    .map(s => s.originalPrice)
                    .reduce((a, b) => a + b)
                }
                price={
                  shoppingCartItems.length && shoppingCartItems
                    .map(s => s.originalPrice * (s.discountPresent ? s.discountPresent : 1))
                    .reduce((a, b) => a + b)
                }
                onCheckout={handlePay}
                onShoppingCartClear={handleClearCart}
              />
            </div>
          </Affix>
        </Col>
      </Row>
    </MainLayout>
  )
}