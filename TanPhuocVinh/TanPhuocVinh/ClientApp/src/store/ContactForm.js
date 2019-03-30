const incrementContactFormType = "INCREMENT_CONTACTFORM";
const decrementContactFormType = "DECREMENT_CONTACTFORM";
const initialState = {};

export const actionCreators = {
  increment: () => ({ type: incrementContactFormType }),
  decrement: () => ({ type: decrementContactFormType })
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === incrementContactFormType) {
    return { ...state };
  }

  if (action.type === decrementContactFormType) {
    return { ...state };
  }

  return state;
};
