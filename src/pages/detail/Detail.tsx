import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Spin, Row, Col, DatePicker, Divider, Typography, Anchor, Menu } from "antd";
import styles from './index.module.less'
import { Header, Footer, ProductIntro, ProductComments } from "../../components";
import { url } from "../../service";
import { commentMockData } from "./mockup";
import { productDetailSlice } from "../../redux/productDetail/slice";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { getProductDetail } from "../../redux/productDetail/slice";
import { MainLayout } from "../../layouts";

interface MatchParams {
  touristRouteId: string
}

const { RangePicker } = DatePicker;
const { Title } = Typography

export const Detail:React.FC = () => {
  // const params = useParams()
  const { touristRouteId } = useParams()
  const dispatch = useDispatch()
  // const [loading, setLoading] = useState<boolean>(true)
  // const [product, setProduct] = useState<any>(null)
  // const [error, setError] = useState<string | null>(null)
  const product = useSelector(state => state.productDetail.data)
  const loading = useSelector(state => state.productDetail.loading)
  const error = useSelector(state => state.productDetail.error)

// useEffect(() => {
//   const fetchData = async () => {
//     setLoading(true)
//     try {
//       const { data } = await axios.get(`${url}/touristRoutes/${touristRouteId}`)
//       console.log(1, data)
//       setProduct(data)
//       setLoading(false)
//     } catch (error: any) {
//       setError(error.message)
//       setLoading(false)
//     }
//   }
//   fetchData()
// }, [])
useEffect(() => {
  dispatch(getProductDetail(touristRouteId))
}, [])

  // 防止页面报错
  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%'
        }}
      ></Spin>
    )
  } else if (error) {
    return (<div>网站出错：{error}</div>)
  }

  return (
    <MainLayout>
      {/* 产品简介与日期选择 */}
      <div className={styles["product-intro-container"]}>
        <Row>
          <Col span={13}>
            <ProductIntro
              title={product.title}
              shortDescription={product.description}
              price={product.originalPrice}
              coupons={product.coupons}
              points={product.points}
              discount={product.price}
              rating={product.rating}
              pictures={product.touristRoutePictures}
            />
          </Col>
          <Col span={11}>
            <RangePicker open style={{marginTop: 20}} />
          </Col>
        </Row>
      </div>
      {/* 锚点菜单 */}
      <Anchor className={styles["product-detail-anchor"]}>
        <Menu mode="horizontal">
          <Menu.Item key={1}>
            <Anchor.Link href="#feature" title="产品特色"></Anchor.Link>
          </Menu.Item>
          <Menu.Item key={3}>
            <Anchor.Link href="#fees" title="费用"></Anchor.Link>
          </Menu.Item>
          <Menu.Item key={4}>
            <Anchor.Link href="#notes" title="预订须知"></Anchor.Link>
          </Menu.Item>
          <Menu.Item key={5}>
            <Anchor.Link href="#comments" title="用户评价"></Anchor.Link>
          </Menu.Item>
        </Menu>
      </Anchor>
      {/* 产品特色 */}
      <div id="feature" className={styles["product-detail-container"]}>
        <Divider orientation="center">
          <Title level={3}>产品特色</Title>
        </Divider>
        <div dangerouslySetInnerHTML={{__html: product.features}} style={{margin: 50}}></div>
      </div>
      {/* 费用 */}
      <div id="fees" className={styles["product-detail-container"]}>
        <Divider orientation="center">
          <Title level={3}>费用</Title>
        </Divider>
        <div dangerouslySetInnerHTML={{__html: product.fees}} style={{margin: 50}}></div>
      </div>
      {/* 预订须知 */}
      <div id="notes" className={styles["product-detail-container"]}>
        <Divider orientation="center">
          <Title level={3}>预订须知</Title>
        </Divider>
        <div dangerouslySetInnerHTML={{__html: product.notes}} style={{margin: 50}}></div>
      </div>
      {/* 用户评价 */}
      <div id="comments" className={styles["product-detail-container"]}>
        <Divider orientation="center">
          <Title level={3}>用户评价</Title>
        </Divider>
        <ProductComments data={commentMockData} />
      </div>
    </MainLayout>
  )
}