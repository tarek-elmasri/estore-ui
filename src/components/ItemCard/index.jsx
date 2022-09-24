import React, { useState } from "react";
import MultiSelect from "../MultiSelect";
import Textbox from "../Textbox";
import { Wrapper } from "./style";

const formatCategories = (categories) => {
  let results = [];
  categories.forEach((category) => {
    results.push({ label: category.name, value: category.id });
  });

  return results;
};

const ItemCard = ({ item, categories, categoriesList }) => {
  const [itemUpdates, setItemUpdates] = useState(item);
  const [categoriesUpdate, setCategoriesUpdate] = useState(categories);

  return (
    <Wrapper>
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
        <div className="flex">
          <MultiSelect options={formatCategories(categoriesList)} />
        </div>
      </div>
    </Wrapper>
  );
};

export default ItemCard;
