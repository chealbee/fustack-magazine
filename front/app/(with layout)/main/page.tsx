import "./style.scss";

import axios from "axios";
import MainSlider from "./MainSlider";
import Container from "@/app/components/layout/container/Container";
import CardList from "@/app/components/elements/cardList/CardList";
import { IProduct } from "@/app/types/product";

const getProducts = async () => {
  return (
    await axios.post<{ rows: IProduct[] }>(
      "http://localhost:5000/product/getAll",
      { typeId: [], brandId: [], limit: 4, page: 1 }
    )
  ).data;
};

const page = async () => {
  const products = await getProducts();

  return (
    <div>
      <Container>
        <MainSlider />
        <h2 className="mainCategory">Hot sale</h2>
        <CardList cn="mainList" products={products.rows} />
        <h2 className="mainCategory">Hot sale</h2>
        <CardList cn="mainList" products={products.rows} />
        <h2 className="mainCategory">About company</h2>
        <p className="mainAbout">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
          facilis repudiandae recusandae dolorem in ratione soluta quod
          delectus. Dolor natus ullam eius odit? Quis voluptatibus, a nihil
          distinctio quo nam!
        </p>
      </Container>
    </div>
  );
};

export default page;
