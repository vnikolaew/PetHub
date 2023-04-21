import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { Cross1Icon } from "@radix-ui/react-icons";

export interface IShoppingCartProduct {
   productImage: string | StaticImageData;
   name: string;
   price: number;
   quantity: number;
   get total(): number;
}

export interface ShoppingCartProductRowProps {
   product: IShoppingCartProduct;
   onRemoveProduct: () => void;
}

export const currencyFormatter = new Intl.NumberFormat("bg", {
   currency: "BGN",
   style: "currency",
   maximumFractionDigits: 2,
});

export const ShoppingCartProductRow: FC<ShoppingCartProductRowProps> = ({
   product,
   onRemoveProduct,
}) => {
   return (
      <div className={`grid relative gap-2 grid-cols-productRow`}>
         <Cross1Icon
            onClick={(_) => onRemoveProduct()}
            width={20}
            height={20}
            className={`absolute cursor-pointer hover:opacity-60 transition-opacity duration-200 -left-10 top-1/4 text-red-600`}
         />
         <Image
            height={30}
            width={30}
            src={product.productImage}
            alt={"Product image"}
         />
         <div className={`text-xl`}>{product.name}</div>
         <div className={`text-xl`}>
            {currencyFormatter.format(product.price)}
         </div>
         <div className={`text-xl flex items-center justify-center`}>
            {product.quantity.toFixed(2)}
         </div>
         <div className={`text-xl`}>
            {currencyFormatter.format(product.total)}
         </div>
      </div>
   );
};
