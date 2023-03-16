import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartModalReducer from '../features/CartModal/cartModalReducer';
import CartReducer from '../features/Cart/CartReducer';

export const store = configureStore({
  reducer: {
   cartModalReducer,
   CartReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
