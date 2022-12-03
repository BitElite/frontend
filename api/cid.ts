import axios from "../custom/axios";
import config from "../config";


const { BASE_URL } = config;


export const sendCid = async (cid: string) => {
    try {
        console.log("CID")
        console.log(cid)
        const response = await axios.post(`${BASE_URL}/v1/asset/ipfsCid`, { ipfs_cid: cid });
        return response.data.data.asset.message
    } catch (err) { 
        console.log(err)
    }
}