import React from "react";
import { ItemCard, Wrapper } from "./style";
import Textbox from "../../components/Textbox";

const Items = () => {
  return (
    <Wrapper>
      <div className="items__header">
        <div className="header-title">
          <i className="ti ti-apps"></i>

          <h1>المنتجات</h1>
        </div>
        <div className="header-filter-btn">
          <i className="ti ti-filter"></i>
          <span>تصفية</span>
        </div>
      </div>
      <div className="items__body">
        <ItemCard>
          {/* <img /> */}
          <div className="flex">
            <Textbox
              className="textbox"
              icon={<i className="ti ti-filter" />}
            />
            <div className="dollar">$</div>
          </div>
          <div className="flex">
            <Textbox icon={<i className="ti ti-user" />} />
          </div>
        </ItemCard>
        <ItemCard>item2</ItemCard>
        <ItemCard>item3</ItemCard>
      </div>
    </Wrapper>
  );
};

export default Items;
