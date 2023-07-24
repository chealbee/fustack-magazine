import axios from "axios";
import { IcartProduct } from "../types/cart";

interface ICartRes {
  basketProducts: IcartProduct[];
}

const getCart = async ({
  userId,
  token,
}: {
  userId: number;
  token: string;
}) => {
  const data = await axios.post<ICartRes>(
    "http://localhost:5000/basket/" + userId,
    { token: token },
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
  return data.data.basketProducts;
};
export default getCart;
