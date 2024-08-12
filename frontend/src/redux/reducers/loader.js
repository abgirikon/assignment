import {
    SHOW_LOADER,
    HIDE_LOADER
} from "../actions/types";


const initialState = {
  isLoading: false,
};

const auth = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default auth;
