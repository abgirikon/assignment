import { SHOW_LOADER, HIDE_LOADER } from "./types";
export const showLoading = () => (dispatch) => {
  dispatch({
    type: SHOW_LOADER,
  });
};

export const hideLoading = () => (dispatch) => {
  dispatch({
    type: HIDE_LOADER,
  });
};
