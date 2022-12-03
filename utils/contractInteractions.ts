import { ethers } from "ethers";
// @ts-ignore
import ABI from "../contracts/ABI.json";

const contractAddr="Paste address here"


export async function withdrawFunds(){
    // @ts-ignore
    if(typeof window.ethereum!=="undefined"){
        // @ts-ignore
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(
            contractAddr,
            ABI,
            signer
        );

        try{
            const transaction = await contract.withDrawUser()
            await transaction.wait()
            console.log(`${transaction.hash} was mined`);
        } catch (error){
            console.log(error);
        }
    }
}

