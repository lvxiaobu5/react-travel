import { Middleware } from "redux";

// 自定义的中间件，满足下列需求：
export const actionLog: Middleware = (store) => (next) => (action) => {
  // 需求：每次dispatch还得记录一下当前store的数据state
  console.log('当前state：', store.getState())
  // 需求：记录每次dispatch的action信息
  console.log('本action：', action)
  next(action)
  // 不仅要打印当前state，还得打印更改后的state
  console.log('更新后的state：', store.getState())
}