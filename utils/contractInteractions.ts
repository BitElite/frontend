import { ethers } from "ethers";
// @ts-ignore
import ABI from "../contract/ABI.json"

const contractAddr="0x82F4Ee0459Dd1fD9c58DbCD07691C35638605608"


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
                ethers.utils.formatBytes32String("hello"),
                { value: ethers.utils.parseEther(price) }
            );
            await transaction.wait()
            return transaction.hash
        } catch (error){
            console.log(error);
        }
    }
}


export async function addOwner(CID:string,size:string){
    const bytes32CID=ethers.utils.formatBytes32String(CID);
    
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
            const transaction = await contract.addOwner(bytes32CID,size);
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