import React from "react";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import backgroundIMG from "../assets/images/backgroundNew.jpg";
import Block from "../components/TextPicBlock/TextPicBlock";

const Hero: React.FC = () => {
  return (
    <Root className="xl:px-24">
      <NavBar />
      <div className="text__part">
       <Block />
      </div>
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  width: 100%;
  min-height: 90vh;
  background-image: url(${backgroundIMG});
  background-position: center;
  background-size: cover;

  .text__part{
    min-height: 60vh;
    display: grid;
    place-items: center;
    @media screen and (max-width: 1400px){
      min-height: 80vh;
    }
  }
`;
export default Hero;
