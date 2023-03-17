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
  items: JSON.parse(localStorage.getItem("cart") || "[]"),
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload)
      localStorage.setItem("cart", JSON.stringify(state.items))

    },
    removeItem: (state, action: PayloadAction<Item>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
      localStorage.setItem("cart", JSON.stringify(state.items))

    },
    clearCart: (state) => {
      state.items = []
      localStorage.setItem("cart", JSON.stringify(state.items))

    },
  },
})

export const calculateTotal = (items: Item[]) => {
  return items.reduce((total, item) => total + item.price, 0)
}



export const { addItem, removeItem, clearCart } = cartSlice.actions





export default cartSlice.reducer
