import { ProductCardProps } from "@pethub/components";
import { createContext, FC, PropsWithChildren, useContext } from "react";
import dogsDryFoods from "./data/zoobg_dogs_dry_food.json";
import dogsGoodies from "./data/zoobg_dogs_goodies.json";
import dogsSupplements from "./data/zoobg_dogs_supplements.json";
import dogsCansAndPouches from "./data/zoobg_dogs_cans_and_pouches.json";

import catsDryFoods from "./data/zoobg_cats_dry_food.json";
import catsSupplements from "./data/zoobg_cats_supplements.json";
import catsCansAndPouches from "./data/zoobg_cats_cans_and_pouches.json";

import fishFoods from "./data/zoobg_fish_foods.json";

import birdsFoods from "./data/zoobg_birds_foods.json";
import birdsGoodies from "./data/zoobg_birds_goodies.json";

import rodentsFoods from "./data/zoobg_rodents_foods.json";
import rodentsFoods2 from "./data/zoobg_rodents_foods-2.json";
import rodentsGoodies from "./data/zoobg_rodents_goodies.json";

export enum ProductType {
   Food = "foods",
   Accessory = "accessories",
}

export enum PetType {
   Dogs = "dogs",
   Cats = "cats",
   Fish = "fish",
   Birds = "birds",
   Rodents = "rodents",
}

function memoize<T>(func: (...args: any[]) => T) {
   const cached: T = null!;
   return function (...args: any[]) {
      if (cached) {
         console.log("Getting value from cache");
         return cached;
      } else return func(args);
   };
}

const ALL_PRODUCTS = [
   ...dogsDryFoods,
   ...dogsSupplements,
   ...dogsGoodies,
   ...dogsCansAndPouches,
   ...catsDryFoods,
   ...catsCansAndPouches,
   ...catsSupplements,
   ...fishFoods,
   ...birdsFoods,
   ...birdsGoodies,
   ...rodentsGoodies,
   ...rodentsFoods,
   ...rodentsFoods2,
];

const getAllProducts = (): ProductCardProps[] => {
   return (ALL_PRODUCTS as unknown as any[]).map((p) => ({
      ...p,
      product: {
         ...p.product,
         averageRating: p.product?.average_rating ?? 3.0,
         image: `http://zoobg.bg/${p.product?.image ?? ""}`,
         ratings:
            p.product?.ratings.map((r) => ({
               ...r,
               from: r.username,
               userImage: r.user_image,
               reviewText: r.review_text,
               timestamp: new Date(r.timestamp),
            })) ?? [],
      },
   }));
};

const ProductsContext = createContext<ProductCardProps[]>([]);

const memoizedProducts = memoize(getAllProducts);

export const ProductsProvider: FC<PropsWithChildren> = ({ children }) => {
   const products = memoizedProducts();
   return (
      <ProductsContext.Provider value={products}>
         {children}
      </ProductsContext.Provider>
   );
};

export const useProductsContext = () => useContext(ProductsContext);

function getCategory(productType: ProductType, petType: PetType): string {
   if (productType === ProductType.Food) {
      switch (petType) {
         case PetType.Cats:
            return ["cans", "dry-food", "goodies-and-supplements", "kitties"][
               Math.round(Math.random() * 4)
            ];
         case PetType.Dogs:
            return ["cans-and-pouches", "dry-food", "goodies", "supplements"][
               Math.round(Math.random() * 4)
            ];
         case PetType.Birds:
            return ["goodies", "pelleted"][Math.round(Math.random() * 2)];
         case PetType.Fish:
            return ["aquarium", "pond"][Math.round(Math.random() * 2)];
         case PetType.Rodents:
            return ["goodies", "general"][Math.round(Math.random() * 2)];
      }
   } else {
      switch (petType) {
         case PetType.Cats:
            return [
               "toilet",
               "combs-and-brushes",
               "toys",
               "straps-and-breastplates",
               "beds",
               "cups",
               "bags",
            ][Math.round(Math.random() * 4)];
         case PetType.Dogs:
            return [
               "combs-and-brushes",
               "straps-and-breastplates",
               "clothes",
               "bags-and-cages",
               "beds-and-houses",
               "cups",
               "toys",
               "muzzles",
            ][Math.round(Math.random() * 4)];
         case PetType.Birds:
            return ["toys-and-feeders", "cages"][Math.round(Math.random() * 2)];
         case PetType.Fish:
            return ["aquariums", "decorations", "others"][
               Math.round(Math.random() * 2)
            ];
         case PetType.Rodents:
            return ["toys", "cages"][Math.round(Math.random() * 2)];
      }
   }
}

function getPetType(): PetType {
   const random = Math.round(Math.random() * 5);
   switch (random) {
      case 0:
         return PetType.Cats;
      case 1:
         return PetType.Dogs;
      case 2:
         return PetType.Birds;
      case 3:
         return PetType.Fish;
      case 4:
         return PetType.Rodents;
      default:
         return PetType.Cats;
   }
}
