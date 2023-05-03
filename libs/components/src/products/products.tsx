import { ProductCardProps } from "@pethub/components";
import { createContext, FC, PropsWithChildren, useContext } from "react";
import {
   catsDryFoods,
   dogsDryFoods,
   rodentsFoods,
   rodentsFoods2,
   birdsFoods,
   rodentsGoodies,
   fishFoods,
   dogsSupplements,
   catsSupplements,
   dogsGoodies,
   birdsGoodies,
   dogsCansAndPouches,
   catsCansAndPouches,
   fishDecorations,
   dogsCombs,
   dogsStraps,
   fishOther,
   fishAquariums,
   dogsClothes,
   dogsBags,
   rodentsToys,
   birdsToys,
   birdsCages,
   rodentsCages,
} from "@pethub/data";

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

export const ALL_PRODUCTS = [
   ...rodentsToys,
   ...rodentsCages,
   ...dogsClothes,
   ...dogsStraps,
   ...dogsDryFoods,
   ...dogsCombs,
   ...dogsBags,
   ...dogsSupplements,
   ...dogsGoodies,
   ...dogsCansAndPouches,
   ...catsDryFoods,
   ...catsCansAndPouches,
   ...catsSupplements,
   ...fishFoods,
   ...fishDecorations,
   ...fishAquariums,
   ...fishOther,
   ...birdsFoods,
   ...birdsGoodies,
   ...rodentsGoodies,
   ...rodentsFoods,
   ...rodentsFoods2,
   ...birdsCages,
   ...birdsToys,
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

export const memoizedProducts = memoize(getAllProducts);

export const ProductsProvider: FC<PropsWithChildren> = ({ children }) => {
   const products = memoizedProducts();
   return (
      <ProductsContext.Provider value={products}>
         {children}
      </ProductsContext.Provider>
   );
};

export const useProductsContext = () => useContext(ProductsContext);
