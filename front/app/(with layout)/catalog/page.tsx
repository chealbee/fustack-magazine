"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Container from "@/app/components/layout/container/Container";
import CardList from "@/app/components/elements/cardList/CardList";

const options = [
  { value: "DESC", label: "the price goes down" },
  { value: "ASC", label: "the price goes up" },
];

import "./style.scss";
import MyAccardion from "@/app/components/accardion/MyAccardion";
import Separator from "@/app/components/ui/separator/Separator";
import OriginButton from "@/app/components/ui/buttons/origin/OriginButton";
import Checkbox from "@/app/components/ui/checkbox/Checkbox";
import OutlineButton from "@/app/components/ui/buttons/outline/OutlineButton";
import MySelect from "@/app/components/ui/select/MySelect";
import Pagination from "@/app/components/ui/pagination/Pagination";
import { useCatalogFilters } from "@/app/store/cart/store";
import PriceSlider from "@/app/components/elements/priceSlider/PriceSlider";
import axios from "axios";
import { IProduct } from "@/app/types/product";

export default function Catalog() {
  const [products, setProducts] = useState<IProduct[]>();
  const [page, setPage] = useState<number>(1);
  const [productCount, setProductCount] = useState<number>();
  const [brands, setBrands] = useState<{ name: string; id: number }[]>();
  const [types, setTypes] = useState<{ name: string; id: number }[]>();

  const addSortBy = useCatalogFilters((state) => state.addSortBy);
  const setSortByType = useCatalogFilters((state) => state.setSortByType);
  const setSortByBrand = useCatalogFilters((state) => state.setSortByBrand);
  const resetAllFilters = useCatalogFilters((state) => state.resetAllFilters);

  const type = useCatalogFilters((state) => state.type);
  const brand = useCatalogFilters((state) => state.brand);
  const isReset = useCatalogFilters((state) => state.isReset);
  const price = useCatalogFilters((state) => state.price);
  const sortBy = useCatalogFilters((state) => state.sortBy);

  const resetFilters = () => {
    resetAllFilters();
    getProducts();
  };

  const typeChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    setSortByType({ chaked: e.target.checked, name: e.target.name, id });
  };
  const bradChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    setSortByBrand({ chaked: e.target.checked, name: e.target.name, id });
  };

  const getProducts = async () => {
    const data = await axios.post<{ rows: IProduct[]; count: number }>(
      "http://localhost:5000/product/getAll",
      {
        typeId: [],
        brandId: [],
        limit: 6, // за щамовчуванням 10
        page: page, // за щамовчуванням 1
      }
    );
    setProductCount(data.data.count);
    setProducts(data.data.rows);
  };
  const getBrandsandTypes = async () => {
    const brands = await axios.get<{ name: string; id: number }[]>(
      "http://localhost:5000/brand"
    );
    const types = await axios.get<{ name: string; id: number }[]>(
      "http://localhost:5000/producttype"
    );

    setBrands(brands.data);
    setTypes(types.data);
  };

  const getFilteredProducts = async (page?: number) => {
    const Price = [price.from, price.to];
    const Brand = brand?.map((el) => el.id);
    const Type = type?.map((el) => el.id);

    const MYPage = page || 1;

    const body = {
      order: sortBy.value,
      typeId: Type,
      brandId: Brand,
      limit: 6,
      page: MYPage,
      price: Price,
    };

    const data = await axios.post<{ rows: IProduct[]; count: number }>(
      "http://localhost:5000/product/getAll",
      body
    );

    setProducts(data.data.rows);
    setProductCount(data.data.count);
  };

  useEffect(() => {
    getProducts();
    getBrandsandTypes();
  }, []);

  useEffect(() => {
    console.log("page change");
    getFilteredProducts(page);
  }, [page]);

  return (
    <div>
      <Container>
        <div className="filterList">
          {brand?.length ? (
            <>
              <p className="filterList__sectionCaption">brand :</p>
              <div className="filterList__sectionList">
                {brand?.map((ell) => (
                  <div className="filterList__filter" key={ell.id}>
                    <span>{ell.name}</span>
                    {/* <div
                      className="filterList__button"
                      onClick={() =>
                        setSortByBrand({
                          chaked: false,
                          name: ell.name,
                          id: ell.id,
                        })
                      }
                    >
                      <div className="filterList__closebutton"></div>
                    </div> */}
                  </div>
                ))}
              </div>
              <Separator type="HORIZONTAL" cn="filterListSeparator" />
            </>
          ) : null}

          {type?.length ? (
            <>
              <p className="filterList__sectionCaption">type :</p>
              <div className="filterList__sectionList">
                {type?.map((ell) => (
                  <div className="filterList__filter" key={ell.id}>
                    <span>{ell.name}</span>
                    <div
                      className="filterList__button"
                      onClick={() =>
                        setSortByType({
                          chaked: false,
                          name: ell.name,
                          id: ell.id,
                        })
                      }
                    >
                      <div className="filterList__closebutton"></div>
                    </div>
                  </div>
                ))}
              </div>
              <Separator type="HORIZONTAL" cn="filterListSeparator" />
            </>
          ) : null}

          <div className="filterBottomContainer">
            <OutlineButton onClick={resetFilters}>reset filters</OutlineButton>
            <MySelect
              options={options}
              onChange={(e) => (e?.value ? addSortBy(e) : null)}
            />
          </div>
        </div>
        <div className="catalog">
          <div className="filters">
            <h3>Filters</h3>
            <Separator type="HORIZONTAL" cn="filters__separator" />
            <MyAccardion
              list={[
                {
                  label: "brand",
                  ell: (
                    <div className="filters__checkboxs">
                      {brands?.length
                        ? brands.map((el) => (
                            <div key={el.id}>
                              <Checkbox
                                isReset={isReset}
                                name={el.name}
                                label={el.name}
                                onChangeBox={(e) => bradChange(e, el.id)}
                              />
                            </div>
                          ))
                        : null}
                    </div>
                  ),
                },
                {
                  label: "type",
                  ell: (
                    <div className="filters__checkboxs">
                      {types?.length
                        ? types.map((el) => (
                            <div key={el.id}>
                              <Checkbox
                                isReset={isReset}
                                name={el.name}
                                label={el.name}
                                onChangeBox={(e) => typeChange(e, el.id)}
                              />
                            </div>
                          ))
                        : null}
                    </div>
                  ),
                },
                {
                  label: "price",
                  ell: <PriceSlider max={10000} min={0} />,
                },
              ]}
            />
            <div className="filters__buttons">
              <OriginButton onClick={() => getFilteredProducts()}>
                Aply
              </OriginButton>
              <OriginButton Buttonstyle="spaced" onClick={resetFilters}>
                Reset
              </OriginButton>
            </div>
          </div>
          {products?.length ? (
            <CardList products={products} cn="filteresCardlist" />
          ) : (
            <p className="filters__notmatching">
              Sorry, we don't have any matching products
            </p>
          )}
        </div>
        <div className="catalogPagination">
          {productCount ? (
            <Pagination
              pageCount={productCount}
              ellPerPage={6}
              onChnagePage={(page) => setPage(page)}
            />
          ) : null}
        </div>
      </Container>
    </div>
  );
}
