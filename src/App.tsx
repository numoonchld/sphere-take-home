import React, { useEffect } from "react";
import { FC } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import AvailablePreSales from "./components/AvailablePreSales";
import { Route, Routes } from "react-router-dom";
import PreSaleCreator from "./components/PreSaleCreator";

declare const window: any;

const App: FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <section className="main-area">
        <div className="user-login-area">| Discord | Wallet |</div>
        <Routes>
          <Route path="/" element={<AvailablePreSales />} />
          <Route path="/creator" element={<PreSaleCreator />} />
        </Routes>
      </section>
    </div>
  );
};

export default App;
