import React, { FC, ReactNode } from "react";
import "./style.scss";
const AdminListOF: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="ArrayOf">{children}</div>;
};

export default AdminListOF;
