import { createSlice } from '@reduxjs/toolkit';

interface CartModalState {
  isCartModalOpen: boolean;
}

const initialState: CartModalState = {
  isCartModalOpen: false,
};

const cartModalSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartModal: (state) => {
      state.isCartModalOpen = !state.isCartModalOpen;
    },
    
  },
});

export const { toggleCartModal } = cartModalSlice.actions;
export default cartModalSlice.reducer;