import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementItem, decrementItem, removeFromCart } from "../redux/actions";

const ShoppingCartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
              <button onClick={() => dispatch(decrementItem(item.id))}>-</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          ))}
          <h3>Total: ${totalCost}</h3>
          <button>Checkout</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCartPage;
