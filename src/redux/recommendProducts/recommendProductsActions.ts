import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import axios from "axios"

// 正在调用推荐信息api
export const FETCH_RECOMMEND_PRODUCTS_START = 'FETCH_RECOMMEND_PRODUCTS_START'
// 推荐信息api调用成功
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS = 'FETCH_RECOMMEND_PRODUCTS_SUCCESS'
// 推荐信息api调用失败
export const FETCH_RECOMMEND_PRODUCTS_FAIL = 'FETCH_RECOMMEND_PRODUCTS_FAIL'

interface FetchRecommendProductsStartAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START
}
interface FetchRecommendProductsSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  payload: any
}
interface FetchRecommendProductsFailAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL,
  payload: any
}
export type RecommendProductsAction = FetchRecommendProductsStartAction | FetchRecommendProductsSuccessAction | FetchRecommendProductsFailAction

export const fetchRecommendProductsStartActionCreator = (): FetchRecommendProductsStartAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_START
  }
}
export const fetchRecommendProductsSuccessActionCreator = (data: any): FetchRecommendProductsSuccessAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: data
  }
}
export const fetchRecommendProductsFailActionCreator = (error: any): FetchRecommendProductsFailAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: error
  }
}

// 完整写法
// export const getDataActionCreator = () => {
//   return () => {

//   }
// }
// 简写
export const getDataActionCreator = (): ThunkAction<
  void,
  RootState,
  unknown,
  RecommendProductsAction
> => async (dispatch, getState) => {
  dispatch(fetchRecommendProductsStartActionCreator())
  try {
    const { data } = await axios.get('xxx')
    dispatch(fetchRecommendProductsSuccessActionCreator(data))
  } catch (error: any) {
    dispatch(fetchRecommendProductsFailActionCreator(error.message))
  }
}