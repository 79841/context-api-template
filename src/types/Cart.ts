import { TProduct } from "./Product";

export type TCart = {
  [id: TProduct["id"]]: { count: number; product: TProduct };
};
