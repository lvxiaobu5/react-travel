import React, { useEffect } from "react";
import { Layout, Spin, Typography } from 'antd';
import styles from './index.module.less'
import { useTranslation } from 'react-i18next'
import { Header, Footer, Filter, ProductList } from "../../components";
import { filterData } from './mockup';
import { useParams, useLocation } from "react-router-dom";
import { getProductSearch } from "../../redux/productSearch/slice";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { MainLayout } from "../../layouts";

export const Search: React.FC = () => {
  const { keyword } = useParams()
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    dispatch(getProductSearch({nextPage: 1, pageSize: 10, keyword}))
  }, [location])

  const loading = useSelector(state => state.productSearch.loading)
  const error = useSelector(state => state.productSearch.error)
  const pagination = useSelector(state => state.productSearch.pagination)
  const productList = useSelector(state => state.productSearch.data)

  // const data = [{
  //   createTime: "0001-01-01T00:00:00",
  //   departureCity: "Shenzhen",
  //   departureTime: null,
  //   description: "【匠心定做】 庄园酒店 少女峰+卢浮宫+凡尔赛宫+新天鹅堡+塞纳河游船+贡多拉+巴黎蒙帕纳思56层观光廊+吕德斯海姆+科隆+4人1台WIFI",
  //   discountPresent: 0.1,
  //   id: "2430bf64-fd56-460c-8b75-da0a1d1cd74c",
  //   originalPrice: 14551.8,
  //   price: 1455.18,
  //   rating: 5,
  //   title: "法国+德国+意大利+瑞士12日跟团游(4钻)",
  //   touristRoutePictures: [{
  //     id: 19,
  //     url: "https://z3.ax1x.com/2020/12/15/rMlFde.jpg",
  //     touristRouteId: "2430bf64-fd56-460c-8b75-da0a1d1cd74c",
  //   }],
  //   travelDays: "Five",
  //   tripType: "BackPackTour",
  //   updateTime: null,
  // }]
  const onPageChange = (nextPage: number | string, pageSize: number | string) => {
    dispatch(getProductSearch({nextPage, pageSize, keyword}))
  }

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
      {/* 分类过滤器 */}
      <div className={styles["product-list-container"]}>
        <Filter data={filterData} />
      </div>
      {/* 产品列表 */}
      <div className={styles["product-list-container"]}>
        <ProductList
          data={productList}
          pagination={pagination}
          onPageChange={onPageChange}
        />
      </div>
    </MainLayout>
  )
}