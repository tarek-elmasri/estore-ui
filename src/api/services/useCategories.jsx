import React from "react";
import { getCategories } from "..";
import { useQuery } from "react-query";
const GET_CATEGORIES = "getCategories";

const useCategories = (params) => {
  const { data, isLoading } = useQuery(
    [GET_CATEGORIES, params],
    () => getCategories(params),
    {
      initialData: [],
    }
  );

  const categories = data?.data?.categories;

  return {
    categories,
    isLoading,
  };
};

export default useCategories;
