import { configureStore } from "@reduxjs/toolkit";
import { priceTabsReducer } from "@/features/priceTabs/priceTabsSlice";

export const store = configureStore({
  reducer: {
    priceTabs: priceTabsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch