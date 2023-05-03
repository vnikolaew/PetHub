import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";
import { IProductDetails, PetInfoType } from "@pethub/state";
import { currencyFormatter, ProductType } from "@pethub/components";

export interface ProductCardProps {
   product: IProductDetails;
   productType: ProductType;
   petType: PetInfoType;
   readonly category: string;
}

export const ProductCard: FC<ProductCardProps> = ({
   product,
   petType,
   category,
   productType,
}) => {
   return (
      <Link href={`/${productType}/${petType}/${category}/${product.id}`}>
         <div
            className={`flex gap-2 hover:scale-105 transition-all duration-300 flex-col border border-1 rounded-xl border-gray-100 shadow-md p-4 px-8 items-center justify-center`}
         >
            <Image
               height={120}
               width={120}
               src={product.image}
               alt={product.name}
            />
            <div
               className={`flex flex-col items-start mt-2 justify-between gap-2`}
            >
               <h2 className={`text-lg w-full leading-5 line-clamp-4`}>
                  {product.name}
               </h2>
               <span
                  className={`text-2xl mt-2 bg-whiskey text-woodsmoke rounded-full px-4 py-0.5 self-center font-semibold`}
               >
                  {currencyFormatter.format(product.price)}
               </span>
            </div>
         </div>
      </Link>
   );
};
