import profileService from "../../services/profile.service";
import { toast } from 'react-toastify';

export const getCurrentUser = () => async (dispatch) => {
  try {
    let res = await profileService.getCurrentUserDetails();
    if (res.status === 200) {
      return res.data;
    } else {
      toast.error("Unable to get current user information : " + res.status);
    }
  } catch (error) {
    toast.error(error);
  }
};

export const changePassword = (obj) => async (dispatch) => {
  try {
    let res = await profileService.changePassword(obj);
    if (res.status === 200) {
      toast.success("Password has been successfully reset");
    } else {
      toast.error("Unable change password : " + res.status);
    }
  } catch (error) {
    toast.error(error);
  }
};

export const uploadPicture = (obj) => async (dispatch) => {
  try {
    let res = await profileService.uploadProfilePicture(obj);
    if (res.status === 200) {
      toast.success("Profile Picture uploaded successfully");
    } else {
      toast.error("Unable change password : " + res.status);
    }
  } catch (error) {
    toast.error(error);
  }
};