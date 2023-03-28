import {
  legacy_createStore as createStore,
  applyMiddleware
} from 'redux'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import thunk from 'redux-thunk'
import { actionLog } from './middlewares/actionLog'
import { productDetailSlice } from './productDetail/slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productSearchSlice } from './productSearch/slice'
import { userSlice } from './user/slice'
import { shoppingCartSlice } from './shoppingCart/slice'
import { orderSlice } from './order/slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  // 持久化的命名空间
  key: 'root',
  // 数据的保存方式，一般是cookie或者localStorage，上面引进来的默认就是localStorage
  storage,
  // 上面两个是必填字段，白名单黑名单等是可选字段
  // 表示我们将会把redux中user的部分全部保存起来，其他数据一概不保存
  // 黑名单表示不会保存名单中的内容，其他数据全部保存
  // 如果不填黑白名单，redux-persist就会把redux中所有数据全部保存起来
  whiteList: ['user']
}

// combineReducers方法创建store，把多个reducer捆绑起来
const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
  user: userSlice.reducer,
  shoppingCart: shoppingCartSlice.reducer,
  order: orderSlice.reducer
})

// persistReducer函数创建一个基于localStorage的威力加强版的持久化的reducer，并传入下面的configureStore
const persistedReducer = persistReducer(persistConfig, rootReducer)

// createStore需要传入一个reducer作为参数
// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog))
const store = configureStore({
  reducer: persistedReducer,
  middleware: ((getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog]),
  devTools: true,
})

// 用persistStore来创建一个持久化的store，并且要导出原来的store和持久化的store
const persistor = persistStore(store)

// store的类型
export type RootState = ReturnType<typeof store.getState>

// store只负责保存数据，不负责处理数据，reducer才是数据的处理系统
export default { store, persistor }