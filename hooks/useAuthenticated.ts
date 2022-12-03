import { useEffect, useState } from "react";
import { useMetaMask } from "metamask-react";
import { useRouter } from "next/router";
import signMessage from "../utils/signMessage";
import { sendSignature } from "../api/signature";

export function useAuthenticated(){

    const [token, setToken] = useState()
    const { status, connect, chainId, switchChain } = useMetaMask();
    const router = useRouter()
    const [isConnected,setIsConnected] = useState(false)

    const connectToMetamask = async () => {
        await connect()
        if (isChainEthereum(chainId as string)) {
            await switchChain("0x7AB7")
        }
        const signature = await signMessage("Signing");
        // await sendSignature(signature)
        // const token = await sendSignature(signature);
        // window.localStorage.setItem("token", token);
        console.log("Triggered");
        
        router.push("/file")
    }

    const isChainEthereum = (chainId: string) => {
        return chainId === "0x1"
    }

    useEffect(() => { 
        const _token: string = window.localStorage.getItem('token') as string;
        //@ts-ignore
        setToken(_token)
        setIsConnected(status === "connected")
    }, [status])
    
 

    const auth = {
        connectWallet: connectToMetamask,
        isWalletConnected: isConnected,
        isAuthenticated: token=='null'?false:true,
        logout:()=>{
            window.localStorage.clear();
            setIsConnected(false)
            router.push("/")
        }
    }

    return auth;
}