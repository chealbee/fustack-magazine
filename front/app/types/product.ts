export interface IProduct {
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;

  brand: { name: string };
  type: { name: string };
  info: { title: string; description: string }[];
}
