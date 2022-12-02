import '../styles/globals.scss'
import { ChakraProvider, useColorModeValue } from '@chakra-ui/react'
import { chains, wagmiClient } from '../src/connect'
import { darkTheme, lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Router } from 'next/router'

type AppProps = {
  Component: React.ComponentType
  pageProps: Record<string, unknown>
}

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on('routeChangeStart', nProgress.start);
  Router.events.on('routeChangeError', nProgress.done);
  Router.events.on('routeChangeComplete', nProgress.done);

  return (
    <ChakraProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  )
}

export default MyApp