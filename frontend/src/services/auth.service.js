import axios from "axios";
import ENV_VAR from "../common";


class AuthService {
    constructor() {
        //API_UTIL.addHeader(axios);
    }

    async login(username, password) {
        try {
            const login_url = `${ENV_VAR.API_HOST}/api/v1/user/sign_in`;
            const response = await axios.post(login_url, {
                email: username,
                password: password,
            });
            let jsonString = JSON.stringify(response.data)
            localStorage.setItem('authentication', jsonString);
            localStorage.setItem('token', response.data.access_token);
            return response;
        } catch (error) {
            console.log("Login Error", error);
            throw error.response.data.error;
        }
    }

    async signup(data) {
        try {
            const signup_url = `${ENV_VAR.API_HOST}/api/v1/user/sign_up`;
            const response = await axios.post(signup_url, data);
            let jsonString = JSON.stringify(response.data)
            return response;
        } catch (error) {
            console.log("Login Error", error);
            throw error.response.data.error;
        }
    }

    async forgetPassword(obj) {
        try {
            const login_url = `${ENV_VAR.API_HOST}/api/v1/user/resetpwd`;
            const response = await axios.post(login_url, obj);
            return response;
        } catch (error) {
            console.log("Forgot password error", error);
            throw error.response.data.error;
        }
    }

    async resetToken(obj) {
        try {
            const login_url = `${ENV_VAR.API_HOST}/api/v1/user/resettoken`;
            const response = await axios.post(login_url, obj);
            return response;
        } catch (error) {
            console.log("Reset Token Error", error);
            throw error.response.data.error;
        }
    }
}


export default new AuthService();
