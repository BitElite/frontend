import { ethers } from "ethers";
// @ts-ignore
import ABI from "../contract/ABI.json"

const contractAddr="0x13fd12E2B1e2e9517AB7D2175e3e64D9663dBd8b"


export async function withdrawFunds(){
    // @ts-ignore
    if(typeof window.ethereum!=="undefined"){
        // @ts-ignore
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(
            contractAddr,
            ABI.abi,
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

export async function pay(price:string, CID:string){
    console.log("triggered");
    
    // @ts-ignore
    if(typeof window.ethereum!=="undefined"){
        // @ts-ignore
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(
            contractAddr,
            ABI.abi,
            signer
        );

        try{
            const transaction = await contract.receivePay(
                CID,
                { value: ethers.utils.parseEther(price) }
            );
            await transaction.wait()
            return transaction.hash
        } catch (error){
            console.log(error);
        }
    }
}


export async function addOwner(CID:string, size:string){
    // @ts-ignore
    if(typeof window.ethereum!=="undefined"){
        // @ts-ignore
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(
            contractAddr,
            ABI.abi,
            signer
        );
        try{
            const transaction = await contract.addOwner(CID, size, signer.getAddress());
            await transaction.wait()
            console.log(`${transaction.hash} was mined`);
        } catch (error){
            console.log(error);
        }
    }
}

export async function getRemainingBalance(address:string){
    // @ts-ignore
    if(typeof window.ethereum!=="undefined"){
        // @ts-ignore
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(
            contractAddr,
            ABI.abi,
            signer
        );

        const availableBalance=await contract.refundPending(address);
        return availableBalance;
    }
}