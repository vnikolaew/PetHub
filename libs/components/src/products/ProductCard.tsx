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
      <Link
         className={``}
         href={`/${productType}/${petType}/${category}/${product.id}`}
      >
         <div
            className={`flex bg-white relative gap-2 hover:scale-105 transition-all duration-300 flex-col border border-1 rounded-xl border-gray-100 shadow-md p-4 px-8 items-center justify-center`}
         >
            {(product as any).discount !== undefined && (
               <div
                  className={`absolute flex items-center justify-center p-2 -top-2 -right-2 bg-red-500 text-white text-sm w-10 h-10 rounded-full`}
               >
                  -{Math.round((product as any).discount * 100)}%
               </div>
            )}
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
                  className={`text-2xl mt-2 bg-white text-woodsmoke rounded-full px-4 py-0.5 self-center font-semibold`}
               >
                  {currencyFormatter.format(
                     product.price * (1 - ((product as any).discount ?? 0))
                  )}{" "}
                  {(product as any).discount !== undefined && (
                     <span
                        className={`line-through font-thin text-[1.2rem] text-gray-400`}
                     >
                        {currencyFormatter.format(product.price)}
                     </span>
                  )}
               </span>
            </div>
         </div>
      </Link>
   );
};
