import styled from "@emotion/styled";
import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const HeroWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;

const Title = styled("h1")`
  font-size: 4vh;
  line-height: 4rem;
`;

const TitleAccent = styled("span")`
  font-weight: 400;
`;

const Subtitle = styled("h2")`
  font-weight: 400;
  font-size: 1.2rem;
`;

const HeroImageWrapper = styled("div")`
  width: 40vw;
`;

const Hero = () => {
  //get hero image
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "bbbGlobe" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 1150, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <HeroWrapper>
      <div>
        <Title>
          Changing
          <TitleAccent> the </TitleAccent>
          World <br />
          Bit
          <TitleAccent> by </TitleAccent>
          Bit
        </Title>
        <Subtitle>Invest and donate to charity simultaneously.</Subtitle>
        <button>Buy now</button>
      </div>
      <HeroImageWrapper>
        <Img fluid={data.file.childImageSharp.fluid} alt="Globe animation" />
      </HeroImageWrapper>
    </HeroWrapper>
  );
};

export default Hero;
