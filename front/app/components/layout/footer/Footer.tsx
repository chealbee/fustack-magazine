import React from "react";
import style from "./style.module.scss";
import Image from "next/image";

import logo from "@/public/logo.svg";
import { contacts, paymentsMethods, social } from "./data";
import Separator from "../../ui/separator/Separator";
import Container from "../container/Container";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <Container>
          <div className={style.toSide}>
            <div className={style.logo}>
              <Image src={logo} alt="logo" />
            </div>

            <div className={style.column}>
              <Separator type="VERTICAL" />
              <ul>
                <li>magazine</li>
                <li>
                  <Link href={"/catalog"}>Catalog</Link>
                </li>
                <li>
                  <Link href={"/delivery"}>Delivery</Link>
                </li>
              </ul>
            </div>
            <div className={style.column}>
              <Separator type="VERTICAL" />
              <ul>
                <li>About company</li>
                <li>
                  <Link href={"/aboutCompany"}>Company</Link>
                </li>
                <li>
                  <Link href={"/contacts"}>Feedback</Link>
                </li>
                <li>
                  <Link href={"/contacts"}>Contacts</Link>
                </li>
              </ul>
            </div>
            <div className={style.column}>
              <Separator type="VERTICAL" />
              <ul>
                <li>Contacts</li>
                {contacts.map((el) => (
                  <li>
                    {el.text}
                    <div className={style.item}>
                      <Image src={el.img} alt={el.alt} />
                      <p>{el.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Separator type="HORIZONTAL" />
          <div className={style.bottomSide}>
            <div className={style.payments}>
              <p>We accept for payment:</p>
              {paymentsMethods.map((el) => (
                <div className={style.payment}>
                  <Image alt={el.alt} src={el.src} />
                </div>
              ))}
            </div>
            <div className={style.payments}>
              <p>We are on social networks:</p>
              {social.map((el) => (
                <Image alt={el.alt} src={el.src} className={style.social} />
              ))}
            </div>
          </div>
          <Separator type="HORIZONTAL" />
          <p className={style.copy}>© «online magazine» 2023</p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
