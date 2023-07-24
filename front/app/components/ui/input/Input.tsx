"use client";
import React, { FC, InputHTMLAttributes } from "react";
import style from "./style.module.scss";

import search from "@/public/search.png";
import Image from "next/image";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  clickOnSearch?: () => void;
  inputCn?: string;
  cn?: string;
  styleType: "search" | "input";
}
const Input: FC<IInputProps> = ({
  clickOnSearch,
  cn,
  inputCn,
  styleType,
  ...reaminProps
}) => {
  return (
    <div className={style.input + " " + cn}>
      <input placeholder="placeholder" className={inputCn} {...reaminProps} />
      {styleType === "search" ? (
        <Image src={search} alt="search" onClick={clickOnSearch} />
      ) : null}
    </div>
  );
};

export default Input;
