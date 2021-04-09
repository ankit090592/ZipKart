import { IRoute } from "../models/common-models";

export const HOME: IRoute = {
    path: 'home',
    get fullUrl(): string {
      return `/${this.path}`;
    },
  };

  export const PRODUCT_LIST: IRoute = {
    path: 'products',
    get fullUrl(): string {
      return `/${this.path}`;
    },
  };

  export const CART: IRoute = {
    path: 'cart',
    get fullUrl(): string {
      return `/${this.path}`;
    },
  };