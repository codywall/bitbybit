// Logo.js
import React from "react";
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
  return <Button>Connect Wallet</Button>;
};

export default WalletButton;
