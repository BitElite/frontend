import axios from "../custom/axios";
import config from "../config";


const { BASE_URL } = config;

export const sendHash=async (hash:string)=>{
    const response=await axios.post(`${BASE_URL}/hash`,hash);
    return response.data;
}