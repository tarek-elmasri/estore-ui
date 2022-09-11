import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useOutsideClick from "../utils/useOutsideClick";
import {
  NavWrapper,
  PageContent,
  PageFooter,
  PageWrapper,
  SideBarWrapper,
} from "./style";

const MainLayout = ({ children }) => {
  const navMenuIconRef = useRef(null);
  const sidebarRef = useRef(null);
  const pageContentRef = useRef(null);
  const sidebarOutsideClick = useOutsideClick([sidebarRef, navMenuIconRef]);

  const [showSideMenu, setShowSideMenu] = useState(false);

  useEffect(() => {
    if (sidebarOutsideClick) setShowSideMenu(false);
  }, [sidebarOutsideClick]);

  useEffect(() => {
    if (showSideMenu) {
      sidebarRef.current.classList.add("sidebar-active");
      pageContentRef.current.style.filter = "brightness(50%)";
    } else {
      sidebarRef.current.classList.remove("sidebar-active");
      pageContentRef.current.style.filter = "brightness(100%)";
    }
  }, [showSideMenu]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <NavWrapper>
        <Navbar
          ref={navMenuIconRef}
          toggleSideMenu={() => setShowSideMenu((prev) => !prev)}
        />
      </NavWrapper>
      <PageWrapper>
        <SideBarWrapper ref={sidebarRef}>
          <Sidebar />
        </SideBarWrapper>

        <PageContent ref={pageContentRef}>
          <h1>search bar</h1>
          <div style={{ marginTop: "2rem" }}>{children}</div>
        </PageContent>

        <PageFooter>
          <div>Footer</div>
        </PageFooter>
      </PageWrapper>
    </div>
  );
};

export default MainLayout;
