import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { NavbarContainer, UserMenu } from "./style";
import useOutsideClick from "../../utils/useOutsideClick";

const Navbar = React.forwardRef((props, ref) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef(null);
  const userMenuImageRef = useRef(null);
  const userMenuOutsideClick = useOutsideClick([userMenuRef, userMenuImageRef]);

  const navTabClass = ({ isActive }) =>
    `nav-tab ${isActive ? "nav-active" : null}`;

  useEffect(() => {
    if (userMenuOutsideClick) setShowUserMenu(false);
  }, [userMenuOutsideClick]);

  useEffect(() => {
    if (showUserMenu) {
      userMenuRef.current.classList.add("user-menu-active");
    } else {
      userMenuRef.current.classList.remove("user-menu-active");
    }
  }, [showUserMenu]);

  return (
    <NavbarContainer>
      <div className="nav">
        <i
          ref={ref}
          onClick={props.toggleSideMenu}
          className="ti ti-menu-2"
        ></i>

        <img
          className="logo"
          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
          alt="Estore"
        />

        <img
          ref={userMenuImageRef}
          className="user"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="logo"
          onClick={() => setShowUserMenu((prev) => !prev)}
        />
      </div>

      <UserMenu ref={userMenuRef}>
        <NavLink className={navTabClass} to="/login">
          <i className="ti ti-user"></i>
          <span>tag</span>
        </NavLink>

        <NavLink className={navTabClass} to="/as">
          <i className="ti ti-user"></i>
          <span>tag</span>
        </NavLink>

        <NavLink className={navTabClass} to="/df">
          <i className="ti ti-user"></i>
          <span>tag</span>
        </NavLink>
      </UserMenu>
    </NavbarContainer>
  );
});

Navbar.propTypes = {
  toggleSideMenu: PropTypes.func.isRequired,
};

Navbar.displayName = "Navbar";

export default Navbar;
