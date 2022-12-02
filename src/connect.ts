import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
    chain,
    configureChains,
    createClient,
    WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export const { chains, provider } = configureChains(
    [chain.polygonMumbai],
    [
        //@ts-ignore | returning undefined type 
        alchemyProvider({ apiKey: process.env["ALCHEMY_ID"] }),
        publicProvider()
    ]
);

export const { connectors } = getDefaultWallets({
    appName: 'BitElite',
    chains
});

export const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})
