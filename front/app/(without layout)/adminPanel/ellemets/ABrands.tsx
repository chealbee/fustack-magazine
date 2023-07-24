"use client";
import React, { FC, useEffect, useState } from "react";
import AdminListOF from "../components/listof/AdminListOf";
import EllOfArr from "../components/ellOfArr/EllOfArr";
import axios from "axios";
import { useUser } from "@/app/store/user/store";
import toast from "react-hot-toast";
import { useAdmin } from "@/app/store/adminpanel/store";

const ABrands = () => {
  const [brands, setBrand] = useState<{ id: number; name: string }[]>([]);
  const user = useUser((state) => state.user);
  const setBrands = useAdmin((state) => state.setBrands);

  async function getBrand() {
    const res = await axios.get<{ id: number; name: string }[]>(
      "http://localhost:5000/brand"
    );
    setBrand(res.data);
    setBrands(res.data);

    return res.data;
  }

  const onDeleteBrand = async (id: number) => {
    const res = await axios.delete("http://localhost:5000/brand/delete/" + id, {
      headers: { Authorization: "Bearer " + user?.token },
    });
    if (res.status) {
      const filteredBrands = [...brands].filter((ell) => ell.id !== id);
      toast.success("brand delete");
      setBrands(filteredBrands);
      setBrand(filteredBrands);
    }
  };

  useEffect(() => {
    getBrand();
  }, []);

  return (
    <div>
      <AdminListOF>
        {brands.map((ell) => (
          <EllOfArr
            label={ell.name}
            onDeleteButton={() => onDeleteBrand(ell.id)}
          />
        ))}
      </AdminListOF>
    </div>
  );
};

export default ABrands;
