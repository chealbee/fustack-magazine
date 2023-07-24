"use client";
import React, { FC, useEffect, useState } from "react";
import AdminListOF from "../components/listof/AdminListOf";
import EllOfArr from "../components/ellOfArr/EllOfArr";
import axios from "axios";
import { useUser } from "@/app/store/user/store";
import toast from "react-hot-toast";
import { useAdmin } from "@/app/store/adminpanel/store";

const ATypes = () => {
  const [types, setTypes] = useState<{ id: number; name: string }[]>([]);
  const user = useUser((state) => state.user);
  const setTypestoZus = useAdmin((state) => state.setTypes);

  async function getTypes() {
    const res = await axios.get<{ id: number; name: string }[]>(
      "http://localhost:5000/producttype"
    );
    setTypes(res.data);
    setTypestoZus(res.data);
    return res.data;
  }

  const onDeleteType = async (id: number) => {
    const res = await axios.delete(
      "http://localhost:5000/producttype/delete/" + id,
      {
        headers: { Authorization: "Bearer " + user?.token },
      }
    );
    if (res.status) {
      const filteredTypes = types.filter((ell) => ell.id !== id);
      setTypestoZus(filteredTypes);
      setTypes(filteredTypes);
      toast.success("type delete");
    }
  };

  useEffect(() => {
    getTypes();
  }, []);

  return (
    <div>
      <AdminListOF>
        {types.map((ell) => (
          <EllOfArr
            label={ell.name}
            onDeleteButton={() => onDeleteType(ell.id)}
          />
        ))}
      </AdminListOF>
    </div>
  );
};

export default ATypes;
