import React from "react";
import { useQuery } from "react-query";
import { getItems } from "..";

export const GET_ITEMS = "getItems";

const useItems = (params) => {
  const { data, isLoading } = useQuery([GET_ITEMS, params], () =>
    getItems(params)
  );

  const items = data?.data?.items;

  const itemCategories = (item) => {
    let result = [];
    item.item_categories.forEach((ic) => {
      result.push({
        id: ic.id,
        category_id: ic.category.id,
        label: ic.category.name,
      });
    });
    return result;
  };

  return { items, isLoading, itemCategories };
};

export default useItems;
