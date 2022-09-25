import React, { useState } from "react";
import MultiSelect from "../MultiSelect";
import Textbox from "../Textbox";
import { Wrapper } from "./style";

const formatCategories = (categories) => {
  let results = [];
  categories.forEach((category) => {
    results.push({ label: category.name, category_id: category.id, id: null });
  });
  return results;
};

const filterUpdatedCategories = (categories) =>
  categories.filter((category) => category._destroy !== 1);

const ItemCard = ({ item, categories, categoriesList }) => {
  const [itemUpdates, setItemUpdates] = useState(item);
  const [categoriesUpdate, setCategoriesUpdate] = useState(categories);

  const handleCategoriesChange = (_, meta_actions) => {
    switch (meta_actions.action) {
      case "select-option":
        setCategoriesUpdate((prev) => [...prev, meta_actions.option]);
        break;

      case "remove-value":
        const { removedValue } = meta_actions;
        if (removedValue.id) {
          setCategoriesUpdate((prev) => [
            ...prev.filter((ob) => ob.id !== removedValue.id),
            { ...removedValue, _destroy: 1 },
          ]);
        } else {
          setCategoriesUpdate((prev) => [
            ...prev.filter((ob) => ob.category_id !== removedValue.category_id),
          ]);
        }
        break;
    }
  };

  return (
    <Wrapper>
      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />

      <div className="item-card__body">
        <Textbox
          name="name"
          className="textbox"
          placeholder="أدخل اسم المنتج"
          value={itemUpdates.name}
          onChange={({ value }) =>
            setItemUpdates((prev) => ({ ...prev, name: value }))
          }
          icon={<i className="ti ti-writing" />}
        />
        <div className="flex">
          <Textbox
            name="price"
            className="textbox"
            placeholder="السعر"
            value={itemUpdates.price}
            onChange={({ value }) =>
              setItemUpdates((prev) => ({ ...prev, price: value }))
            }
            icon={<i className="ti ti-businessplan" />}
          />
          <div className="btn">
            <i className="ti ti-currency-dollar"></i>
          </div>
        </div>
        <div className="flex">
          <Textbox
            name="active_stock"
            className="textbox"
            placeholder="الكمية"
            disabled={!itemUpdates.has_limited_stock}
            value={itemUpdates.active_stock}
            onChange={({ value }) =>
              setItemUpdates((prev) => ({ ...prev, active_stock: value }))
            }
            icon={<i className="ti ti-calculator" />}
          />
          <div
            className="btn"
            onClick={() =>
              setItemUpdates((prev) => ({
                ...prev,
                has_limited_stock: !prev.has_limited_stock,
                active_stock: prev.has_limited_stock
                  ? "كمية غير محدودة"
                  : item.active_stock || 0,
              }))
            }
          >
            {itemUpdates.has_limited_stock ? (
              <i className="ti ti-infinity" />
            ) : (
              <i className="ti ti-infinity-off" />
            )}
          </div>
        </div>
        <div className="flex">
          <MultiSelect
            value={filterUpdatedCategories(categoriesUpdate)}
            defaultValue={categoriesUpdate}
            placeholder="اضف تصنيف"
            options={formatCategories(categoriesList)}
            onChange={handleCategoriesChange}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default ItemCard;
