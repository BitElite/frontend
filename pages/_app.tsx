import '../styles/globals.scss'
import { ChakraProvider } from '@chakra-ui/react'
import { MetaMaskProvider } from "metamask-react";
import Layout from "../components/layout/Layout";
import Head from 'next/head';

type AppProps = {
  Component: React.ComponentType
  pageProps: Record<string, unknown>
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MetaMaskProvider>
        <Layout>
          <Head>
            <meta name="title" content="BitElite" />
            <meta name="description" content="Upload files to filecoin, but pay less." />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="/" />
            <meta property="og:title" content="BitElite" />
            <meta property="og:description" content="Upload files to filecoin, but pay less." />
            <meta property="og:image" content="/page.png" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="/" />
            <meta property="twitter:title" content="BitElite" />
            <meta property="twitter:description" content="Upload files to filecoin, but pay less." />
            <meta property="twitter:image" content="/page.png" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </MetaMaskProvider>
    </ChakraProvider>
  )
}

export default MyApp