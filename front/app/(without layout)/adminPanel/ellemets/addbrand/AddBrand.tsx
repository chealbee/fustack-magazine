"use client";
import React, { useState } from "react";
import "./style.scss";
import { useUser } from "@/app/store/user/store";
import axios from "axios";
import toast from "react-hot-toast";

const AddBrand = () => {
  const [value, setValue] = useState("");
  const user = useUser((state) => state.user);

  const onAdd = () => {
    if (value) {
      axios.post(
        "http://localhost:5000/brand",
        { name: value },
        { headers: { Authorization: "Bearer " + user?.token } }
      );
      setValue("");
      toast.success("brand created");
    }
  };
  return (
    <div>
      <h3>add and delete brand</h3>
      <div className="addbrand">
        <input
          type="text"
          className="addbrand__input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="write brand name"
        />
        <div className="addbutton" onClick={onAdd}>
          add brand
        </div>
      </div>
    </div>
  );
};

export default AddBrand;
