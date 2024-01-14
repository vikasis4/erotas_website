import { configureStore } from '@reduxjs/toolkit'
import accountReducer from '@/redux/slice/general/index';
import { userApi } from './slice/user';
import { productsApi } from './slice/products';
import { cartApi } from './slice/cart';

export const makeStore = () => {
  return configureStore({
    reducer: {
        general:accountReducer,
        [userApi.reducerPath]: userApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, productsApi.middleware, cartApi.middleware),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']