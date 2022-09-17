import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, SearchBox, UserControl } from "./style";
import { CSSTransition } from "react-transition-group";
import formatedContent from "./data";

const SearchBar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showComboList, setShowComboList] = useState(false);
  const [searchContent, setSearchContent] = useState({
    value: "",
    searchOption: formatedContent[0],
  });

  return (
    <Container>
      <SearchBox>
        <input
          type="text"
          placeholder={searchContent.searchOption.placeholder}
          value={searchContent.value}
          onChange={({ target }) =>
            setSearchContent((prev) => ({ ...prev, value: target.value }))
          }
        />

        <div
          className="combo"
          onClick={() => setShowComboList((prev) => !prev)}
        >
          <span>{searchContent.searchOption.caption}</span>
          <i className="ti ti-chevron-down"></i>

          <CSSTransition
            in={showComboList}
            classNames="scale-transit"
            timeout={400}
            unmountOnExit
          >
            <div className="combo-list">
              {formatedContent.map((option, i) => (
                <span
                  key={i}
                  className={
                    option.type === searchContent.searchOption.type
                      ? "active"
                      : null
                  }
                  onClick={() =>
                    setSearchContent((prev) => ({
                      ...prev,
                      searchOption: option,
                    }))
                  }
                >
                  {option.caption}
                </span>
              ))}
            </div>
          </CSSTransition>
        </div>

        <NavLink
          to={searchContent.searchOption.route + searchContent.value}
          className="search-btn"
        >
          <i className="ti ti-search"></i>
        </NavLink>
      </SearchBox>

      <UserControl>
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="user control"
          onClick={() => setShowUserMenu((prev) => !prev)}
        />
        <CSSTransition
          in={showUserMenu}
          timeout={400}
          classNames="scale-transit"
          unmountOnExit
        >
          <div className="user-menu">
            <NavLink className={"user-menu-item"} to="#">
              <i className="ti ti-user"></i>
              <span>الملف الشخصي</span>
            </NavLink>
            <NavLink className={"user-menu-item"} to="#">
              <i className="ti ti-power"></i>

              <span>تسجيل الخروج</span>
            </NavLink>
          </div>
        </CSSTransition>
      </UserControl>
    </Container>
  );
};

export default SearchBar;
