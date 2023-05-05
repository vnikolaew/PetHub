import React, { FC, Fragment } from "react";
import { useShoppingCart } from "@pethub/state";
import Image from "next/image";
import { currencyFormatter } from "@pethub/components";
import * as Separator from "@radix-ui/react-separator";
import Link from "next/link";

export interface ShoppingCartDropdownProps {
   onClose?: () => void;
}

const ShoppingCartDropdown: FC<ShoppingCartDropdownProps> = ({ onClose }) => {
   const products = useShoppingCart((state) => state.products);

   return (
      <div className={`flex flex-col items-start gap-4`}>
         {products.length > 0 ? (
            products.map((product, i) => (
               <Fragment key={i}>
                  <div
                     className={`flex w-full items-center justify-between gap-2 p-2`}
                  >
                     <Image
                        className={`rounded-full mr-2 shadow-md`}
                        height={20}
                        width={20}
                        src={`${product.product.image}`}
                        alt={""}
                     />
                     <span className={`text-xs max-w-[150px]`}>
                        {product.product.name}
                     </span>
                     <span className={`text-sm`}>X</span>
                     <span className={`text-sm`}>{product.quantity}</span>
                     <span
                        className={`font-semibold flex-1 text-right justify-self-end ml-auto`}
                     >
                        {" "}
                        {currencyFormatter.format(
                           product.product.price * product.quantity
                        )}
                     </span>
                  </div>
                  {i !== products.length - 1 && (
                     <Separator.Root
                        orientation={"horizontal"}
                        className={`w-2/3 h-[1px] bg-gray-200`}
                     />
                  )}
               </Fragment>
            ))
         ) : (
            <div className={`text-gray-400 mt-4 w-full text-center text-lg`}>
               Количката ви е празна.{" "}
            </div>
         )}
         <div className={`w-full flex items-center justify-center`}>
            {products.length === 0 ? (
               <Link href={`/`}>
                  <button
                     onClick={(_) => onClose?.()}
                     className={`self-center transition-opacity duration-200 hover:opacity-90 rounded-md shadow-md m-4 px-5 py-1 bg-raw-sienna text-white text-lg`}
                  >
                     Към начална страница
                  </button>
               </Link>
            ) : (
               <Link href={`/shopping-cart`}>
                  <button
                     onClick={(_) => onClose?.()}
                     className={`self-center transition-opacity duration-200 hover:opacity-90 rounded-md shadow-md m-4 px-5 py-1 bg-raw-sienna text-white text-lg`}
                  >
                     Завърши поръчка
                  </button>
               </Link>
            )}
         </div>
      </div>
   );
};

export default ShoppingCartDropdown;
