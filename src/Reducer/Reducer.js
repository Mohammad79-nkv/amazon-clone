export const initialState = {
  basket: [],
};

export const getTotal = (basket) => {
  return basket?.reduce((amount, item) => {
    return amount + item.price;
  }, 0);
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      break;
  }
};

export default reducer;
