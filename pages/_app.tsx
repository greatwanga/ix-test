import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { WagmiConfig } from '@intellax/ix-ethereum-connector/wagmi';
import ixConnector from '@/utils/intellax/ixConnector';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <WagmiConfig config={ixConnector.wagmiConfig}>
            <Component {...pageProps} />;
        </WagmiConfig>
    );
}
