import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import { IProductDetails } from "@pethub/state";
import { currencyFormatter } from "@pethub/components";
import sampleProductImage from "@pethub/assets/sample-product-logo.png";
import userAvatarLogo from "@pethub/assets/user-avatar-logo.png";
import { LOREM_IPSUM_TEXT } from "@pethub/utils/string-constants";

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

export interface ProductCardProps {
   product: IProductDetails;
   productType: ProductType;
   petType: PetType;
   readonly category: string;
}

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

export const ALL_PRODUCTS: ProductCardProps[] = Array.from({ length: 100 })
   .map((_) => Math.round(Math.random() * 200))
   .map((c, i) => ({
      product: {
         image: sampleProductImage,
         name: LOREM_IPSUM_TEXT.slice(c, c + 20),
         sizes: ["S", "L"],
         ratings: Array.from({ length: Math.round(Math.random() * 25) }).map(
            (_, i) => ({
               image: userAvatarLogo,
               userImage: userAvatarLogo,
               rating: Math.round(Math.random() * 5 + 1),
               from: `User ${i}`,
               reviewText: `Sample review text ${i}`,
               timestamp: new Date(
                  2022,
                  Math.random() * 12,
                  Math.random() * 28
               ),
            })
         ),
         averageRating: Math.random() * 5,
         price: Math.round(Math.random() * 50),
         id: `product-${i}`,
         description: `Sample description ${i}`,
      }!,
      productType:
         Math.random() > 0.5 ? ProductType.Food : ProductType.Accessory,
      petType: getPetType(),
      get category() {
         return getCategory(this.productType, this.petType);
      },
   }));

export const ProductCard: FC<ProductCardProps> = ({
   product,
   petType,
   category,
   productType,
}) => {
   return (
      <Link href={`/${productType}/${petType}/${category}/${product.id}`}>
         <div className={`flex gap-2 flex-col p-2 items-center justify-center`}>
            <Image
               height={120}
               width={120}
               src={product.image}
               alt={product.name}
            />
            <div className={`flex flex-col items-start justify-between gap-0`}>
               <h2 className={`text-lg max-w-[140px]`}>{product.name}</h2>
               <span className={`text-lg self-center font-semibold`}>
                  {currencyFormatter.format(product.price)}
               </span>
            </div>
         </div>
      </Link>
   );
};
