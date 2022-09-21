import { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import styles, { css } from "styled-components";
import { CSSTransition } from "react-transition-group";
import { useImperativeHandle } from "react";

const OpaqueBackground = styles.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.7;
  z-index: 2000;
`;

const BarSection = styles.div`
  position: fixed;
  top: ${(props) => props.top};
  ${(props) =>
    props.side === "left"
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
  height: ${(props) => props.height};
  overflow: auto;
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  z-index: 2005;


  &.active-enter{
    ${(props) =>
      props.side === "left"
        ? css`
            left: ${`-${props.width}`};
          `
        : css`
            right: ${`-${props.width}`};
          `}
  };

  &.active-enter-active{
    ${(props) =>
      props.side === "left"
        ? css`
            left: 0;
            transition: left 400ms linear;
          `
        : css`
            right: 0;
            transition: right 400ms linear;
          `}    
  };

  &.active-exit{
    ${(props) =>
      props.side === "left"
        ? css`
            left: 0;
          `
        : css`
            right: 0;
          `}
  };

  &.active-exit-active{
    ${(props) =>
      props.side === "left"
        ? css`
            left: ${`-${props.width}`};
            transition: left 400ms linear;
          `
        : css`
            right: ${`-${props.width}`};
            transition: right 400ms linear;
          `}
  };
`;

const Drawer = forwardRef(
  ({ component, height, width, side, backgroundColor, top }, ref) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      toggle: () => setOpen((prev) => !prev),
    }));

    return (
      <>
        {open && (
          <OpaqueBackground onClick={() => setOpen(false)}></OpaqueBackground>
        )}
        <CSSTransition
          in={open}
          timeout={400}
          classNames="active"
          unmountOnExit
        >
          <BarSection
            height={height}
            width={width}
            side={side}
            top={top}
            backgroundColor={backgroundColor}
          >
            {component}
          </BarSection>
        </CSSTransition>
      </>
    );
  }
);

Drawer.propTypes = {
  component: PropTypes.element,
  height: PropTypes.string,
  width: PropTypes.string,
  top: PropTypes.string,
  side: PropTypes.oneOf(["right", "left"]),
};

Drawer.defaultProps = {
  component: null,
  height: "100vh",
  width: "16rem",
  top: "0",
  side: "left",
  backgroundColor: "white",
};
Drawer.displayName = "Drawer";

export default Drawer;
