import axios from "axios";

const API_CALL = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 10000,
    headers: { 'Authorization': 'bearer' }
});

export { API_CALL }