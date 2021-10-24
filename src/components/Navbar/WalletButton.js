import React, { useState, useEffect } from "react";
import {
  BscConnector,
  UserRejectedRequestError,
} from "@binance-chain/bsc-connector";
import {
  ConnectionRejectedError,
  useWallet,
  UseWalletProvider,
} from "use-wallet";
import styled from "@emotion/styled";

const Button = styled("button")`
  padding-top: 0;
  border-radius: 12px;
  height: 3rem;
  border: 1px solid #ff734e;
  background-color: rgba(255, 115, 78, 0.2);
  color: #ff734e;
  transition: all 0.2s;
`;

const WalletButton = () => {
  const { account, connect, reset, status } = useWallet();
  console.log("status: " + status);
  console.log("account" + account);
  return (
    <>
      {status === "disconnected" ? (
        <Button onClick={() => connect("bsc")}>Connect</Button>
      ) : (
        <Button onClick={() => reset()}>Disconnect</Button>
      )}
      {account && <p>Connected as {account}</p>}
    </>
  );
};

export default WalletButton;
