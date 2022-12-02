import axios from "../custom/axios";

export const sendFile = async (url: string, file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post(url, formData);
    return response.data;
}