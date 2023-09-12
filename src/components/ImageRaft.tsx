import React from "react";
import styled from "styled-components";

const ImageRaft: React.FC = () => {
  return (
    <Case>
      <p>
        Meet ImageRaft : Our beautifly new image download partner
        {/* <img src={arrow} className="arrow" /> */}
        <svg
          className="arrow"
          width="15px"
          height="15px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 7L15 12L10 17"
            stroke="currentColor"
            stroke-width="4.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </p>
    </Case>
  );
};

const Case = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  padding: 7px 12px;
  border-radius: 100px;
  border: solid 1px #d8d8d8;
  cursor: pointer;

  p {
    font-size: 11px;
    font-weight: bold;
    img {
      width: 15px;
      display: inline-block;
      margin-right: 6px;
    }
    .arrow {
      margin-right: 0px;
      margin-left: 7px;
      color: black;
      width: 15px;
      transition: all 0.3s ease-in-out;
      display: inline-block;
    }
  }

  :hover {
    .arrow {
      color: grey;
      transition: all 0.3s ease-in-out;
      transform: translateX(6px);
    }
  }
`;
export default ImageRaft;
