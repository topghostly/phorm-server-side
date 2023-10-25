import React from "react";
import Hero from "./Hero";
import TrustedSection from "../components/TrustedSection";
import TextPicBlockTwo from "../components/TextPicBlock/TextPicBlockTwo";

const LandingPage: React.FC = () => {
  return (
    <div className="flex__box">
      <Hero />
      <TrustedSection />
      <TextPicBlockTwo />
    </div>
  );
};

export default LandingPage;
