import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import thunk from 'redux-thunk'
import { actionLog } from './middlewares/actionLog'
import { productDetailSlice } from './productDetail/slice'

// combineReducers方法创建store，把多个reducer捆绑起来
const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer
})

// createStore需要传入一个reducer作为参数
const store = createStore(rootReducer, applyMiddleware(thunk, actionLog))

// store的类型
export type RootState = ReturnType<typeof store.getState>

// store只负责保存数据，不负责处理数据，reducer才是数据的处理系统
export default store