import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector(state=> state.cart.itemsList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {/* <li>
          <CartItem id={1} price={2500} name={"Macbook"} />
        </li> */}
        {cartItems && cartItems.map(cartItem => {
        return(<li key={cartItem.id}>
          {" "}
          <CartItem quantity={cartItem.quantity} id={cartItem.id} price={cartItem.price} totalPrice={cartItem.totalPrice} name={cartItem.name} />
          {" "}
        </li>
      )
        })}
      </ul>
    </div>
  );
};

export default CartItems;
