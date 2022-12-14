import React from "react";
import styles, { css, keyframes } from "styled-components";

const TransparentScreen = styles.div`
  position: fixed;
  background-color: black;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  z-index: 1000;
  `;

const Progress = styles.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: white;
    z-index: 1001;
  `;

const loading = keyframes`
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
`;

const round = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const ComitSpin = styles.div`
animation: ${(props) =>
  css`
    ${loading} ${props.duration}s infinite ease, ${round} ${props.duration}s infinite ease
  `};
  border-radius: 50%;
  color: ${(props) => props.color};
  font-size: ${(props) =>
    css`
      ${props.size}px
    `};
  height: 1em;
  margin: 2rem auto;
  overflow: hidden;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  width: 1em;
`;

const Loading = ({ text, enabled }) => {
  return (
    <>
      {enabled && (
        <>
          <TransparentScreen>
            <Progress>
              <ComitSpin color="white" size={40} duration={1.7} />
              <span>{text || "???????????? ????????????????"}</span>
            </Progress>
          </TransparentScreen>
        </>
      )}
    </>
  );
};

export default Loading;
