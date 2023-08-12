import { createSlice } from '@reduxjs/toolkit'
// import { useState } from 'react';
// const [inCart,setInCart] = useState([]);

const initialState = {
    itemCount: 0,
    totalAmount : 0,
    inCart : []
    // setInCart
}

const CartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        AddToCart : (state,action) => {
            state.itemCount += 1;
            state.totalAmount += action.payload.price;
            console.log(action.payload.price);
            state.inCart.push(action.payload);
            // let items = state.inCart;
            // let abc = action.payload;
            // items.push(item);
            // state.setInCart(items);
        },
        removeFromCart : (state,action) => {
            state.itemCount -= 1;
            console.log(action.payload.price);
            state.totalAmount -= action.payload.price;
            // let items = state.inCart;
            state.inCart = state.inCart.filter(listIn => listIn.id !== action.payload.id );
            // state.setInCart(items);
        }
    }
});

export const {AddToCart,removeFromCart} = CartSlice.actions;
export default CartSlice.reducer;