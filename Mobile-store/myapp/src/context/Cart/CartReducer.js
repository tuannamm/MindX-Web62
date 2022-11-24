const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    // case 1: Nếu sản phẩm đã có trong giỏ hàng thì tăng số lượng lên 1

    // case 2: Nếu sản phẩm chưa có trong giỏ hàng thì thêm sản phẩm vào giỏ hàng
    case "ADD_TO_CART":
      const checkIfIncluded = state.cart
        ?.map((item) => item.id)
        .includes(payload.id);
      if (!checkIfIncluded) {
        const newCartItem = { ...payload, quantity: 1 };
        const newCart = [...state.cart, newCartItem];

        return {
          ...state,
          cart: newCart,
        };
      }
      if (checkIfIncluded) {
        const newCart = state.cart.map((item) => {
          if (item.id === payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });

        return {
          ...state,
          cart: newCart,
        };
      }
      break;

    case "INCREASE_QUANTITY":
      const itemAdded = state.cart.map((item) => {
        if (item.name === payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return {
        ...state,
        cart: itemAdded,
      };

    case "DECREASE_QUANTITY":
      const itemDeleted = state.cart.map((item) => {
        if (item.name === payload) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          if (item.quantity === 1) {
            state.cart.splice(state.cart.indexOf(item), 1);
          }
        }
        return item;
      });

      return {
        ...state,
        cart: itemDeleted,
      };

    case "REMOVE_FROM_CART":
      const itemRemover = state.cart.map((item) => {
        if (item.name === payload) {
          state.cart.splice(state.cart.indexOf(item), 1);
        }
        return item;
      });

      return {
        ...state,
        cart: itemRemover,
      };

    default:
      return state;
  }
};

export default reducer;
