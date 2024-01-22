import { IxEthereumConnector } from '@intellax/ix-ethereum-connector';

const ixConnector = new IxEthereumConnector({
    projectId: '45f7be8d476b33df86ee81745c666090',
    testnet: true,
    debug: true,
});

export default ixConnector;
