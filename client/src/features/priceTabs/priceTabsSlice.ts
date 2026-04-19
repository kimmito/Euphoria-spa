
import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"

type PriceTabsState = {
  category: string
  service: string
}

const initialState: PriceTabsState = {
  category: 'offers',
  service: '',
}

const priceTabsSlice = createSlice({
  name: 'priceTabs',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload
      state.service = ''
    },
    setService(state, action: PayloadAction<string>) {
      state.service = action.payload
    }
  }
})

export const { setCategory, setService } = priceTabsSlice.actions
export const priceTabsReducer = priceTabsSlice.reducer