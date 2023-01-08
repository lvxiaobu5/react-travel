import React from 'react';
import { Header, Footer, SideMenu, Carousel } from './components'
import { Row, Col } from 'antd'
import styles from './App.module.less';

function App() {

  return (
    <div className={styles["App"]}>
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
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
