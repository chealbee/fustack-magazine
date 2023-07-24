import React from "react";
import "./style.scss";
import Container from "@/app/components/layout/container/Container";

import ATypes from "./ellemets/ATypes";
import DeleteProduct from "./ellemets/deleteProduct/DeleteProduct";
import ABrands from "./ellemets/ABrands";
import AddBrand from "./ellemets/addbrand/AddBrand";
import AddType from "./ellemets/addtype/AddType";
import { Toaster } from "react-hot-toast";
import AddProduct from "./ellemets/addProduct/AddProduct";
import Separator from "@/app/components/ui/separator/Separator";

const page = async () => {
  return (
    <Container>
      <div className="adminPanel">
        <AddProduct />
        <Separator type="HORIZONTAL" />
        <DeleteProduct />
        <Separator type="HORIZONTAL" />
        <AddType />
        <ATypes />
        <Separator type="HORIZONTAL" />
        <AddBrand />
        <ABrands />
      </div>
      <Toaster />
    </Container>
  );
};

export default page;
