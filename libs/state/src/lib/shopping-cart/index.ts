import { create } from "zustand";
import { produce } from "immer";
import { StaticImageData } from "next/image";

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
   averageRating: number;
   description: string;
   ratings: IProductRating[];
}

export interface IShoppingCartState {
   products: { product: IProductDetails; quantity: number };
   total: number;
   discount: number;
}
