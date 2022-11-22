// NHÀ KHO
// chứa thông tin, state, hàm mà các component khác cần sử dụng

import { useReducer } from "react";
import CartContext from "./CartContext";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

const CartState = (props) => {
  const initialState = {
    cart: [], // giỏ hàng
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
