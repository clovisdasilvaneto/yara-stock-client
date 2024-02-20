import { Product } from "../Products/types";

export type WarehouseProduct = {
  id: number;
  amount: number;
  product: Product;
};

export type WarehouseHistory = {
  id: number;
  action: EWarehouseAction;
  amount: number;
  date: number;
  product: Product;
};

export type Warehouse = {
  id: number;
  name: string;
  maxAmount: number;
  capacity: number;
  hasHazardous: boolean;
  warehouseProduct: WarehouseProduct[];
};

export enum EWarehouseAction {
  IMPORT = "IMPORT",
  EXPORT = "EXPORT",
}
