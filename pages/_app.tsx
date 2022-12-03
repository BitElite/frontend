import '../styles/globals.scss'
import { ChakraProvider } from '@chakra-ui/react'
import { MetaMaskProvider } from "metamask-react";
import Layout from "../components/layout/Layout";
import { store } from '../src/store'
import { Provider } from 'react-redux'

type AppProps = {
  Component: React.ComponentType
  pageProps: Record<string, unknown>
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <MetaMaskProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MetaMaskProvider>
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp