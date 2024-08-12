import axios from "axios";
import ENV_VAR from "../common";
import { createHeaders } from "./common/headers";

class userservice {
    constructor() {
        this.headers = createHeaders();
    }

    async getAllusers(page,pageSize, sortColumn, sortDirection,filters) {
        try {    
            const url = `${ENV_VAR.API_HOST}/api/v1/user?pageNo=${page}&size=${pageSize}&sortColumn=${sortColumn}&sortDirection=${sortDirection}&filters=${filters}`;
            const response = await axios.get(url,this.headers);
            return response;
        } 
        catch (error) {
            throw error.response.data.error;
        }
    }

    async getuserbyid(u_id) { 
        try {    
            const url = `${ENV_VAR.API_HOST}/api/v1/user/${u_id}`;
            const response = await axios.get(url,this.headers);
            return response;
        } 
        catch (error) {
            throw error.response.data.error;
        }
    }

    async createNewuser(obj) {
        try {
            const url = `${ENV_VAR.API_HOST}/api/v1/user`;
            const response = await axios.post(url,obj,this.headers);
            return response;
        } 
        catch (error) {
            throw error.response.data.error;
        }
    }

    async updateuser(obj) {
        try {
            const url = `${ENV_VAR.API_HOST}/api/v1/user`;
            const response = await axios.put(url,obj,this.headers);
            return response;
        } 
        catch (error) {
            throw error.response.data.error;
        }
    }

    async deleteuserbyid(userid) {
        try {
            const url = `${ENV_VAR.API_HOST}/api/v1/user/${userid}`;
            const response = await axios.delete(url, 
                   {
                    id: userid
                   }, this.headers);
            return response;
        } 
        catch (error) {
            throw error.response.data.error;
        }
      }
}

export default new userservice();