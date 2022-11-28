import React, { useContext } from "react";
import CartContext from "../../context/Cart/CartContext";
import "./CartPage.scss";
import Total from "../../components/Total/Total";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const { cart } = state;

  const onIncreaseQuantity = (name) => {
    const action = {
      type: "INCREASE_QUANTITY",
      payload: name,
    };

    dispatch(action);
  };

  const onDecreaseQuantity = (name) => {
    const action = {
      type: "DECREASE_QUANTITY",
      payload: name,
    };

    dispatch(action);
  };

  const onRemoveToCart = (name) => {
    const action = {
      type: "REMOVE_FROM_CART",
      payload: name,
    };

    dispatch(action);
  };

  const cartBody =
    cart &&
    cart.map((cartItem, index) => {
      const { name, price, img, quantity } = cartItem;
      return (
        <tr>
          <th scope="row">{index + 1}</th>
          <td>{name}</td>
          <td>
            <img
              src={img}
              alt={name}
              style={{ width: "36px", height: "100%" }}
            />
          </td>
          <td className="d-flex">
            <button
              className="btn btn-primary"
              onClick={() => onIncreaseQuantity(name)}
            >
              +
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              className="btn btn-primary"
              onClick={() => onDecreaseQuantity(name)}
            >
              -
            </button>
          </td>
          <td>{quantity * Number(price)}</td>
          <td style={{ color: "red" }}>
            <button onClick={() => onRemoveToCart(name)}>X</button>
          </td>
        </tr>
      );
    });

  return (
    <div className="container">
      <h4 className="mb-4">Cart</h4>
      <div className="cart-container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>{cartBody}</tbody>
        </table>
      </div>
      <Total />
    </div>
  );
};

export default Cart;
