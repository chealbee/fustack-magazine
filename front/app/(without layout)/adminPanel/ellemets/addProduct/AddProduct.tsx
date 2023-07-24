"use client";
import React, { useState } from "react";
import "./style.scss";
import { useAdmin } from "@/app/store/adminpanel/store";
import MySelect from "@/app/components/ui/select/MySelect";
import FileUploader from "@/app/components/ui/fileuploader/FileUploader";
import { useUser } from "@/app/store/user/store";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {
  const user = useUser((state) => state.user);
  const brands = useAdmin((state) => state.brands);
  const types = useAdmin((state) => state.types);

  const [info, setInfo] = useState<{ title: string; description: string }[]>(
    []
  );

  const [infoValue, setInfoValue] = useState("");
  const [infoName, setInfoName] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [productBrandId, setProductBrandId] = useState("");
  const [productTypeId, setproductTypeIP] = useState("");

  const [file, setFile] = useState<File>();

  const addInfo = () => {
    if (infoValue && infoName) {
      setInfoValue("");
      setInfoName("");
      setInfo((prev) => [...prev, { description: infoValue, title: infoName }]);
    }
  };
  const deleteInfo = (name: string, value: string) => {
    setInfo((prev) =>
      [...prev].filter((el) => el.description !== value && el.title !== name)
    );
  };

  const onCrete = async () => {
    if (
      user &&
      name &&
      price &&
      file &&
      productBrandId &&
      productTypeId &&
      info.length &&
      description
    ) {
      const data = new FormData();
      data.append("price", price);
      data.append("name", name);
      data.append("image", file);
      data.append("productBrandId", productBrandId);
      data.append("productTypeId", productTypeId);

      await info.forEach((el, i) => {
        data.append(`info[${i}][title]`, el.title.toString());
        data.append(`info[${i}][description]`, el.description.toString());
      });
      data.append("description", description);

      console.log(data);
      await axios.post("http://localhost:5000/product", data, {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      });
      setDescription("");
      setInfo([]);
      setName("");
      setPrice("");
      setProductBrandId("");
      setproductTypeIP("");

      toast.success("product created");
    }
  };

  return (
    <div className="AaddProduct">
      <h3>create Product</h3>
      <Toaster />
      <input
        type="text"
        className="AaddProduct__input"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        className="AaddProduct__input"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <textarea
        name="description"
        value={description}
        className="AaddProduct__textarea"
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="AaddProduct__brand">
        <MySelect
          placeholder="brand"
          options={brands.map((elem) => ({
            label: elem.name,
            value: `${elem.id}`,
          }))}
          onChange={(el) => {
            if (el?.value) {
              setProductBrandId(el?.value);
            }
          }}
        />
      </div>
      <div className="AaddProduct__type">
        <MySelect
          placeholder="type"
          onChange={(el) => {
            if (el?.value) {
              setproductTypeIP(el?.value);
            }
          }}
          options={types.map((elem) => ({
            label: elem.name,
            value: `${elem.id}`,
          }))}
        />
      </div>
      <div className="AaddProduct__infoBlock infoBlock">
        {info.length ? (
          <div className="infoBlock__content infoBlockContent">
            {info.map((el) => (
              <div className="infoBlockContent__item">
                <div className="infoBlockContent__text">
                  <div className="infoBlockContent__name">{el.title}</div>
                  <div className="infoBlockContent__value">
                    {el.description}
                  </div>
                </div>
                <div
                  className="infoBlockContent__delete"
                  onClick={() => deleteInfo(el.title, el.description)}
                >
                  delete
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="infoBlock__bottom">
          <input
            placeholder="add info label"
            className="infoBlock__inputName AaddProduct__input"
            value={infoName}
            onChange={(e) => setInfoName(e.target.value)}
          />
          <input
            placeholder="add info value"
            className="infoBlock__inputValue AaddProduct__input"
            value={infoValue}
            onChange={(e) => setInfoValue(e.target.value)}
          />
          <div className="infoBlockContent__add" onClick={addInfo}>
            add info
          </div>
        </div>
      </div>
      <FileUploader fileUpload={(file) => setFile(file)} />
      <div className="AaddProduct__button" onClick={onCrete}>
        craete product
      </div>
    </div>
  );
};

export default AddProduct;
