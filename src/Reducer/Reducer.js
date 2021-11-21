export const initialState = {
  basket: [],
  user: null,
};

export const getTotal = (basket) => {
  return basket?.reduce((amount, item) => {
    return amount + item.price * item.amount;
  }, 0);
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "INCREASE_PRODUCT":
      const allProduct = [...state.basket];
      const product = allProduct.find((item) => item.id === action.id);
      const btnClass = action.e.target.className;
      if (btnClass === "increment") {
        product.amount += 1;
      }else if(btnClass === "decrement"){
        product.amount -= 1;
      }
      const productIndex = allProduct.findIndex(
        (item) => item.id === action.id
      );
      allProduct[productIndex] = product;
      return {
        ...state,
        basket: [...allProduct],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      break;
  }
};

export default reducer;
