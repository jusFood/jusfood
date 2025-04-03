import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// api
import { cafeApi } from "../api/cafeApi";

// slice

export const store = configureStore({
  reducer: {
    [cafeApi.reducerPath]: cafeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cafeApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
