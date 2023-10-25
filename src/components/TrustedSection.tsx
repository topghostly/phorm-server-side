import styled from "styled-components";
import imageRaftLogo from "../assets/images/imageraftLogo.png";
import agentMeetLogo from "../assets/images/agentMeetLogo.png";

function TrustedSection() {
  return (
    <Section>
      <div className="text__holder py-5">
        <p className="text">High ratings and trusted by</p>
      </div>
      <div className="image__holder py-5">
        <img src={imageRaftLogo} alt="imagegRaft" />
        <img src={agentMeetLogo} alt="agentMeet" />
      </div>
    </Section>
  );
}

const Section = styled.div`
  position: relative;
  padding: 20px 10px;
  height: fit-content;

  .image__holder {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    gap: 40px;

    img {
      width: 180px;
    }
  }

  .text__holder {
    display: grid;
    place-content: center;

    p.text {
      color: #b1b1b1;
    }
  }
`;

export default TrustedSection;
