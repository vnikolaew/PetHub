import { create } from "zustand";
import { produce } from "immer";
import { StaticImageData } from "next/image";
import { catsSupplements, dogsDryFoods } from "@pethub/data";

export interface IProductRating {
   from: string;
   userImage: string | StaticImageData;
   timestamp: Date;
   image: string | StaticImageData;
   reviewText: string;
   rating: number;
}

export interface IRecipientInfo {
   firstName: string;
   lastName: string;
   phoneNumber: string;
   livingAddress: string;
   officeAddress: string;
   orderComment: string;
   paymentType: string;
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
   readonly total?: number;
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
   changeQuantity: (productId: string, quantity: number) => void;
   removeProduct: (productId: string) => void;
   applyDiscount: (discount: number) => void;
   removeDiscount: () => void;
   clearShoppingCart: () => void;
}

export const initialState: IShoppingCartState = {
   products: [...dogsDryFoods, ...catsSupplements].slice(100, 103).map((p) => ({
      product: {
         ...p.product,
         image: `http://zoobg.bg/${p.product?.image ?? ""}`,
         averageRating: p.product.average_rating,
         ratings:
            p.product?.ratings.map((r) => ({
               ...r,
               image: "",
               from: r.username,
               userImage: r.user_image,
               reviewText: r.review_text,
               timestamp: new Date(r.timestamp),
            })) ?? [],
      },
      quantity: Math.round(Math.random() * 5 + 1),
   })),
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
            state.products = state.products.filter(
               (p) => p.product.id !== productId
            );
         })
      ),

   clearShoppingCart: () =>
      set(
         produce((state: IShoppingCartState) => {
            state.products = [];
         })
      ),
   changeQuantity: (productId: string, quantity: number) =>
      set(
         produce((state: IShoppingCartState) => {
            const product = state.products.find(
               (p) => p.product.id === productId
            );
            if (!product) return;
            product.quantity = quantity;
         })
      ),
}));
