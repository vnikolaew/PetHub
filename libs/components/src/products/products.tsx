import { ProductCardProps } from "@pethub/components";
import {
   createContext,
   Dispatch,
   FC,
   PropsWithChildren,
   SetStateAction,
   useContext,
   useState,
} from "react";
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
   const onSaleRandomIndices = Array.from({ length: 6 }).map((_, i) =>
      Math.round(Math.random() * ALL_PRODUCTS.length)
   );

   return (ALL_PRODUCTS as unknown as any[])
      .map((p, i) =>
         onSaleRandomIndices.some((idx) => idx === i)
            ? {
                 ...p,
                 product: {
                    ...p.product,
                    discount: 0.1 * Math.round(Math.random() * 5),
                 },
              }
            : p
      )
      .map((p) => ({
         ...p,
         product: {
            ...p.product,
            description: p.product.description
               ?.replaceAll("\r", "")
               ?.replaceAll("\t", ""),
            averageRating: p.product?.average_rating ?? 3.0,
            image: `http://zoobg.bg${p.product?.image ?? ""}`,
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

const ProductsContext = createContext<{
   products: ProductCardProps[];
   setProducts: Dispatch<SetStateAction<ProductCardProps[]>>;
}>(null!);

export const memoizedProducts = memoize(getAllProducts);

export const ProductsProvider: FC<PropsWithChildren> = ({ children }) => {
   const [products, setProducts] = useState(() => memoizedProducts());

   return (
      <ProductsContext.Provider value={{ products, setProducts }}>
         {children}
      </ProductsContext.Provider>
   );
};

export const useProductsContext = () => useContext(ProductsContext);
