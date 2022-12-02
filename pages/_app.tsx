import '../styles/globals.scss'
import { ChakraProvider } from '@chakra-ui/react'
import { MetaMaskProvider } from "metamask-react";

type AppProps = {
  Component: React.ComponentType
  pageProps: Record<string, unknown>
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MetaMaskProvider>
        <Component {...pageProps} />
      </MetaMaskProvider>
    </ChakraProvider>
  )
}

export default MyApp