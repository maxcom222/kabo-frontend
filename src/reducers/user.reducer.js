import { userConstants } from '../constants';

const initialState = {
  subscriptions: [],
  dogs: [],
  recipes: [],
  orders: [],
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.ACCOUNT_DATA_LOADED:
      return {
        ...state,
        ...action.payload,
      };
    case userConstants.RECIPE_DATA_LOADED:
      return {
        ...state,
        ...action.payload,
      };
    case userConstants.SUBSCRIPTION_DATA_LOADED:
      return {
        ...state,
        ...action.payload,
      };
    case userConstants.ORDER_DATA_LOADED:
      return {
        ...state,
        ...action.payload,
      };
    case userConstants.PAUSE_SUBSCRIPTION_REQUESTED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
