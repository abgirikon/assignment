import {USER_LIST, CREATE_USER,UPDATE_USER,DELETE_USER,USER_INFO} from "../actions/types";
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
    userList: null
  };

  const users = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_USER:
            return {
              ...state,
              isusercreated: true, 
          };
          case USER_LIST:
            return {
              ...state,
              userList: payload,
          };
          case UPDATE_USER:
            return {
              ...state,
              isuserUpdated: true,
              user: payload.data,
          };
          case USER_INFO:
            return {
              ...state,
              user: payload,
          };
          case DELETE_USER:
            return {
              ...state,
              isDeleted: true, 
          };
          default:
            return state;
    }

  };
  export default users;
