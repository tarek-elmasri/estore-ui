import { forwardRef, useState } from "react";
import styles from "styled-components";
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
  top: 0;
  left: 0;
  height: 100vh;
  overflow: auto;
  width: 16rem;
  background-color: white;
  z-index: 2005;


  &.active-enter{
    left: -16rem;
  };

  &.active-enter-active{
    left: 0rem;
    transition: left 400ms linear;
  };

  &.active-exit{
    left: 0;
  };

  &.active-exit-active{
    left: -16rem;
    transition: left 400ms linear;
  };
`;

const OptionsBar = forwardRef(({ children }, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    toggle: () => setOpen((prev) => !prev),
  }));

  return (
    <>
      {open && (
        <OpaqueBackground onClick={() => setOpen(false)}></OpaqueBackground>
      )}
      <CSSTransition in={open} timeout={400} classNames="active" unmountOnExit>
        <BarSection>{children}</BarSection>
      </CSSTransition>
    </>
  );
});

export default OptionsBar;
