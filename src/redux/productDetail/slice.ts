import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  // slice中把action和reducer捆绑在一起的，无需单独定义action
  // reducer是一个对象而不是过程，每个对象对应一个action和这个action的处理函数
  // slice是面向对象而不是面对过程，所以不用写switch语句了
  reducers: {
    fetchStart: (state) => {
      // return { ...state, loading: true }
      // immer插件会把reducer所有代码自动转换为immutable，并且输出一个全新的state对象，这是底层做的事情
      state.loading = true
    },
    fetchSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    fetchFail: (state, action: PayloadAction<string | null>) => {
      const a = action.payload
      state.loading = false
      state.error = action.payload
    }
  }
})