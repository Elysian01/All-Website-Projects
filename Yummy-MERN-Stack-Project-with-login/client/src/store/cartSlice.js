import { createSlice } from "@reduxjs/toolkit";

// In react, a global state is made up of multiple slices 

// Using redux toolkit, we can define intialState, actions, reducers all in one place
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        total_amount: 0
    },
    reducers: {
        addtoCart: (state, action) => {
            // var product = action.payload;
            var product = {...action.payload};
            product['quantity'] = 1
            product['total_price'] = product['price'] * product['quantity']
            state.cart.push(product);
            state.total_amount += product['price'];
        },
        removeFromCart: (state, action) => {
            var product = { ...action.payload };
            state.total_amount = state.total_amount - product['total_price'];
            state.cart = state.cart.filter(x=>x.id !== product.id);
        },
        changeQuantity: (state, action) => {
            // var product = action.payload;
            var product = { ...action.payload };
            var localCart = state.cart
            console.log(localCart);
            var amt = state.total_amount
            var index = state.cart.findIndex(obj => obj.id === product.id);
            if (isNaN(product['quantity']) === false) {
                amt = amt - product['price']
                localCart[index]['quantity'] = product['quantity']
                localCart[index]['total_price'] = product['price'] * product['quantity']
                amt = amt + localCart[index]['total_price']
                state.total_amount = amt
                state.cart = localCart
            }
        }

    }
})

export default cartSlice.reducer;
export const { addtoCart,removeFromCart,changeQuantity } = cartSlice.actions;