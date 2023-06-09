import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemList:[],
        totalQuantity: 0,
        showCart: false,
        totalPrice: 0,
        total: 0
    },
    reducers :{
        addToCart(state, action){
            const newItem = action.payload;
            const exitingItem = state.itemList.find(item => item.id === newItem.id);
            if(exitingItem){
                exitingItem.quantity ++;
                state.totalPrice += newItem.price;
            }else{
                state.itemList.push(
                   {
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    quantity: 1
                    
                   },
                   state.totalQuantity= state.totalQuantity + 1,
                   state.totalPrice +=newItem.price
                );
            }
           

        },
        removeFromCart(state){

        },
        setShowCart(state){
            state.showCart = !state.showCart
        }
    }

});

export const cartActions = cartSlice.actions;
export default cartSlice;