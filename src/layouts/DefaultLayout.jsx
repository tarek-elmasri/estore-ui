import React from "react";
import {
  LayoutWrapper,
  NavbarWrapper,
  PageContent,
  PageFooter,
  SidebarWrapper,
} from "./DefaultLayout.styles";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const DefaultLayout = ({ children }) => {
  const [sidebarIsActive, setSidebarIsActive] = useState(false);
  const toggleSideMenu = () => {
    console.log(sidebarIsActive);
    setSidebarIsActive((prev) => !prev);
  };

  return (
    <LayoutWrapper>
      <NavbarWrapper>
        <Navbar toggleSideMenu={toggleSideMenu} />
      </NavbarWrapper>

      <CSSTransition in={sidebarIsActive} timeout={400} classNames="animate">
        <SidebarWrapper isFloating={sidebarIsActive} className="animate">
          <Sidebar isFloating={sidebarIsActive} />
        </SidebarWrapper>
      </CSSTransition>

      <PageContent>
        <SearchBar />
        <div className="page-wrapper">{children}</div>
      </PageContent>

      <PageFooter>
        <Footer />
      </PageFooter>
    </LayoutWrapper>
  );
};

export default DefaultLayout;
