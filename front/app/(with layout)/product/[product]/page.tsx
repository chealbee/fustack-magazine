"use client";
import Container from "@/app/components/layout/container/Container";
import OriginButton from "@/app/components/ui/buttons/origin/OriginButton";

import cart from "@/public/cart2.png";
import "./style.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "@/app/types/product";
import CardList from "@/app/components/elements/cardList/CardList";
import { useParams, useRouter } from "next/navigation";
import addToCart from "@/app/services/cart/addTocart";
import { useUser } from "@/app/store/user/store";

export default function Product() {
  const params = useParams();

  const [procuct, setProduct] = useState<IProduct>();
  const [procucts, setProducts] = useState<IProduct[]>();

  const user = useUser((state) => state.user);
  const router = useRouter();

  const addProductToCart = () => {
    if (user?.email && user.id && user.token && procuct) {
      addToCart({ userId: user?.id, productId: procuct.id, token: user.token });
    } else {
      router.push("/auth/login");
    }
  };

  const getProduct = async () => {
    const data = await axios.get<IProduct>(
      "http://localhost:5000/product/" + params.product
    );
    setProduct(data.data);
    return data.data;
  };

  const getProducts = async () => {
    const data = await axios.post<{ rows: IProduct[] }>(
      "http://localhost:5000/product/getAll",
      { typeId: [], brandId: [], limit: 4, page: 1 }
    );
    setProducts(data.data.rows);
  };
  useEffect(() => {
    getProduct();
    getProducts();
  }, []);
  return (
    <div className="Product">
      <Container>
        <div className="Product__heading">{procuct?.name}</div>
        <div className="Product__content">
          <div className="Product__photos">
            <div className="Product__image">
              {procuct?.img ? (
                <Image
                  fill
                  src={"http://localhost:5000/" + procuct?.img}
                  alt=""
                />
              ) : null}
            </div>
          </div>
          <div className="Product__info">
            <p className="Product__price">{procuct?.price} $</p>
            <p className="Product__typebrand">
              {procuct?.type.name}/{procuct?.brand.name}
            </p>
            <OriginButton
              Buttonstyle="yelow"
              cn="Product__button"
              onClick={addProductToCart}
            >
              <Image src={cart} alt="cart" />
              <p>add to cart</p>
            </OriginButton>
            <p className="Product__name">{procuct?.name}</p>
            <p className="Product__descrioption">{procuct?.description}</p>
            <div className="Product__haractericsticks">
              {procuct?.info.map((ell) => (
                <div className="Product__haractericstick">
                  <p className="Product__haractericstick_heding">{ell.title}</p>
                  <span className="Product__haractericstick_value">
                    {ell.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="youlike">You will like it</p>
        {procucts ? <CardList cn="productList" products={procucts} /> : null}
      </Container>
    </div>
  );
}
