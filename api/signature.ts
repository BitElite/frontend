import axios from "../custom/axios";


export const sendSignature = async (url: string, signature: string) => {
    const response = await axios.post(url, { signature });
    return response.data;
};


