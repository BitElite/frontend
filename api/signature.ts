import axios from "../custom/axios";
import config from "../config";

const { BASE_URL } = config;


export const sendSignature = async (signature: string) => {
    const response = await axios.post(`${BASE_URL}/v1/user`, { signed_msg:signature });
    return response.data;
};