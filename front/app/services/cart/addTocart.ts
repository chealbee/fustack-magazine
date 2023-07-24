import axios from "axios";
import toast from "react-hot-toast";

const addToCart = async ({
  userId,
  productId,
  token,
}: {
  userId: number;
  productId: number;
  token: string;
}) => {
  try {
    const data = await axios.post(
      "http://localhost:5000/basket",
      {
        userId: userId,
        productId: productId,
      },
      { headers: { Authorization: "Bearer " + token } }
    );
    toast.success("product add to cart");
  } catch (error) {
    toast.error("product not add to cart");
  }
};
export default addToCart;
