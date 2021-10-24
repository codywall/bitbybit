import React from "react";
import Header from "../components/Navbar/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import styled from "@emotion/styled";
import {
  BscConnector,
  UserRejectedRequestError,
} from "@binance-chain/bsc-connector";
import {
  ConnectionRejectedError,
  useWallet,
  UseWalletProvider,
} from "use-wallet";

// styles
const pageStyles = {
  backgroundColor: "black",
  margin: 0,
  maxWidth: "100%",
  minHeight: "100wh",
  color: "white",
  fontFamily: "Roboto, sans-serif",
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const PageWrapper = styled("div")`
  max-width: 750px;
  margin: 0 auto;
`;

// markup
const IndexPage = () => {
  return (
    <UseWalletProvider
      connectors={{
        bsc: {
          web3ReactConnector() {
            return new BscConnector({ supportedChainIds: [56, 97] });
          },
          handleActivationError(err) {
            if (err instanceof UserRejectedRequestError) {
              return new ConnectionRejectedError();
            }
          },
        },
      }}
    >
      <main style={pageStyles}>
        <PageWrapper>
          <title>BitByBit</title>
          <Header />
          <Hero />
          <About />
        </PageWrapper>
      </main>
    </UseWalletProvider>
  );
};

export default IndexPage;
