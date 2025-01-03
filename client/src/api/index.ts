import axios from "axios";

export const api = axios.create({
    baseURL: 'http://84.252.134.13/api',
    timeout: 10000,
});