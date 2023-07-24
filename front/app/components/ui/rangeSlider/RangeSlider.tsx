"use client";

import React, { FC } from "react";
import "./style.scss";
import ReactSlider from "react-slider";

interface IRangeSliderProps {
  onChange?: (e: number[]) => void;
  max?: number;
  min?: number;
  value?: number[];
}

const RangeSlider: FC<IRangeSliderProps> = ({ onChange, max, min, value }) => {
  return (
    <>
      <div className="rangeSlider__wraper">
        <ReactSlider
          value={value}
          className="rangeSlider"
          thumbClassName="rangeSlider__thumb"
          trackClassName="rangeSlider__track"
          min={min}
          max={max}
          defaultValue={[0, 100]}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}></div>}
          pearling
          onChange={onChange}
          minDistance={10}
        />
      </div>
    </>
  );
};

export default RangeSlider;
