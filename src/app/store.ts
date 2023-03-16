import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartModalSlice from '../features/CartModal/cartModalReducer';

export const store = configureStore({
  reducer: {
    cartModalSlice,
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
