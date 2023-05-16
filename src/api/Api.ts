import axios from "axios";

const API = axios.create({
    baseURL: 'https://restcountries.com/v3.1/'
});

API.interceptors.request.use(
    (config) => {
        if (config?.headers) {
            config.headers.Accept = 'application/json';
        }

        return config;
    }
)

API.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status == 404) {
            window.location.href = '/error'
        } else {
            return Promise.reject(error);
        }
    }
)

export default API;
