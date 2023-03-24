import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { url } from "../../service";

interface ShoppingCartState {
  loading: boolean;
  error: string | null;
  items: any[];
}

const initialState: ShoppingCartState = {
  loading: true,
  error: null,
  items: []
}

// 查看购物车列表
export const getShoppingCart: any = createAsyncThunk(
  // 命名空间可以设置为slice名称拼接此action名
  'shoppingCart/getShoppingCart',
  // thunkAPI下面有dispatch和getState等方法
  async (jwt: string, thunkAPI) => {
    const { data } = await axios.get(`${url}/shoppingCart`, {
      headers: {
        Authorization: `bearer ${jwt}`
      }
    })
    return data.shoppingCartItems
  }
)
// 添加到购物车
export const addShoppingCartItem: any = createAsyncThunk(
  // 命名空间可以设置为slice名称拼接此action名
  'shoppingCart/addShoppingCartItem',
  // thunkAPI下面有dispatch和getState等方法
  async (parameters: {jwt: string, touristRouteId: string}, thunkAPI) => {
    const { data } = await axios.post(`${url}/shoppingCart/items`, {
      touristRouteId: parameters.touristRouteId
    }, {
      headers: {
        Authorization: `bearer ${parameters.jwt}`
      }
    })
    return data.shoppingCartItems
  }
)
// 清空购物车
export const clearShoppingCart: any = createAsyncThunk(
  // 命名空间可以设置为slice名称拼接此action名
  'shoppingCart/clearShoppingCart',
  // thunkAPI下面有dispatch和getState等方法
  async (parameter: {jwt: string, itemIds: number[]}, thunkAPI) => {
    return await axios.delete(
      `${url}/shoppingCart/items(${parameter.itemIds.join(',')})`, 
      {
        headers: {
          Authorization: `bearer ${parameter.jwt}`
        }
      }
    )
  }
)

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  // slice中把action和reducer捆绑在一起的，无需单独定义action
  // reducer是一个对象而不是过程，每个对象对应一个action和这个action的处理函数
  // slice是面向对象而不是面对过程，所以不用写switch语句了
  reducers: {},
  // 如果想使用RTK的thunk的promise3个状态就以下写法
  extraReducers: {
    // 查看购物车列表
    [getShoppingCart.pending]: (state) => {
      state.loading = true
    },
    [getShoppingCart.fulfilled.type]: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.error = null
    },
    [getShoppingCart.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false
      state.error = action.payload
    },
    // 添加到购物车
    [addShoppingCartItem.pending]: (state) => {
      state.loading = true
    },
    [addShoppingCartItem.fulfilled.type]: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.error = null
    },
    [addShoppingCartItem.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false
      state.error = action.payload
    },
    // 清空购物车
    [clearShoppingCart.pending]: (state) => {
      state.loading = true
    },
    [clearShoppingCart.fulfilled.type]: (state) => {
      state.items = []
      state.loading = false
      state.error = null
    },
    [clearShoppingCart.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false
      state.error = action.payload
    }
  }
})