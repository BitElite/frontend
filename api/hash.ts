import axios from "../custom/axios";
import config from "../config";


const { BASE_URL } = config;

export const sendHash=async (hash:string, cid:string)=>{
    const response = await axios.post(`${BASE_URL}/v1/transaction/verify`, {
        transactionHash: hash,
        ipfsCid:cid
    });
    console.log(response)
    return response.data;
}

export const getPrice=async (cid:string, fileSize:number)=>{
    const response = await axios.post(`${BASE_URL}/v1/asset/price`, {
        fileSize: fileSize,
        ipfsCid:cid
    });
    console.log(response)
    return response.data;
}