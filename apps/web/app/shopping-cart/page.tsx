"use client";
import React, { Fragment } from "react";
import { NextPage } from "next";
import {
   Breadcrumb,
   currencyFormatter,
   ShoppingCartProductRow,
} from "@pethub/components";
import Link from "next/link";
import * as Separator from "@radix-ui/react-separator";
import { useCurrentUser, useShoppingCart } from "@pethub/state";

const ShoppingCartPage: NextPage = () => {
   const user = useCurrentUser((state) => state.user);
   const { discount, products, applyDiscount, removeProduct, changeQuantity } =
      useShoppingCart(
         ({
            products,
            discount,
            applyDiscount,
            removeProduct,
            changeQuantity,
         }) => ({
            products,
            discount,
            removeProduct,
            applyDiscount,
            changeQuantity,
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
                        onRemoveProduct={() =>
                           removeProduct(product.product.id)
                        }
                        onChangeQuantity={(q) =>
                           changeQuantity(product.product.id, q)
                        }
                        product={product}
                     />
                     <Separator.Root
                        className={`h-[1px] mt-2 bg-gray-200 w-full`}
                        orientation={"horizontal"}
                     />
                  </Fragment>
               ))}
               <div className={`flex items-center justify-end w-full`}>
                  <div className={`flex mt-2 items-center gap-8`}>
                     <label
                        htmlFor={"total"}
                        className={`text-xl text-raw-sienna font-normal`}
                     >
                        Отстъпка({discount * 100}%):
                     </label>
                     <span className={`text-xl font-normal`} id={"total"}>
                        {currencyFormatter.format(
                           discount *
                              products.reduce(
                                 (acc, curr) =>
                                    acc + curr.product.price * curr.quantity,
                                 0
                              )
                        )}
                     </span>
                  </div>
               </div>
               <div className={`flex items-center justify-between w-full`}>
                  <div className={`flex items-center mt-2 gap-8`}>
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
                  <div className={`flex mt-0 items-center gap-8`}>
                     <label
                        htmlFor={"total"}
                        className={`text-2xl text-raw-sienna font-normal`}
                     >
                        Обща сума
                     </label>
                     <span className={`text-2xl font-semibold`} id={"total"}>
                        {currencyFormatter.format(
                           (1 - discount) *
                              products.reduce(
                                 (acc, curr) =>
                                    acc + curr.product.price * curr.quantity,
                                 0
                              )
                        )}
                     </span>
                  </div>
               </div>
               <div className={`self-end mt-12 justify-self-end`}>
                  <Link href={`/shopping-cart/complete-order`}>
                     <button
                        className={`flex text-2xl hover:opacity-90 transition-all duration-200 shadow-md px-8 py-2 bg-cornflower-blue text-white border-2 border-cornflower-blue rounded-lg outline-none items-center gap-2`}
                     >
                        Завърши поръчката
                     </button>
                  </Link>
               </div>
            </div>
         </section>
      </div>
   );
};

export default ShoppingCartPage;
