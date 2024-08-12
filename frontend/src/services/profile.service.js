import axios from "axios";
import ENV_VAR from "../common";
import {createHeaders} from "./common/headers";

class profileService {
    constructor() {
        this.headers = createHeaders();
     }

    getCurrentUserDetails = async () => {
        try {
            const url = `${ENV_VAR.API_HOST}/api/v1/user/auth_user`;
            return await axios.get(url, this.headers);
        }
        catch (error) {
            throw error.response.data.error;
        }
    }

    changePassword = async (obj) => {
        try {
            const url = `${ENV_VAR.API_HOST}/api/v1/user/changepassword`;
            return await axios.post(url, obj, this.headers);
        }
        catch (error) {
            throw error.response.data.error;
        }
    }

    uploadProfilePicture = async (obj) => {
        try {
            const url = `${ENV_VAR.API_HOST}/api/v1/user/uploadprofilepic`;
            return await axios.post(url, obj, this.headers);
        }
        catch (error) {
            throw error.response.data.error;
        }
    }
}

export default new profileService();