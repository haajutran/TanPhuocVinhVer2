import * as dataService from "../services/DataService"

const requestHomeType = "INCREMENT_HOME";
const receiveHomeType = "DECREMENT_HOME";
const initialState = {
    functions: []
};

export const actionCreators = {
  requestHome: isLoaded => async (dispatch, getState) => {
      dispatch({
          type: requestHomeType,
          isLoaded: false
      });
      loadHome(dispatch,isLoaded)
  }
};

export const loadHome = async dispatch => {
    const functions = await dataService.get("/api/post/getall");
    console.log(functions);
    dispatch({
        type: receiveHomeType,
        isLoaded: true,
        functions
    })
} 

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestHomeType) {
    return { 
        ...state,
        isLoaded: action.isLoaded
    };
  }

  if (action.type === receiveHomeType) {
    return { 
        ...state,
        isLoaded: action.isLoaded,
        functions: action.functions
    };
  }

  return state;
};
