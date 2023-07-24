"use client";
import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import OriginButton from "../../ui/buttons/origin/OriginButton";
import { IProduct } from "@/app/types/product";
import Link from "next/link";
import addToCart from "@/app/services/cart/addTocart";
import { useUser } from "@/app/store/user/store";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
const ProductCard = ({ data }: { data: IProduct }) => {
  const user = useUser((state) => state.user);
  const router = useRouter();

  const addProductToCart = () => {
    if (user?.email && user.id && user.token) {
      addToCart({ userId: user?.id, productId: data.id, token: user.token });
    } else {
      router.push("/auth/login");
    }
  };
  return (
    <div className={style.card}>
      <div className={style.img}>
        <Link href={"/product/" + data.id}>
          <Image
            fill={true}
            sizes={undefined}
            src={"http://localhost:5000/" + data.img}
            alt=""
          />
        </Link>
      </div>
      <Link href={"/product/" + data.id}>
        <h4 className={style.heading}>{data.name}</h4>
      </Link>
      <p className={style.descriptiion}>
        {data.description.length > 150
          ? `${data.description.slice(0, 150)}...`
          : data.description}
      </p>
      <div className={style.orderSection}>
        <p className={style.price}>{data.price}$</p>
        <OriginButton onClick={addProductToCart}>add to cart</OriginButton>
      </div>
      <Toaster />
    </div>
  );
};

export default ProductCard;
