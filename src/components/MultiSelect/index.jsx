import { nominalTypeHack } from "prop-types";
import React from "react";
import Select from "react-select";

const MultiSelect = (props) => {
  // const group1Options = [
  //   { label: "group1-option1", value: "g1o1" },
  //   { label: "group1-option2", value: "g1o2" },
  // ];

  // const group2Options = [
  //   { label: "group2-option1", value: "g2o1" },
  //   { label: "group2-option2", value: "g2o2" },
  // ];

  // const groupOptions = [
  //   {
  //     label: "group1",
  //     options: group1Options,
  //   },
  //   {
  //     label: "group2",
  //     options: group2Options,
  //   },
  // ];

  const customStyles = {
    container: (base) => ({
      ...base,
      flexGrow: 1,
    }),
    control: (base) => ({
      ...base,
      fontSize: "14px",
      border: "var(--offwhite) solid 1px",
      boxShadow: "none",
      ":focus, :hover": {
        border: "var(--deep-blue) solid 1px",
      },
    }),
    multiValueRemove: (base) => ({
      ...base,
      ":hover": {
        backgroundColor: "var(--light-blue)",
        color: "white",
      },
    }),
    option: (base) => ({
      ...base,
      fontSize: "14px",
      ":hover": {
        backgroundColor: "var(--offwhite)",
      },
    }),
  };
  return (
    <Select styles={customStyles} isMulti isSearchable={false} {...props} />
  );
};

export default MultiSelect;
