import * as actionTypes from './actionTypes';
 
const initialStates = {
  token: null,
  isError: false,
}

const reducer = (state = initialStates, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN:
      return {
        ...state,
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