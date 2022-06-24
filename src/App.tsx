import "./App.css";
import { SelectChain } from "./components";

const App = () => {
    const chain_data = [
        {
            chainName: "Ethereum",
            chainIcon: "assets/image/ethereum.svg",
            coinName: "USDT",
            coinIcon: "assets/image/usdt.svg",
        },
        {
            chainName: "BSC",
            chainIcon: "assets/image/bsc.svg",
            coinName: "BUSD",
            coinIcon: "assets/image/busd.svg",
        },
        {
            chainName: "DBX Smart Network",
            chainIcon: "assets/image/dbx.svg",
            coinName: "XUS",
            coinIcon: "assets/image/xus.svg",
        },
    ];
    return <SelectChain data={chain_data} onChange={() => {}} />;
};

export default App;
