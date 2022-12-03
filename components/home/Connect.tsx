import { Button, Box } from "@chakra-ui/react";
import { useAuthenticated } from "../../hooks/useAuthenticated";

const Connect = () => {
   
    const auth = useAuthenticated();

    return (
        <Box marginTop="1.5rem">
            {!auth.isWalletConnected ?
                <Button bgColor="pink.300" onClick={auth.connectWallet}>Connect</Button> :
                <Button>Connected</Button>}
        </Box>
    )
}

export default Connect;