import React, { FC, useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import AvailablePreSales from "./components/AvailablePreSales";
import { Route, Routes } from "react-router-dom";
import PreSaleCreator from "./components/PreSaleCreator";

declare const window: any;

const App: FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>("");

  const connectWallet = async () => {
    const { solana } = window;
    if (solana) {
      const response = await solana.connect();
      setWalletAddress(response.publicKey.toString());
      setIsConnected(true);
    }
  };

  return (
    <div className="App">
      <Sidebar />
      <section className="main-area">
        <div className="user-login-area">
          {!isConnected && (
            <button onClick={connectWallet}>Connect Wallet</button>
          )}
          {isConnected && (
            <i className="fa-solid fa-wallet">
              &nbsp;&nbsp;&nbsp;&nbsp;{walletAddress}
            </i>
          )}
        </div>
        <Routes>
          <Route path="/" element={<AvailablePreSales />} />
          <Route path="/creator" element={<PreSaleCreator />} />
        </Routes>
      </section>
    </div>
  );
};

export default App;
