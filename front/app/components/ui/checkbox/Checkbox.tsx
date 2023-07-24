"use client";

import React, {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import "./style.scss";
import classNames from "classnames";

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  cn?: string;
  name: string;
  isReset?: boolean;
  onChangeBox?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<ICheckboxProps> = ({
  cn,
  label,
  onChangeBox,
  isReset,
  name,
  checked,
  ...ramainProps
}) => {
  const [selected, setSelected] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChangeBox) onChangeBox(e);
    setSelected(e.target.checked);
  };
  useEffect(() => {
    if (isReset) setSelected(false);
  }, [isReset]);

  return (
    <div className={classNames("Mycheckbox__wrapper", cn)}>
      <input
        type="checkbox"
        className="Mycheckbox"
        name={name}
        onChange={(e) => handleChange(e)}
        checked={selected}
        {...ramainProps}
      />
      <div
        className={classNames("Mycheckbox__button", {
          active: selected,
        })}
      ></div>
      <span className={classNames("Mycheckbox__label", cn)}>{label}</span>
    </div>
  );
};

export default Checkbox;
