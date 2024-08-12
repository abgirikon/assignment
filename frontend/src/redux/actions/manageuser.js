import { USER_LIST,CREATE_USER,UPDATE_USER,DELETE_USER,USER_INFO } from "./types";
import userservice from "../../services/users.service";
import { toast } from 'react-toastify';


export const createuser = (object) => async(dispatch) => {
    try {
      let res = await userservice.createNewuser(object);
       if(res.status === 200){
        dispatch({
          type : CREATE_USER,
          payload : res.data
        });
        toast.success("User created successfully");
      } else {
        toast.error("Unable to create user : " + res.status);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  
  export const updateuser = (Userinfo) => async(dispatch) => {
    try {
      let res = await userservice.updateuser(Userinfo);
       if(res.status === 200){
        dispatch({
          type : UPDATE_USER,
          payload : res.data
        });
        toast.success("User updated successfully");
      } else {
        toast.error("Unable to update user info : " + res.status);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  
  export const deleteuser = (id) => async(dispatch) => {
    try {
      let res = await userservice.deleteuserbyid(id);
       if(res.status === 200){
        dispatch({
          type : DELETE_USER,
          payload : res.data
        });
        toast.success("User deleted successfully");
      } else {
        toast.error("Unable to delete user : " + res.status);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  export const getuserList = (page,pageSize, sortColumn, sortDirection,filters) => async(dispatch) => {
    try {
      let res = await userservice.getAllusers(page,pageSize, sortColumn, sortDirection,filters);
       if(res.status === 200){
        dispatch({
          type : USER_LIST,
          payload : res.data
        });
      } else {
        toast.error("Unable to get user list : " + res.status);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  export const getuserbyid = (id) => async(dispatch) => {
    try {
      dispatch({
        type : USER_INFO
      })
      let res = await userservice.getuserbyid(id);
       if(res.status === 200){
        dispatch({
          type : USER_INFO,
          payload : res.data
        });
      } else {
        toast.error("Unable to get user data" + res.status);
      }
    } catch (error) {
      toast.error(error);
    }
  };