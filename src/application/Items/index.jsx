import React from "react";
import { Wrapper } from "./style";
import useItems from "../../api/services/useItems";
import Loading from "../../components/Loading";
import useCategories from "../../api/services/useCategories";
import ItemCard from "../../components/ItemCard";

const Items = () => {
  const { items, isLoading, itemCategories } = useItems();
  const { categories, isLoading: categoriesIsLoading } = useCategories({
    primary: false,
  });

  return (
    <Wrapper>
      <Loading
        enabled={isLoading || categoriesIsLoading}
        text="جاري احميل المنتجات"
      />
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
        {items &&
          items.map((item) => (
            <ItemCard
              item={item}
              categories={itemCategories(item)}
              categoriesList={categories}
            />
          ))}
      </div>
    </Wrapper>
  );
};

export default Items;
