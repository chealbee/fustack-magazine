import { IProduct } from "@/app/types/product";
import axios from "axios";
import toast from "react-hot-toast";

const cart = {
  deleteFomCart: async ({
    productId,
    token,
  }: {
    userId: number;
    productId: number;
    token: string;
  }) => {
    try {
      const data = await axios.delete(
        "http://localhost:5000/basket/deleteProduct",
        {
          headers: { Authorization: "Bearer " + token },
          data: {
            token: token,
            productId: productId,
          },
        }
      );
      toast.success("product delete from cart");
    } catch (error) {
      toast.error("product not delete from cart");
    }
  },

  cleanCart: async (token: string) => {
    try {
      const data = await axios.delete("http://localhost:5000/basket", {
        headers: { Authorization: "Bearer " + token },
        data: {
          token: token,
        },
      });
      toast.success("thank you for your order");
    } catch (error) {
      toast.error("oop your order cancelled");
    }
  },

  getByName: async (name: string, isLimit = true) => {
    try {
      const data = await axios.post<IProduct[]>(
        "http://localhost:5000/product/allByName",
        {
          name: name,
          isLimit,
        }
      );
      console.log(data);
      if (data.data.length) {
        return data.data;
      } else {
        toast.error("oops we don't have match products");
      }
    } catch (error) {
      toast.error("oops some err");
    }
  },
};
export default cart;
