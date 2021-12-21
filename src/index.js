import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

//Import Thirdweb 
import {ThirdwebWeb3Provider} from '@3rdweb/hooks';

//include chains to support 
// 4 = rinkeby 
// 1 = mainnet
// id are here https://besu.hyperledger.org/en/stable/Concepts/NetworkID-And-ChainID/
const supportedChainIds = [4];

//wallet tye to support
//metamask is an injected wallet 
const connectors = {
  injected: {},
}

// Render the App component to the DOM
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebWeb3Provider
      connectors ={connectors}
      supportedChainIds = {supportedChainIds}
      >
        <div className="landing"> 
          <App />
        </div>
    </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
