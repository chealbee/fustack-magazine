import React, { FC } from "react";
import Select, { SingleValue } from "react-select";
import "./style.scss";

interface IMySelectProps {
  options: { value: string; label: string }[];
  placeholder?: string;
  value?: SingleValue<{
    value: string;
    label: string;
  }>;
  onChange?: (
    e: SingleValue<{
      value: string;
      label: string;
    }>
  ) => void;
}

const MySelect: FC<IMySelectProps> = ({
  options,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <Select
      placeholder={placeholder || "filter by"}
      classNamePrefix="filterSelect"
      className="filterSelect"
      isSearchable={false}
      options={options}
      onChange={onChange}
      value={value}
    />
  );
};

export default MySelect;
