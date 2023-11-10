import { TProduct } from "./Product";

export type TCart = {
  [id: number]: { count: number; product: TProduct };
};
