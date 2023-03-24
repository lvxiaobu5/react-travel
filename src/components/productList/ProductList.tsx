import React from "react";
import styles from './index.module.less'
import { Layout, Typography, Tag, Divider, Rate, Image, Pagination } from 'antd';
import { LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Sider, Content } = Layout;
const { Title, Text } = Typography

interface PropsType {
  data: {
    id: string;
    title: string;
    originalPrice: number;
    price: number;
    departureCity: string;
    travelDays: string;
    discount?: string;
    tripType: string;
    description: string;
    rating: number;
    touristRoutePictures: {
      id: number;
      url: string;
      touristRouteId: string;
    }[]
  }[];
  pagination?: {
    totalCount: number;
    currentPage: number;
    pageSize: number;
  };
  onPageChange?: (nextPage: number | string, pageSize: number | string) => void;
}

export const ProductList: React.FC<PropsType> = ({data, pagination, onPageChange}) => {
  

  return (
    <>
      {data.map((item) => (
        <Layout key={item.id} className={styles["layoutStyle"]}>
          <Content className={styles["contentStyle"]}>
            <Title>
              <Text delete>￥ {item.originalPrice} </Text>
              <Text type="danger">￥ {item.price} </Text>
              <Link to={`/detail/${item.id}`}>
                <Text>{item.title}</Text>
              </Link>
            </Title>
            <div className={styles["m_b_20"]}>
              <Tag color="#f50">{item.departureCity}出发</Tag>
              <Tag color="#2db7f5">{item.travelDays}天</Tag>
              <Tag color="#87d068">{item.discount ? item.discount : '超值折扣'}</Tag>
              <Tag color="#108ee9">{item.tripType}</Tag>
            </div>
            <div className={styles["m_b_20"]}>{item.description}</div>
            <div>
              <StarOutlined /> 999
              <Divider type="vertical" />
              <LikeOutlined /> 999
              <Divider type="vertical" />
              <Rate value={item.rating} disabled allowHalf />
            </div>
          </Content>
          <Sider className={styles["siderStyle"]}>
            <Image src={item.touristRoutePictures[0].url} height="100%" />
          </Sider>
        </Layout>
      ))}
      {pagination && (
        <>
          <div>搜索总路线：<Text strong>{pagination.totalCount}</Text></div>
          <div className={styles["product-list-pagination"]}>
            <Pagination
              total={pagination.totalCount}
              current={pagination.currentPage}
              pageSize={pagination.pageSize}
              onChange={(page) => onPageChange && onPageChange(page, pagination.pageSize)}
            />
          </div>
        </>
      )}
    </>
  )
}