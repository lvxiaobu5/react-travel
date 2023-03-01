import { legacy_createStore as createStore } from 'redux'
import languageReducer from './language/languageReducer'

// createStore需要传入一个reducer作为参数
const store = createStore(languageReducer)

// store只负责保存数据，不负责处理数据，reducer才是数据的处理系统
export default store