import axios from "axios";

export const API = axios.create({
    //baseURL: "https://localhost:7294"
    baseURL: "https://apinewbook.azurewebsites.net"
});