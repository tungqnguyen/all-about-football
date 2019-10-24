import * as actionTypes from './actionTypes';
 
const initialStates = {
  token: null,
  isError: false,
}

const reducer = (state = initialStates, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP:
      return {
        ...state,
        token: action.token,
        isError: action.isError,
      }
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      }
      default:
        return state;
  }
  
};

export default reducer;