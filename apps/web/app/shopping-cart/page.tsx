"use client";
import React, { Fragment } from "react";
import { NextPage } from "next";
import {
   Breadcrumb,
   currencyFormatter,
   ShoppingCartProductRow,
} from "@pethub/components";
import sampleProductLogo from "@pethub/assets/sample-product-logo.png";
import Link from "next/link";
import * as Separator from "@radix-ui/react-separator";
import {
   IShoppingCartProduct,
   useCurrentUser,
   useShoppingCart,
} from "@pethub/state";

const SHOPPING_CART_PRODUCTS: IShoppingCartProduct[] = [
   {
      product: {
         image: sampleProductLogo,
         price: 3.5,
         get total() {
            return this.price * this.quantity;
         },
         name: "Dog biscuits",
      },
      quantity: 3,
   },
   {
      product: {
         image: sampleProductLogo,
         price: 12.5,
         get total() {
            return this.price * this.quantity;
         },
         name: "Fish Ocean plankton",
      },
      quantity: 2,
   },
];
const ShoppingCartPage: NextPage = () => {
   const user = useCurrentUser((state) => state.user);
   const { discount, total, products, applyDiscount } = useShoppingCart(
      ({ products, discount, total, applyDiscount }) => ({
         products,
         discount,
         total,
         applyDiscount,
      })
   );
   console.log(products);

   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Количка", path: "shopping-cart" },
            ]}
         />
         <section className={`w-full my-6 flex flex-col items-center gap-6`}>
            <div className={`grid w-full grid-cols-3`}>
               <span />
               <div className={`text-center`}>
                  <h1 className={`text-4xl`}>
                     <span className={`font-semibold`}>Количка</span>{" "}
                  </h1>
               </div>
               {!user && (
                  <div className={`flex items-start justify-end`}>
                     <Link
                        className={`text-blue-700 text-lg underline`}
                        href={"/signin?redirect=shopping-cart"}
                     >
                        Имате профил? Влезте оттук
                     </Link>
                  </div>
               )}
            </div>

            <div className={`w-[70%] mt-4 flex flex-col gap-4`}>
               <div className={`grid gap-2 mb-4 grid-cols-productRow`}>
                  <div />
                  <div className={`text-2xl text-raw-sienna font-normal`}>
                     Продукт
                  </div>
                  <div className={`text-2xl text-raw-sienna font-normal`}>
                     Цена
                  </div>
                  <div className={`text-2xl text-raw-sienna font-normal`}>
                     Количество
                  </div>
                  <div className={`text-2xl text-raw-sienna font-normal`}>
                     Общо
                  </div>
               </div>
               {products.map((product, i) => (
                  <Fragment key={i}>
                     <ShoppingCartProductRow
                        onRemoveProduct={() => {}}
                        product={product}
                     />
                     <Separator.Root
                        className={`h-[1px] mt-2 bg-gray-200 w-full`}
                        orientation={"horizontal"}
                     />
                  </Fragment>
               ))}
               <div className={`flex items-center justify-between w-full`}>
                  <div className={`flex items-center mt-12 gap-8`}>
                     <input
                        className={`text-md w-40 px-4 text-center py-1 block rounded-md shadow-md`}
                        placeholder={"промокод"}
                        type={"text"}
                     />
                     <button
                        onClick={(_) => applyDiscount(0.1)}
                        className={`flex text-md hover:opacity-90 transition-all duration-200 shadow-md px-8 py-1 bg-cornflower-blue text-white border-2 border-cornflower-blue rounded-lg outline-none items-center gap-2`}
                     >
                        Приложи кода за отстъпка
                     </button>
                  </div>
                  <div className={`flex mt-12 items-center gap-8`}>
                     <label
                        htmlFor={"total"}
                        className={`text-2xl text-raw-sienna font-normal`}
                     >
                        Обща сума
                     </label>
                     <span className={`text-2xl font-semibold`} id={"total"}>
                        {currencyFormatter.format(total)}
                     </span>
                  </div>
               </div>
            </div>
            <div className={`self-end mt-8 justify-self-end`}>
               <Link href={`/shopping-cart/complete-order`}>
                  <button
                     className={`flex text-2xl hover:opacity-90 transition-all duration-200 shadow-md px-8 py-2 bg-cornflower-blue text-white border-2 border-cornflower-blue rounded-lg outline-none items-center gap-2`}
                  >
                     Завърши поръчката
                  </button>
               </Link>
            </div>
         </section>
      </div>
   );
};

export default ShoppingCartPage;
