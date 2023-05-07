import React, { FC } from "react";
import Image from "next/image";
import { Cross1Icon } from "@radix-ui/react-icons";
import { currencyFormatter } from "../Account";
import { IShoppingCartProduct } from "@pethub/state";

export interface ShoppingCartProductRowProps {
   product: IShoppingCartProduct;
   onRemoveProduct: () => void;
   onChangeQuantity: (quantity: number) => void;
}

export const ShoppingCartProductRow: FC<ShoppingCartProductRowProps> = ({
   product: { product, quantity },
   onRemoveProduct,
   onChangeQuantity,
}) => {
   return (
      <div className={`grid relative gap-2 grid-cols-productRow`}>
         <Cross1Icon
            onClick={(_) => onRemoveProduct()}
            width={20}
            height={20}
            className={`absolute cursor-pointer hover:opacity-60 transition-opacity duration-200 -left-10 top-1/4 text-red-600`}
         />
         <div className={`flex items-center justify-center`}>
            <Image
               height={30}
               width={30}
               src={product.image}
               alt={"Product image"}
            />
         </div>
         <div className={`text-xl`}>{product.name}</div>
         <div className={`text-xl text-right`}>
            {currencyFormatter.format(product.price)}
         </div>
         <div className={`text-xl flex items-start justify-center`}>
            <input
               className={`text-right rounded-md shadow-sm`}
               onChange={(e) => onChangeQuantity(e.target.valueAsNumber)}
               value={quantity.toFixed(2)}
               type={"number"}
            />
         </div>
         <div className={`text-2xl text-right`}>
            {currencyFormatter.format(product.price * quantity)}
         </div>
      </div>
   );
};
