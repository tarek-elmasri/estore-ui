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
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
          <div className="item-card__body">
            <Textbox
              className="textbox"
              placeholder="أدخل اسم المنتج"
              icon={<i className="ti ti-writing" />}
            />
            <div className="flex">
              <Textbox
                className="textbox"
                placeholder="السعر"
                icon={<i className="ti ti-businessplan" />}
              />
              <div className="btn">
                <i className="ti ti-currency-dollar"></i>
              </div>
            </div>
            <div className="flex">
              <Textbox
                className="textbox"
                placeholder="الكمية"
                icon={<i className="ti ti-calculator" />}
              />
              <div className="btn">
                <i className="ti ti-infinity"></i>
              </div>
            </div>
          </div>
        </ItemCard>
        <ItemCard>item2</ItemCard>
        <ItemCard>item3</ItemCard>
      </div>
    </Wrapper>
  );
};

export default Items;
