import { IProduct } from "./product";

export interface IcartProduct {
  userId: number;
  productId: number;
  Product: IProduct;
}
