import { Button } from "@chakra-ui/react";
import { useMetaMask } from "metamask-react";
import signMessage from "../utils/signMessage";

const Connect = () => {
    const { status, connect, chainId, switchChain } = useMetaMask();

    const connectToMetamask = async () => {
        await connect()
        if (isChainEthereum(chainId as string)) {
            await switchChain("0x7AB7")
        }
        await signMessage("Message")
    }

    const isChainEthereum = (chainId: string) => {
        return chainId === "0x1"
    }

    const isConnected = status === "connected";

    return (
        !isConnected ?
            <Button bgColor="pink.300" onClick={connectToMetamask}>Connect</Button> :
            <Button>Connected</Button>
    )
}

export default Connect;