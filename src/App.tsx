import React, { useEffect } from 'react';
import styles from './App.module.less';
import { useSelector } from './redux/hooks';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import {
  Home,
  SignIn,
  Register,
  Detail,
  Search,
  ShoppingCart
} from './pages'
import { useDispatch } from 'react-redux';
import { getShoppingCart } from './redux/shoppingCart/slice';

// 私有化路由函数
// isAuthenticated： 判定是否登录
const PrivateRoute = (props: any) => {
  const { children, isAuthenticated } = props
  return isAuthenticated ? (
    // 如果用户有权限，返回组件本身
    children
  ) : (
    // 如果用户没有授权，那么用户会重定向到登录页面
    <Navigate to={`/signIn`} />
  )
}

function App() {
  const jwt = useSelector(s => s.user.token)
  const dispatch = useDispatch()
  useEffect(() => {
    if (jwt) {
      dispatch(getShoppingCart(jwt))
    }
  }, [jwt])

  return (
    <div className={styles["App"]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/detail/:touristRouteId' element={<Detail />} />
          <Route path='/search/:keyword' element={<Search />} />
          <Route
            path='/shoppingCart'
            element={
              <PrivateRoute isAuthenticated={jwt !== null}>
                <ShoppingCart />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<h1>404 NOT FOUND 页面不存在</h1>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
