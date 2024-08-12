import { LOGIN_SUCCESS, SIGNUP_SUCCESS} from "./types";
import authService from "../../services/auth.service";
import { toast } from 'react-toastify';

export const login = (username, password) => async (dispatch) => {
  try {
    let res = await authService.login(username, password);
    if (res.status === 200) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      toast.success("Logged in successfully");
    } else {
      toast.error("Unable to login please ask administrator" + res.status);
    }
  } catch (error) {
    toast.error(error);
  }
};

export const signup = (data) => async (dispatch) => {
  try {
    let res = await authService.signup(data);
    if (res.status === 200) {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data
      });
      toast.success("sign up successfully");
    } else {
      toast.error("Unable to signup please ask administrator" + res.status);
    }
  } catch (error) {
    toast.error(error);
  }
};

export const resetPassword = (obj) => async (dispatch) => {
  try {
    let res = await authService.forgetPassword(obj);
    if (res.status === 200) {
      toast.success("Link has been sent to your register email id please check your mail box");
    } else {
      toast.error("Something wend wrong Please try again later");
    }
  } catch (error) {
    toast.error(error);
  }
};

export const resetToken = (obj , navigate) => async (dispatch) => {
  try {
    let res = await authService.resetToken(obj);
    if (res.status === 200) {
      //navigate('/signIn')
      toast.success("Password has been reset successfully");
    } else {
      toast.error("Something went wrong please try again later");
    }
    return res;
  } catch (error) {
    toast.error(error);
  }
};


// export const logout = () => (dispatch) => {
//   try {
//     dispatch(showLoading());
//     localStorage.clear();
//     localStorage.removeItem("user");

//     dispatch({
//       type: LOGOUT,
//     });

//     dispatch({
//       type: SET_MESSAGE,
//       payload: "You have successfully logged out.",
//     });

//     dispatch(hideLoading());
//   } catch (e) {
//     console.error("logout", e);
//   }
// };

// export const authUser = () => async (dispatch) => {
//   dispatch(showLoading());
//   dispatch({
//     type: AUTH_USER,
//   });
//   dispatch(hideLoading());
// };

// export const updateUserInfo = (data) => (dispatch) => {
//   dispatch({
//     type: SET_USER_DATA,
//     payload: { user: data },
//   });
// };
