"use client";
import React, { FC, ReactNode, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./style.scss";
import Image from "next/image";
import arow from "@/public/arow.png";
import classNames from "classnames";
import Checkbox from "../ui/checkbox/Checkbox";
import Separator from "../ui/separator/Separator";

interface IMyAccardionProps {
  list: { label: string; ell: ReactNode }[];
}

const MyAccardion: FC<IMyAccardionProps> = ({ list }) => {
  const [selected, setSelected] = useState<any[]>([]);
  return (
    <Accordion
      allowZeroExpanded={true}
      allowMultipleExpanded
      className="CatalogAcardion"
      onChange={(e) => setSelected(e)}
    >
      {list.map((el) => (
        <AccordionItem
          key={el.label}
          uuid={el.label}
          className="CatalogAcardion__item"
        >
          <AccordionItemHeading className="CatalogAcardion__heading">
            <AccordionItemButton className="CatalogAcardion__button">
              <p>{el.label}</p>
              <Image
                src={arow}
                alt="arow"
                className={classNames({
                  CatalogAcardion__buttonarow: true,
                  CatalogAcardion__arow: selected.includes(el.label),
                })}
              />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="CatalogAcardion__panel">
            {el.ell}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default MyAccardion;
