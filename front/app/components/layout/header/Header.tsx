"use client";

import style from "./style.module.scss";
import Image from "next/image";

import logo from "@/public/logo.svg";
import cartlogo from "@/public/cart.png";
import Container from "../container/Container";
import Input from "../../ui/input/Input";
import Link from "next/link";
import { usePathname } from "next/navigation";
import User from "../../elements/user/User";
import { useState } from "react";
import { IProduct } from "@/app/types/product";
import cart from "@/app/services/cart/cart";

const links = [
  { to: "/main", label: "Main" },
  { to: "/contacts", label: "Contacts" },
  { to: "/delivery", label: "Delivery" },
  { to: "/catalog", label: "Catalog" },
  { to: "/aboutCompany", label: "About" },
];

const Header = () => {
  const router = usePathname();
  const [search, setSearch] = useState("");
  const [seacrProducts, setSeacrProducts] = useState<IProduct[]>([]);
  const [isShoweSearch, setIsShoweSearch] = useState(false);

  const clickOnSearch = async () => {
    if (search) {
      const data = await cart.getByName(search);
      if (data) {
        setSeacrProducts(data);
        setIsShoweSearch(true);
        setSearch("");
      }
    }
    console.log("search");
  };

  return (
    <>
      <header className={style.header}>
        <div className={style.top}>
          <Container cn={style.psRelativ}>
            <ul>
              {links.map((el) => {
                return (
                  <li key={el.label}>
                    <Link
                      style={router === "/" + el.to ? { color: "#ffcf62" } : {}}
                      href={el.to}
                    >
                      {el.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <User />
          </Container>
        </div>
        <div className={style.bottom}>
          <Container>
            <div className={style.botomContainer}>
              <div className={style.logo}>
                <Image src={logo} alt="logo" />
                <p>online magazine</p>
              </div>
              <div className={style.headersearch}>
                <Input
                  cn={style.input}
                  styleType="search"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  clickOnSearch={clickOnSearch}
                  placeholder="find product"
                />
                {seacrProducts.length && isShoweSearch ? (
                  <div
                    className={style.searchproducts}
                    onMouseLeave={() => setIsShoweSearch(false)}
                  >
                    {seacrProducts.map((el) => (
                      <Link
                        href={"/product/" + el.id}
                        className={style.searchproduct}
                      >
                        <Image
                          src={"http://localhost:5000/" + el.img}
                          width={30}
                          height={40}
                          alt="product img"
                        />
                        <p>{el.name}</p>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className={style.cart}>
                <link href="order"></link>
                <Link href={"/order"}>
                  <Image src={cartlogo} alt="cart" />
                  <p>cart</p>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
