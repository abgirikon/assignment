import { GET_CURRENT_USER_DETAILS } from "../actions/types";
  
  const initialState = {
    userDetails: null
  };
  
  const profile = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_CURRENT_USER_DETAILS:
        return {
          ...state,
          userDetails: payload,
        };
  
      default:
        return state;
    }
  };
  export default profile;
  