"use client";
import React, { FC } from "react";
import "./style.scss";

const EllOfArr: FC<{ label?: string; onDeleteButton?: () => void }> = ({
  label,
  onDeleteButton,
}) => {
  const deletClick = () => {
    if (onDeleteButton) onDeleteButton();
  };
  return (
    <div className="SomeEll">
      <p className="SomeEllName">{label}</p>
      <div className="SomeElldelete" onClick={deletClick}>
        delete
      </div>
    </div>
  );
};

export default EllOfArr;
