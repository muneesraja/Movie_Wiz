import { ActionTypes } from "../constants/action-type";

const initialState = {
  searchMovie: [],
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return payload;
    default:
      return state;
  }
};
