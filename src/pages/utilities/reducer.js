import { Type } from "./actionTypes";

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );
      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        const updatedBasket = state.basket.map((item) => {
          return item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });
        return {
          ...state,
          basket: updatedBasket,
        };
      }
    case Type.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex((item) => item.id === action.id);
      let NewBasket = [...state.basket];

      if (index >= 0) {
        if (NewBasket[index].amount > 1) {
          NewBasket[index] = {
            ...NewBasket[index],
            amount: NewBasket[index].amount - 1,
          };
        } else {
          NewBasket.splice(index, 1);
        }
      }
      return {
        ...state,
        basket: NewBasket,
      };
    case Type.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case Type.SET_EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};
