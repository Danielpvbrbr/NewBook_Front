import axios from "axios";
const Token = localStorage.getItem("token");

export const API = axios.create({
    baseURL: "https://localhost:7294"
    //baseURL: "https://apinewbook.azurewebsites.net"
});

API.defaults.headers.common['Authorization'] = !!Token ? `Bearer ${Token}` : null;
API.defaults.headers.post['Content-Type'] = 'application/json';
