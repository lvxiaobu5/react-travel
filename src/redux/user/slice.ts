import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { userApi } from "../../service";

interface UserState {
  loading: boolean;
  error: string | null;
  token: string | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  token: null
}

// 相当于一个封装了多个dispatch和异步代码的actionCreator
export const signIn: any = createAsyncThunk(
  // 命名空间可以设置为slice名称拼接此action名
  'user/signIn',
  // thunkAPI下面有dispatch和getState等方法
  async (paramaters: {
    email: string,
    password: string
  }, thunkAPI) => {
    const { data } = await axios.post(`${userApi}/login`, {
      email: paramaters.email,
      password: paramaters.password
    })
    return data.token
  }
)

export const userSlice = createSlice({
  name: 'user',
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
    [signIn.pending]: (state) => {
      state.loading = true
    },
    [signIn.fulfilled.type]: (state, action) => {
      state.token = action.payload
      state.loading = false
      state.error = null
    },
    [signIn.rejected.type]: (state, action: PayloadAction<string | null>) => {
      const a = action.payload
      state.loading = false
      state.error = action.payload
    }
  }
})