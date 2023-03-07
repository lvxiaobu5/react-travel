import React, { useEffect, useState } from "react";
import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductCollection,
  Partners
} from '../../components'
import { Row, Col, Typography, Spin } from 'antd'
import styles from './index.module.less';
import { productList1, productList2, productList3 } from './mockups'
import sideImage1 from '../../assets/Images/product1.png'
import { useTranslation } from 'react-i18next'
import { getDataActionCreator } from "../../redux/recommendProducts/recommendProductsActions";
import axios from "axios";
import url from "../../service";

export const Home: React.FC = () => {
  const [productList, setProductList] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { Title } = Typography
  const { t } = useTranslation()
  useEffect(() => {
    axios.get(`${url}/productCollections`).then(({data}) => {
      setProductList(data)
      setLoading(false)
    })
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
    <>
      <Header></Header>
      <div className={styles["page-content"]}>
        <Row>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductCollection
          title={<Title level={3} type="warning">{t('home_page.hot_recommended')}</Title>}
          sideImage={sideImage1}
          products={productList[0].touristRoutes}
        />
        <ProductCollection
          title={<Title level={3} type="danger">{t('home_page.new_arrival')}</Title>}
          sideImage={sideImage1}
          products={productList[1].touristRoutes}
        />
        <ProductCollection
          title={<Title level={3} type="success">{t('home_page.domestic_travel')}</Title>}
          sideImage={sideImage1}
          products={productList[2].touristRoutes}
        />
        <Partners />
      </div>
      <Footer></Footer>
    </>
  )
}