import { FC, ReactNode } from "react";
import style from "./style.module.scss";

const Container: FC<{ children: ReactNode; cn?: string }> = ({
  children,
  cn,
}) => {
  return (
    <>
      <div className={style.container + " " + cn}>{children}</div>
    </>
  );
};

export default Container;
