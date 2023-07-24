"use client";

import React, { FC, HTMLAttributes, useEffect } from "react";

import style from "./style.module.scss";
import ProductCard from "../productCard/ProductCard";
import { IProduct } from "@/app/types/product";

interface ICardListProps extends HTMLAttributes<HTMLDivElement> {
  cn?: string;
  products: IProduct[];
}
const CardList: FC<ICardListProps> = ({ cn, products, ...remainProps }) => {
  return (
    <div className={style.list + " " + cn} {...remainProps}>
      {products.map((ell, i) => (
        <ProductCard key={ell.id} data={ell} />
        //   <ProductCard key={i} data={ell} />
      ))}
    </div>
  );
};

export default CardList;
