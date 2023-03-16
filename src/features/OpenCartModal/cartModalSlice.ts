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
      
      if (state.isCartModalOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    
  },
});

export const { toggleCartModal } = cartModalSlice.actions;
export default cartModalSlice.reducer;