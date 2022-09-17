import React from "react";
import styles from "styled-components";
import globalStyles from "../assets/global-styles";
import bg from "../assets/auth-bg.jpg";

const Wrapper = styles.div`
  display: flex;
  min-height: 100%;
  width: 100%;

  .component-container{
    display: flex;
    padding: 1rem;
    width: 100%;
    min-height: 100%;
    align-items: center;
    justify-content: center;
    background-image: url(${bg});
    background-size: cover;
    backgroud-repeat: repeat;
  };

  .image{
    display: none;
  };

  @media (min-width: ${globalStyles.screens.lg}){
    .component-container{
      width: 50%;
      background-image: unset;
    };
  
    .image{
      display: block;
      width: 50%;
      background-image: url(${bg});
      background-size: cover;
      backgroud-repeat: repeat;
    };
  };
  `;

const AuthLayout = ({ children }) => {
  return (
    <Wrapper>
      <div className="component-container">{children}</div>
      <div className="image">{/* <img src={bg} alt="login" /> */}</div>
    </Wrapper>
  );
};

export default AuthLayout;
