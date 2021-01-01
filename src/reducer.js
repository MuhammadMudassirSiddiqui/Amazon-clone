export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      // here we copy basket
      let newBasket = [...state.basket];
      //   here we find the index of clicked item
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      // here we check it and remove it from newBasket
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("item is not in the basket");
      }
      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
}

export default reducer;
