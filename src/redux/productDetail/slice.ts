import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { url } from "../../service";

interface ProductDetailState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: ProductDetailState = {
  loading: true,
  error: null,
  data: null
}

// 相当于一个封装了多个dispatch和异步代码的actionCreator
export const getProductDetail: any = createAsyncThunk(
  // 命名空间可以设置为slice名称拼接此action名
  'productDetail/getProductDetail',
  // thunkAPI下面有dispatch和getState等方法
  async (touristRouteId: string, thunkAPI) => {
    const { data } = await axios.get(`${url}/touristRoutes/${touristRouteId}`)
    return data
  }
)

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  // slice中把action和reducer捆绑在一起的，无需单独定义action
  // reducer是一个对象而不是过程，每个对象对应一个action和这个action的处理函数
  // slice是面向对象而不是面对过程，所以不用写switch语句了
  reducers: {
    // fetchStart: (state) => {
    //   // return { ...state, loading: true }
    //   // immer插件会把reducer所有代码自动转换为immutable，并且输出一个全新的state对象，这是底层做的事情
    //   state.loading = true
    // },
    // fetchSuccess: (state, action) => {
    //   state.data = action.payload
    //   state.loading = false
    //   state.error = null
    // },
    // fetchFail: (state, action: PayloadAction<string | null>) => {
    //   const a = action.payload
    //   state.loading = false
    //   state.error = action.payload
    // }
  },
  // 如果想使用RTK的thunk的promise3个状态就以下写法
  extraReducers: {
    [getProductDetail.pending]: (state) => {
      state.loading = true
    },
    [getProductDetail.fulfilled.type]: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    [getProductDetail.rejected.type]: (state, action: PayloadAction<string | null>) => {
      const a = action.payload
      state.loading = false
      state.error = action.payload
    }
  }
})