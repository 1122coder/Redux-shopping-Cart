import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  
  const itemList = useSelector(state =>state.cart.itemList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
          {
            
            itemList.map(item => (
                <CartItem 
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                />
            ))
          }
       
      </ul>
    </div>
  );
};

export default CartItems;
