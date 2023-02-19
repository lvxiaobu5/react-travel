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

export class Home extends React.Component {
  render() {
    const { Title } = Typography

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
            title={<Title level={3} type="warning">爆款推荐</Title>}
            sideImage={sideImage1}
            products={productList1}
          />
          <ProductCollection
            title={<Title level={3} type="danger">新品上市</Title>}
            sideImage={sideImage1}
            products={productList2}
          />
          <ProductCollection
            title={<Title level={3} type="success">国内游推荐</Title>}
            sideImage={sideImage1}
            products={productList3}
          />
          <Partners />
        </div>
        <Footer></Footer>
      </>
    )
  }
}