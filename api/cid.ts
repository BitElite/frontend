import axios from "../custom/axios";
import config from "../config";


const { BASE_URL } = config;


export const sendCid = async (cid: string) => {
    const response = await axios.post(`${BASE_URL}/cid`, cid);
    return response.data;
}