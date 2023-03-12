import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import url from "../../service";

interface ProductSearchState {
  loading: boolean;
  error: string | null;
  data: any;
  pagination: any;
}

const initialState: ProductSearchState = {
  loading: true,
  error: null,
  data: null,
  pagination: null
}

// 相当于一个封装了多个dispatch和异步代码的actionCreator
export const getProductSearch: any = createAsyncThunk(
  // 命名空间可以设置为slice名称拼接此action名
  'productSearch/getProductSearch',
  // thunkAPI下面有dispatch和getState等方法
  async (paramaters: {
    keyword: string;
    nextPage: number | string;
    pageSize: number | string;
  }, thunkAPI) => {
    let newUrl = `${url}/touristRoutes/?pageNumber=${paramaters.nextPage}&pageSize=${paramaters.pageSize}`
    if (paramaters.keyword) {
      newUrl += `&keyword=${paramaters.keyword}`
    }
    const res = await axios.get(newUrl)
    console.log(1, res)
    return {
      data: res.data,
      pagination: JSON.parse(res.headers["x-pagination"])
    }
  }
)

export const productSearchSlice = createSlice({
  name: 'productSearch',
  initialState,
  // slice中把action和reducer捆绑在一起的，无需单独定义action
  // reducer是一个对象而不是过程，每个对象对应一个action和这个action的处理函数
  // slice是面向对象而不是面对过程，所以不用写switch语句了
  reducers: {},
  // 如果想使用RTK的thunk的promise3个状态就以下写法
  extraReducers: {
    [getProductSearch.pending]: (state) => {
      state.loading = true
    },
    [getProductSearch.fulfilled.type]: (state, action) => {
      // payload的data和pagination是从上面getProductSearch的返回值来的
      state.data = action.payload.data
      state.pagination = action.payload.pagination
      state.loading = false
      state.error = null
    },
    [getProductSearch.rejected.type]: (state, action: PayloadAction<string | null>) => {
      const a = action.payload
      state.loading = false
      state.error = action.payload
    }
  }
})