import React from "react";
import styles from "styled-components";
import globalStyles from "../assets/global-styles";
import bg from "../assets/auth-bg.jpg";

const Wrapper = styles.div`
  display: flex;
  height: 100%;
  width: 100%;

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
    .component-container{
      width: 50%;
      height: 100%;
      flex: none;
    };

    .image{
      width: 50%;
      flex: none;
      display: block;
      img{
        width: 100%;
        height: 100%;
      };
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
