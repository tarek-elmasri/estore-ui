import React from "react";
import { Container, SearchBox, UserControl } from "./style";

const SearchBar = () => {
  return (
    <Container>
      <SearchBox>
        <input type="text" placeholder="search here" />
        <div className="combo">
          <h1>caption</h1>
          <i className="ti ti-chevron-down text-s"></i>
        </div>
        <div className="search-btn">
          <i className="ti ti-search ti-fix"></i>
        </div>
      </SearchBox>
      <UserControl>
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="user control"
        />
      </UserControl>
    </Container>
  );
};

export default SearchBar;
