import classNames from "classnames";
import React, { FC } from "react";
import style from "./style.module.scss";
import { IOriginButtomProps } from "../origin/OriginButton";

export interface IOutlineButtonProps extends IOriginButtomProps {
  cn?: string;
  Buttonstyle?: "normal";
}

const OutlineButton: FC<IOutlineButtonProps> = ({
  cn,
  Buttonstyle = "delete",
  children,
  ...reaminProps
}) => {
  return (
    <button className={classNames(style.button, cn)} {...reaminProps}>
      {children}
    </button>
  );
};

export default OutlineButton;
OutlineButton;
