import React from "react";
import PropTypes from "prop-types";
import styles, { css } from "styled-components";
import { useState, useEffect, useRef } from "react";
import useOutsideClick from "../../utils/useOutsideClick";

const Wrapper = styles.div`
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
  
  background-color: white;
  color: black;
  height: 2.5rem;
  min-width: 10rem;
  position: relative;
  .display{
    background-color: inherit;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem;
    border: var(--offwhite) solid 1px;
    
    &:hover{
      cursor: pointer;
    };
  };

  .options{
    background-color: inherit;
    z-index: 100;
    position: absolute;
    top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    border: var(--offwhite) solid 1px;
    border-top: none;
    
    .option{
      display: flex;
      align-items: center;
      justify-content: start;
      width: 100%;
      padding: .5rem;
      border-bottom: var(--offwhite) solid 1px;
      cursor: pointer;

      &:hover{
        background-color: var(--offwhite);
      };
    };

    .selected{
      background-color: var(--offwhite);
    };

    .option:last-of-type{
      border-bottom: none;
    };
  };
`;

const Combo = ({
  name,
  options,
  defaultOption,
  onChange: onOptionChange,
  ...others
}) => {
  const [choice, setChoice] = useState(defaultOption);
  const [toggle, setToggle] = useState(false);

  const comboRef = useRef();

  const outsideClick = useOutsideClick([comboRef]);

  useEffect(() => {
    if (outsideClick && toggle) setToggle(false);
    // eslint-disable-next-line
  }, [outsideClick]);

  useEffect(() => {
    if (onOptionChange) onOptionChange(name, choice);

    // eslint-disable-next-line
  }, [choice.key]);

  return (
    <Wrapper ref={comboRef} {...others}>
      <div className="display" onClick={() => setToggle((prev) => !prev)}>
        <span>{choice.value}</span>
        {toggle ? (
          <i className="ti ti-chevron-up"></i>
        ) : (
          <i className="ti ti-chevron-down"></i>
        )}
      </div>

      {toggle && (
        <div className="options">
          {options.map((option) => (
            <div
              key={option.key}
              className={`option ${choice.key === option.key && "selected"}`}
              onClick={() => {
                setChoice((prev) => ({ ...prev, ...option }));
                onOptionChange(name, option);
                setToggle(false);
              }}
            >
              <span>{option.value}</span>
            </div>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

Combo.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  defaultOption: PropTypes.any,
  onChange: PropTypes.func,
};

Combo.defaultProps = {
  name: null,
  options: [],
  defaultOption: {},
  onChange: () => null,
};

export default Combo;
