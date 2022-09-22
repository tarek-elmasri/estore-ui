import React from "react";
import { useState } from "react";
import styles, { css } from "styled-components";
import globalStyles from "../../assets/global-styles";

const Wrapper = styles.div`
  position: relative;
  //width: 100%
  display: flex;
  background-color: white;
  align-items: center;
  border: none;
  ${(props) =>
    props.focus
      ? css`
          border-bottom: var(--deep-blue) solid 1px;
        `
      : css`
          border-bottom: var(--offwhite) solid 1px;
        `}

  
  div{
    margin-left: 0.25rem;
    opacity: .5;
  };
  input{
    width: 100%;
    outline: none;
    appearance: none;
    border: none;
    font-size: 14px;
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

const TextBox = ({ className, icon, ...other }) => {
  const [focused, setFocused] = useState(false);

  return (
    <Wrapper className={className} focus={focused}>
      <div>{icon && icon}</div>

      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...other}
      />
    </Wrapper>
  );
};

export default TextBox;
