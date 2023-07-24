"use client";

import React, { FC, useState } from "react";
import Input from "../../ui/input/Input";
import RangeSlider from "../../ui/rangeSlider/RangeSlider";
import "./style.scss";
import { useCatalogFilters } from "@/app/store/cart/store";

interface IPriceSliderProps {
  max?: number;
  min?: number;
}

const PriceSlider: FC<IPriceSliderProps> = ({ min = 0, max = 800 }) => {
  const setPrice = useCatalogFilters((state) => state.setPrice);
  const price = useCatalogFilters((state) => state.price);

  const changeRange = (values: number[]) => {
    setPrice({ from: values[0], to: values[1] });
  };

  return (
    <div>
      <div className="PricesliderinputsWraper">
        <Input
          styleType="input"
          placeholder={`min: ${min}`}
          cn="Pricesliderinputs"
          onChange={(e) => {}}
          value={price.from}
        />
        <span>-</span>
        <Input
          onChange={(e) => {}}
          styleType="input"
          placeholder={`max: ${max}`}
          cn="Pricesliderinputs"
          value={price.to}
        />
      </div>
      <RangeSlider
        min={min}
        max={max}
        value={[price.from, price.to]}
        onChange={(values) => changeRange(values)}
      />
    </div>
  );
};

export default PriceSlider;
