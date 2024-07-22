import axios from "axios";
import { checkToken } from "../../utils/TokenHandler";

const baseURL = "http://13.50.172.202:3001/v0";

const instance = axios.create({
    baseURL,
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
});

// Function to add the access token to the headers
export const addAccessToken = (token) => {
    if (!token) {
        const { access_token } = checkToken();
        instance.defaults.headers.common["Authorization"] = `${access_token ? access_token : ""}`;
    } else {
        instance.defaults.headers.common["Authorization"] = `${token}`;
    }
    instance.defaults.headers.common["Accept"] = `application/json`;
};



// Add the access token to headers
addAccessToken();

const Api = {
    get: async (url, params) => {
        try {
            const response = await instance.get(url, { params });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    post: async (url, data, params) => {
        try {
            const response = await instance.post(url, data, { params });
            console.log(response)
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    put: async (url, data, params) => {
        try {
            const response = await instance.put(url, data, { params });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    delete: async (url, params) => {
        try {
            const response = await instance.delete(url, { params });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default Api;
