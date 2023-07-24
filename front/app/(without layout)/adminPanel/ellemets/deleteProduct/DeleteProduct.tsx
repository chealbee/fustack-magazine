"use client";
import "./style.scss";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/app/types/product";
import cart from "@/app/services/cart/cart";
import Input from "@/app/components/ui/input/Input";
import AdminListOF from "../../components/listof/AdminListOf";
import axios from "axios";
import { useUser } from "@/app/store/user/store";
import toast from "react-hot-toast";

const DeleteProduct = () => {
  const [search, setSearch] = useState("");
  const [seacrProducts, setSeacrProducts] = useState<IProduct[]>([]);
  const user = useUser((state) => state.user);

  const clickOnSearch = async () => {
    if (search) {
      const data = await cart.getByName(search, false);
      if (data) {
        setSeacrProducts(data);
        setSearch("");
      }
    }
  };

  const onDeleteProduct = async (id: number) => {
    const res = await axios.delete("http://localhost:5000/product/" + id, {
      headers: { Authorization: "Bearer " + user?.token },
    });
    if (res.status) {
      setSeacrProducts([...seacrProducts].filter((ell) => ell.id !== id));
      toast.success("product delete");
    }
  };

  return (
    <div className="deleteWraper">
      <h3>delete product</h3>
      <Input
        cn={"deleteSearch"}
        styleType="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        clickOnSearch={clickOnSearch}
        placeholder="find product for delte"
      />
      {seacrProducts.length ? (
        <AdminListOF>
          {seacrProducts.map((el) => (
            <div className="deleteproduct">
              <Link href={"/product/" + el.id} className="deleteproductimage">
                <Image
                  src={"http://localhost:5000/" + el.img}
                  width={30}
                  height={40}
                  alt="product img"
                />
                <p>{el.name}</p>
                <p>{el.price}</p>
              </Link>
              <div
                className="deleteproductdeletButton"
                onClick={() => onDeleteProduct(el.id)}
              >
                delete
              </div>
            </div>
          ))}
        </AdminListOF>
      ) : null}
    </div>
  );
};

export default DeleteProduct;
