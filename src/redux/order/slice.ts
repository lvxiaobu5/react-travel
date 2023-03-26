import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { url } from "../../service";
import { checkout } from '../shoppingCart/slice';

interface OrderState {
  loading: boolean;
  error: string | null;
  currentOrder: any;
}

const initialState: OrderState = {
  loading: false ,
  error: null,
  currentOrder: null
}

export const placeOrder: any = createAsyncThunk(
  'order/placeOrder',
  async (paramaters: {
    jwt: string;
    orderId: string;
  }, thunkAPI) => {
    const { data } = await axios.post(`${url}/orders/${paramaters.orderId}/placeOrder`, null, {
      headers: {
        Authorization: `bearer ${paramaters.jwt}`
      }
    })
    return data
  }
)

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: {
    // 对订单进行处理
    [placeOrder.pending]: (state) => {
      state.loading = true
    },
    [placeOrder.fulfilled.type]: (state, action) => {
      state.currentOrder = action.payload
      state.loading = false
      state.error = null
    },
    [placeOrder.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false
      state.error = action.payload
    },
    // 对购物车进行处理
    [checkout.pending]: (state) => {
      state.loading = true
    },
    [checkout.fulfilled.type]: (state, action) => {
      state.currentOrder = action.payload
      state.loading = false
      state.error = null
    },
    [checkout.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false
      state.error = action.payload
    }
  }
})