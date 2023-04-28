import { create } from "zustand";
import { produce } from "immer";
import { StaticImageData } from "next/image";
import { LOREM_IPSUM_TEXT } from "@pethub/web/utils/string-constants";
import sampleImageLogo from "@pethub/assets/sample-product-logo.png";

export interface IProductRating {
   from: string;
   image: string | StaticImageData;
   reviewText: string;
   rating: number;
}

export interface IProductDetails {
   name: string;
   id: string;
   image: string | StaticImageData;
   sizes: string[];
   price: number;
   readonly averageRating: number;
   description: string;
   ratings: IProductRating[];
}

export interface IShoppingCartProduct {
   product: IProductDetails;
   quantity: number;
}

export interface IShoppingCartState {
   products: IShoppingCartProduct[];

   get total(): number;

   discount: number;
}

export interface Actions {
   addProduct: (product: IProductDetails, quantity?: number) => void;
   removeProduct: (productId: string) => void;
   applyDiscount: (discount: number) => void;
   removeDiscount: () => void;
}

export const initialState: IShoppingCartState = {
   products: [
      {
         product: {
            name: `Sample product 1`,
            description: LOREM_IPSUM_TEXT.slice(0, 50),
            id: "sdf32r322ajdab",
            sizes: ["S", "M", "XL"],
            ratings: [],
            price: 32.5,
            averageRating: 4.5,
            image: sampleImageLogo,
         },
         quantity: 2,
      },
   ],
   get total() {
      return this.products.reduce(
         (acc, curr) => acc + curr.quantity * curr.product.price,
         0
      );
   },
   discount: 0.05,
};

export const useShoppingCart = create<IShoppingCartState & Actions>((set) => ({
   ...initialState,
   addProduct: (product: IProductDetails, quantity = 1) =>
      set(
         produce((state: IShoppingCartState) => {
            const existing = state.products.find(
               (p) => p.product.name === product.name
            );
            if (existing) existing.quantity += quantity;
            else state.products.push({ product, quantity });
         })
      ),
   applyDiscount: (discount: number) =>
      set(
         produce((state: IShoppingCartState) => {
            state.discount = discount;
         })
      ),
   removeDiscount: () =>
      set(
         produce((state: IShoppingCartState) => {
            state.discount = 0;
         })
      ),
   removeProduct: (productId: string) =>
      set(
         produce((state: IShoppingCartState) => {
            const existing = state.products.find(
               (p) => p.product.id === productId
            );
            if (existing && existing.quantity > 0) existing.quantity--;
         })
      ),
}));
