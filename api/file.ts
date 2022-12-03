import axios from "../custom/axios";
import config from "../config";

const { BASE_URL } = config;

export const sendFile = async (file: File, cid:string) => {
    console.log(file)
    const formData = new FormData();
    formData.append(`files`, file);
    formData.append("cid", cid);
    const response = await axios.post(`${BASE_URL}/v1/asset`, formData);
    return response.data.data.response;
}