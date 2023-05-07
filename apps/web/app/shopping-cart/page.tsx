"use client";
import React, { Fragment, useState } from "react";
import { NextPage } from "next";
import {
   Breadcrumb,
   currencyFormatter,
   ShoppingCartProductRow,
} from "@pethub/components";
import Link from "next/link";
import * as Separator from "@radix-ui/react-separator";
import { useCurrentUser, useShoppingCart } from "@pethub/state";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";

interface IPromoCodeState {
   value: string;
   errorMessage?: string;
}

const ShoppingCartPage: NextPage = () => {
   const user = useCurrentUser((state) => state.user);
   const [promoCode, setPromoCode] = useState<IPromoCodeState>({ value: "" });
   const [isAlertOpen, setIsAlertOpen] = useState(false);
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
                  <div
                     className={`text-2xl text-raw-sienna text-right font-normal`}
                  >
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
                        className={`h-[1px] mt-2 bg-black w-full`}
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
                        Отстъпка(
                        <span className={`font-semibold`}>
                           -{discount * 100}%
                        </span>
                        ):
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
                  <div className={`flex items-start mt-2 gap-8`}>
                     <div className={`flex flex-col items-start gap-2`}>
                        <input
                           value={promoCode.value}
                           onChange={(e) =>
                              setPromoCode((c) => ({
                                 ...c,
                                 value: e.target.value,
                              }))
                           }
                           className={`text-md w-40 px-4 text-center py-1 block rounded-md shadow-md`}
                           placeholder={"промокод"}
                           type={"text"}
                        />
                        {promoCode.errorMessage && (
                           <span className={`text-red-500 font-semibold`}>
                              {promoCode.errorMessage}
                           </span>
                        )}
                     </div>
                     <AlertDialog.Root
                        open={isAlertOpen}
                        onOpenChange={setIsAlertOpen}
                     >
                        <button
                           onClick={(_) => {
                              if (promoCode.value === "SLAVI10") {
                                 applyDiscount(0.1);
                                 setIsAlertOpen(true);
                              } else {
                                 setIsAlertOpen(false);
                                 setPromoCode((c) => ({
                                    ...c,
                                    errorMessage: "Кодът е невалиден!",
                                 }));
                              }
                           }}
                           className={`flex text-md hover:opacity-90 transition-all duration-200 shadow-md px-8 py-1 bg-cornflower-blue text-white border-2 border-cornflower-blue rounded-lg outline-none items-center gap-2`}
                        >
                           Приложи кода за отстъпка
                        </button>
                        <AlertDialog.Portal>
                           <AlertDialog.Overlay
                              className={`bg-black animate-overlayShow bg-opacity-40 fixed inset-0`}
                           />
                           <AlertDialog.Content
                              className={`bg-white flex items-center flex-col justify-center shadow-md fixed top-1/2 left-1/2 -translate-x-1/2 w-[90vw] max-w-[500px] focus:outline-none max-h-[85vh] p-4 animate-contentShow -translate-y-1/2 rounded-md`}
                           >
                              <div
                                 className={`w-full relative items-center justify-center flex gap-8`}
                              >
                                 <AlertDialog.Title
                                    className={`m-0 font-semibold text-black text-2xl`}
                                 >
                                    Известие
                                 </AlertDialog.Title>
                                 <AlertDialog.Cancel
                                    className={`absolute flex items-center justify-center p-1 hover:bg-red-50 rounded-full right-2 top-1`}
                                 >
                                    <Cross1Icon
                                       height={16}
                                       width={16}
                                       color={"red"}
                                    />
                                 </AlertDialog.Cancel>
                              </div>
                              <AlertDialog.Description
                                 className={`my-5 flex flex-col items-center text-lg`}
                              >
                                 <div
                                    className={`flex flex-col items-center gap-0`}
                                 >
                                    <div>
                                       Кодът за отстъпка{" "}
                                       <span
                                          className={`font-semibold inline text-lg text-red-500`}
                                       >
                                          {promoCode.value}
                                       </span>{" "}
                                       бе успешно приложен!{" "}
                                    </div>
                                    <CheckIcon
                                       height={30}
                                       width={30}
                                       color={"green"}
                                    />
                                    <div className={`mt-4`}>
                                       Отстъпка:{" "}
                                       <span
                                          className={`font-semibold text-xl text-green-500`}
                                       >
                                          -{(discount * 100).toFixed(0)}%{" "}
                                       </span>
                                    </div>
                                 </div>
                              </AlertDialog.Description>
                              <div
                                 className={`flex items-center justify-center w-full mt-4 gap-4`}
                              >
                                 <AlertDialog.Action asChild>
                                    <button
                                       className={`text-black hover:opacity-90 transition-all duration-200 shadow-md bg-albescent-white py-1 rounded-lg text-lg w-1/2`}
                                    >
                                       ОК
                                    </button>
                                 </AlertDialog.Action>
                              </div>
                           </AlertDialog.Content>
                        </AlertDialog.Portal>
                     </AlertDialog.Root>
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
