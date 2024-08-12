import axios from "axios";
import ENV_VAR from "../common";
import { createHeaders } from "./common/headers";

class validationService {
    constructor() {
        this.headers = createHeaders();
    }
  
async createValidation(obj) {
    try {
        const url = `${ENV_VAR.API_HOST}/api/v1/test_validation`;
        const response = await axios.post(url, obj ,this.headers);    
        return response;
    } 
    catch (error) {
        throw error.response.data.error;
    }
  }

async getAllValidations(testId) {  
    try { 
        const url = `${ENV_VAR.API_HOST}/api/v1/get_validationbystep/${testId}`;
        const response = await axios.get(url, this.headers);
        return response;
    } 
    catch (error) {
        throw error.response.data.error;
    }
  }

  async updateValidations(obj) {
    try {
        const url = `${ENV_VAR.API_HOST}/api/v1/test_validation`;
        const response = await axios.put(url,obj, this.headers);    
        return response;
    } 
    catch (error) {
        throw error.response.data.error;
    }
  }

  async deleteValidationById(id) {
    try { 
        const url = `${ENV_VAR.API_HOST}/api/v1/test_validation/${id}`;
        const response = await axios.delete(url, this.headers);   
        return response;
    } 
    catch (error) {
        throw error.response.data.error;
    }
  }
}

export default new validationService();