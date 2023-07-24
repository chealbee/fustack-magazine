import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import "./style.scss";

interface ISeparatorProps extends HTMLAttributes<HTMLDivElement> {
  cn?: string;
  type: "VERTICAL" | "HORIZONTAL";
}

const Separator: FC<ISeparatorProps> = ({ cn, type = "HORIZONTAL" }) => {
  const sepStyles = classNames({
    separator: true,
    separator__vertical: type === "VERTICAL",
  });
  return <div className={sepStyles + " " + cn}></div>;
};

export default Separator;
