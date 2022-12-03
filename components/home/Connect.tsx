import { Button, Box } from "@chakra-ui/react";
import { useMetaMask } from "metamask-react";
import signMessage from "../../utils/signMessage";
import { useRouter } from "next/router";
import { sendSignature } from "../../api/signature";
import { useAuthenticated } from "../../hooks/useAuthenticated";

const Connect = () => {
    const { status, connect, chainId, switchChain } = useMetaMask();
    const router = useRouter();
    const auth = useAuthenticated();

    const connectToMetamask = async () => {
        await connect()
        if (isChainEthereum(chainId as string)) {
            await switchChain("0x7AB7")
        }
        const signature = await signMessage("Signing");
        const token = await sendSignature(signature);
        window.localStorage.setItem("token", token);
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