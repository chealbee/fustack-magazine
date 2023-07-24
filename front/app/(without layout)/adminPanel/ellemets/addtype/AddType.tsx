"use client";
import React, { useState } from "react";
import "./style.scss";
import axios from "axios";
import { useUser } from "@/app/store/user/store";
import toast from "react-hot-toast";

const AddType = () => {
  const [value, setValue] = useState("");
  const user = useUser((state) => state.user);

  const onAdd = () => {
    if (value) {
      axios.post(
        "http://localhost:5000/producttype",
        { name: value },
        { headers: { Authorization: "Bearer " + user?.token } }
      );
      toast.success("type created");
      setValue("");
    }
  };

  return (
    <div>
      <h3>add and delete type</h3>
      <div className="addbrand">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="addbrand__input"
          placeholder="write type name"
        />
        <div className="addbutton" onClick={onAdd}>
          add type
        </div>
      </div>
    </div>
  );
};

export default AddType;
