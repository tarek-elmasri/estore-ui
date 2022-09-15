import React from "react";
import { useRef } from "react";
import styles from "styled-components";
import globalStyles from "../../assets/global-styles";

const Wrapper = styles.div`
  position: relative;
  width: 100%;
  
  input{
    padding-top: 10px 20px;
    width: 100%;
    outline: none;
    appearance: none;
    border: none;
    border-bottom: gray solid 2px;
    font-size: 17px;

    &:focus{
      border-color: ${globalStyles.theme.colors.bg_color};
    };
  };
  

  .textbox-label{
    display: flex;
    position: absolute;
    top: 10px;
    right: 20px;
    pointer-events: none;
    content: "";
    transition: all .2s ease;
  };

`;

const TextBox = (props) => {
  return (
    <Wrapper>
      <input {...props} />
    </Wrapper>
  );
};

export default TextBox;
