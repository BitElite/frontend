import '../styles/globals.scss'
import { ChakraProvider } from '@chakra-ui/react'
import { MetaMaskProvider } from "metamask-react";
import Layout from "../components/layout/Layout";
// import { store } from '../src/store'
// import { Provider } from 'react-redux'

type AppProps = {
  Component: React.ComponentType
  pageProps: Record<string, unknown>
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MetaMaskProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MetaMaskProvider>
    </ChakraProvider>
  )
}

export default MyApp