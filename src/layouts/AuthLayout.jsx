import React from "react";
import styles from "styled-components";
import globalStyles from "../assets/global-styles";
import bg from "../assets/auth-bg.jpg";

const Wrapper = styles.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  width: 100%;
  overflow: auto;
  
  .component-container{
    padding: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  };

  .image{
    display: none;
  };

  @media (min-width: ${globalStyles.screens.md}){
    display: grid;
    .component-container{
      padding: 0;
      width: 100%;
      height: 100%;
    };

    .image{
      display: inline-grid;
      height: 100%;
      width: 100%;
      img{
        width: 100%;
        height: 100vh;
      }
    };
  };
`;

const AuthLayout = ({ children }) => {
  return (
    <Wrapper>
      <div className="component-container">{children}</div>
      <div className="image">
        <img src={bg} alt="login" />
      </div>
    </Wrapper>
  );
};

export default AuthLayout;
