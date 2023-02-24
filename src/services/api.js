import axios from "axios";

const config = {
    withCredentials: true,
    baseURL: 'http://example.palmo/api/',
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH',
    //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    // },
    headers: {
        "content-type": "application/json",
    }
}
const apiToken = localStorage.getItem("authToken");
if (apiToken) {
    config.headers.Authorization = `Bearer ${apiToken}`;
}
const axiosInstance = axios.create(config);

export {axiosInstance}