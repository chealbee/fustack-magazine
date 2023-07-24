"use client";
import React, { useEffect, useState } from "react";
import Container from "@/app/components/layout/container/Container";

import "./style.scss";
import cartimage from "@/public/carticon.svg";

import Image from "next/image";
import Separator from "@/app/components/ui/separator/Separator";
import OriginButton from "@/app/components/ui/buttons/origin/OriginButton";
import Checkbox from "@/app/components/ui/checkbox/Checkbox";
import { useUser } from "@/app/store/user/store";
import { useRouter } from "next/navigation";

import { IcartProduct } from "@/app/types/cart";
import Link from "next/link";
import getCart from "@/app/services/cart/getCart";
import cartService from "@/app/services/cart/cart";

const page = () => {
  const user = useUser((state) => state.user);
  const router = useRouter();
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState<IcartProduct[]>([]);
  const [isComfirned, setIsComfirned] = useState(false);

  const getUserCart = async (user: {
    email: string;
    id: number;
    token: string;
  }) => {
    const res = await getCart({ userId: user.id, token: user.token });
    setCart(res);
  };

  const deletyFromCart = (productID: number) => {
    setIsComfirned(false);
    if (user && cart.length) {
      cartService.deleteFomCart({
        productId: productID,
        token: user.token,
        userId: user?.id,
      });
      const newcart = cart.filter((el) => el.productId !== productID);
      setCart(newcart);
    }
  };

  const cleanCart = () => {
    setIsComfirned(false);
    if (user && cart.length) {
      cartService.cleanCart(user.token);
      setCart([]);
    }
  };

  useEffect(() => {
    if (user) {
      getUserCart(user);
    } else {
      router.push("/auth/login");
    }
  }, []);

  useEffect(() => {
    if (cart) {
      const totatlPrice = cart.reduce((acc, el) => acc + el.Product.price, 0);
      setTotal(totatlPrice);
    }
  }, [cart]);

  return (
    <div>
      <Container>
        <div className="orderPage">
          <div className="productsList">
            <div className="productsList__top">
              <h3 className="cartTitle">
                <Image src={cartimage} alt="cart icon" /> Cart
              </h3>
              {cart
                ? cart.map((el) => (
                    <div key={el.Product.id}>
                      <div className="productsList__product listProduct">
                        <div className="listProduct__left">
                          <div className="listProduct__image">
                            <Link href={`/product/${el.Product.id}`}>
                              <Image
                                src={"http://localhost:5000/" + el.Product.img}
                                alt="product omage"
                                fill
                              />
                            </Link>
                          </div>
                          <div className="listProduct__title">
                            <Link href={`/product/${el.Product.id}`}>
                              {el.Product.name}
                            </Link>
                          </div>
                        </div>

                        <div className="listProduct__right">
                          <div className="listProduct__price">
                            {el.Product.price} $
                          </div>
                          <div
                            onClick={() => deletyFromCart(el.productId)}
                            className="listProduct__deleteButton"
                          >
                            delete
                          </div>
                        </div>
                      </div>
                      <Separator type="HORIZONTAL" />
                    </div>
                  ))
                : null}
            </div>
            <div className="productsList__total">
              <div className="productsList__totalValue">
                <p>Total amount of the order:</p>
                <p className="productsList__totalPrice">{total} $</p>
              </div>
            </div>
          </div>
          <div className="orderProducts">
            <div className="orderProducts__heading">Total</div>
            <Separator type="HORIZONTAL" />
            <p className="orderProducts__products">Products ({cart.length})</p>
            <div className="orderProducts__total">
              <p>Total</p>
              <p className="orderProducts__totalprice">{total} $</p>
            </div>
            <OriginButton
              disabled={!isComfirned}
              cn={"orderProducts__button"}
              Buttonstyle={!isComfirned ? "disabled" : "normal"}
              onClick={cleanCart}
            >
              Place an order
            </OriginButton>
            <Checkbox
              onChangeBox={(e) => setIsComfirned(e.target.checked)}
              name=""
              checked={isComfirned}
              isReset={!isComfirned}
              label="I agree with the terms of use of the site"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
