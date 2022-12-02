import { Button, Box } from "@chakra-ui/react";
import { useMetaMask } from "metamask-react";
import signMessage from "../../utils/signMessage";
import { useRouter } from "next/router";

const Connect = () => {
    const { status, connect, chainId, switchChain } = useMetaMask();
    const router = useRouter();

    const connectToMetamask = async () => {
        await connect()
        if (isChainEthereum(chainId as string)) {
            await switchChain("0x7AB7")
        }
        await signMessage("Signing");
        router.push("file")
    }

    const isChainEthereum = (chainId: string) => {
        return chainId === "0x1"
    }

    const isConnected = status === "connected";

    return (
        <Box marginTop="1.5rem">
            {!isConnected ?
                <Button bgColor="pink.300" onClick={connectToMetamask}>Connect</Button> :
                <Button>Connected</Button>}
        </Box>
    )
}

export default Connect;