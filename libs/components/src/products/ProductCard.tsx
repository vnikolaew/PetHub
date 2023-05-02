import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";
import { IProductDetails, PetType } from "@pethub/state";
import { currencyFormatter, ProductType } from "@pethub/components";

export interface ProductCardProps {
   product: IProductDetails;
   productType: ProductType;
   petType: PetType;
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
