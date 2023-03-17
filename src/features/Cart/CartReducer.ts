import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Item {
  id: string
  name: string
  price: number
  imageSource: string
}

interface CartState {
  items: Item[]
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<Item>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const calculateTotal = (items: Item[]) => {
  return items.reduce((total, item) => total + item.price, 0)
}



export const { addItem, removeItem, clearCart } = cartSlice.actions





export default cartSlice.reducer
