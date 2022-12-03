import axios from "../custom/axios";
import config from "../config";

const { BASE_URL } = config;

export const sendFile = async (file: File) => {
    const formData = new FormData();
    formData.append(`file`, file);
    const response = await axios.post(`${BASE_URL}/file`, formData);
    return response.data;
}