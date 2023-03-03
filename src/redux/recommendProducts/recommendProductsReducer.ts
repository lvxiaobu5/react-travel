import {
  RecommendProductsAction,
  FETCH_RECOMMEND_PRODUCTS_START,
  FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  FETCH_RECOMMEND_PRODUCTS_FAIL
} from "./recommendProductsActions"

interface RecommendProductsState {
  productList: any[],
  loading: boolean,
  error: string | null
}

const defaultState: RecommendProductsState = {
  productList: [],
  loading: true,
  error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action: RecommendProductsAction) => {
  switch (action.type) {
    case FETCH_RECOMMEND_PRODUCTS_START:
      return {
        ...state,
        loading: true
      }
    case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        loading: false
      }
    case FETCH_RECOMMEND_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
  return state
}