import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import useOutsideClick from "../utils/useOutsideClick";
import {
  NavWrapper,
  PageContent,
  PageFooter,
  PageWrapper,
  SideBarWrapper,
} from "./MainLayout.style";

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
    <>
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
          <SearchBar />
          <div className="page-wrapper">{children}</div>
        </PageContent>

        <PageFooter>
          <Footer />
        </PageFooter>
      </PageWrapper>
    </>
  );
};

export default MainLayout;
