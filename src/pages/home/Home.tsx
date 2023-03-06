import React from "react";
import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductCollection,
  Partners
} from '../../components'
import { Row, Col, Typography } from 'antd'
import styles from './index.module.less';
import { productList1, productList2, productList3 } from './mockups'
import sideImage1 from '../../assets/Images/product1.png'
import { useTranslation } from 'react-i18next'
import { getDataActionCreator } from "../../redux/recommendProducts/recommendProductsActions";

export const Home: React.FC = () => {
  const { Title } = Typography
  const { t } = useTranslation()

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
          products={productList1}
        />
        <ProductCollection
          title={<Title level={3} type="danger">{t('home_page.new_arrival')}</Title>}
          sideImage={sideImage1}
          products={productList2}
        />
        <ProductCollection
          title={<Title level={3} type="success">{t('home_page.domestic_travel')}</Title>}
          sideImage={sideImage1}
          products={productList3}
        />
        <Partners />
      </div>
      <Footer></Footer>
    </>
  )
}