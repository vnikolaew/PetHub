"use client";
import React, { Fragment } from "react";
import { NextPage } from "next";
import { Breadcrumb, currencyFormatter } from "@pethub/components";
import { useShoppingCart } from "@pethub/state";
import Image from "next/image";
import * as Separator from "@radix-ui/react-separator";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Form from "@radix-ui/react-form";
import { VALID_NAME_REGEX } from "@pethub/web/utils/string-constants";

const PAYMENT_OPTIONS = [
   {
      value: "a",
      label: "Наложен платеж",
   },
   {
      value: "b",
      label: "Банков превод",
   },
   {
      value: "c",
      label: "С карта",
   },
   {
      value: "d",
      label: "PayPal",
   },
];

const CompleteOrderPage: NextPage = () => {
   const { products, total } = useShoppingCart(({ products, total }) => ({
      products,
      total,
   }));

   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Количка", path: "shopping-cart" },
               { label: "Завършване на поръчката", path: "complete-order" },
            ]}
         />
         <section className={`w-full my-6 flex flex-col items-center gap-6`}>
            <div className={`flex items-start gap-8`}>
               <div className={`flex flex-col items-start gap-8`}>
                  <h1 className={`text-2xl text-raw-sienna font-semibold`}>
                     Вашата поръчка
                  </h1>
                  <div className={`grid grid-cols-orderCompleteSummary gap-6`}>
                     <h1 className={`text-xl`}>Продукти</h1>
                     <h1 className={`text-xl text-center`}>Цена</h1>
                     {products.map((product, i) => (
                        <Fragment key={i}>
                           <div className={`flex items-center gap-6`}>
                              <Image
                                 className={`rounded-md`}
                                 height={80}
                                 width={80}
                                 src={product.product.image}
                                 alt={"Product image"}
                              />
                              <div
                                 className={`flex flex-col items-start gap-0`}
                              >
                                 <h2 className={`text-lg font-semibold`}>
                                    {product.product.name}
                                 </h2>
                                 <p
                                    className={`max-w-[250px] text-sm leading-4`}
                                 >
                                    {product.product.description}
                                 </p>
                              </div>
                           </div>
                           <div
                              className={`font-semibold flex items-center justify-center text-xl`}
                           >
                              {currencyFormatter.format(
                                 product.product.price * product.quantity
                              )}
                           </div>
                        </Fragment>
                     ))}
                  </div>
                  <div className={`flex w-full flex-col items-start gap-4`}>
                     <div
                        className={`flex mt-6 items-center w-full justify-between`}
                     >
                        <span className={`text-xl text-center`}>Доставка</span>
                        <span className={`text-xl`}>20.00лв.</span>
                     </div>
                     <div
                        className={`flex items-center w-full justify-between`}
                     >
                        <span className={`text-xl text-center`}>Общо</span>
                        <span className={`text-xl font-semibold`}>
                           {currencyFormatter.format(total)}
                        </span>
                     </div>
                  </div>
               </div>
               <Separator.Root
                  orientation={"vertical"}
                  className={`h-[300px] bg-black w-[1px]`}
               />
               <div className={`flex flex-col items-start gap-8`}>
                  <h1 className={`text-2xl text-raw-sienna font-semibold`}>
                     Начин на плащане
                  </h1>
                  <RadioGroup.Root className={`flex mt-4 items-center gap-12`}>
                     <div className={`flex flex-col items-start gap-2`}>
                        {PAYMENT_OPTIONS.map((option, i) => (
                           <div key={i} className={`flex items-center gap-1`}>
                              <RadioGroup.Item
                                 value={option.value}
                                 id={option.value}
                                 className={`bg-white hover:bg-slate-50 w-4 h-4 rounded-full shadow-md`}
                              >
                                 <RadioGroup.Indicator
                                    className={`flex w-full h-full relative after:content-[''] after:block after:w-[7px] after:h-[7px] after:rounded-full after:bg-violet-600 items-center justify-center`}
                                 />
                              </RadioGroup.Item>
                              <label
                                 className={`ml-1 text-xl`}
                                 htmlFor={option.value}
                              >
                                 {option.label}
                              </label>
                           </div>
                        ))}
                     </div>
                  </RadioGroup.Root>
               </div>
               <Separator.Root
                  orientation={"vertical"}
                  className={`h-[300px] bg-black w-[1px]`}
               />
               <div className={`flex flex-col items-start gap-8`}>
                  <h1 className={`text-2xl text-raw-sienna font-semibold`}>
                     Данни на получателя
                  </h1>
                  <Form.Root
                     onSubmit={(_) => {}}
                     className={`flex items-start gap-16`}
                  >
                     <div className={`flex w-96 flex-col gap-6 items-start`}>
                        <Form.Field
                           className={`flex items-center justify-between w-full`}
                           name={"firstName"}
                        >
                           <Form.Label className={`text-xl`}>Име</Form.Label>
                           <div
                              className={`flex flex-1 flex-col justify-end gap-2`}
                           >
                              <Form.Control name={"firstName"} asChild>
                                 <input
                                    placeholder={"John"}
                                    autoComplete={"off"}
                                    className={`text-lg mt-1 px-4 py-1 block rounded-md shadow-md`}
                                    type={"text"}
                                 />
                              </Form.Control>
                              <Form.Message
                                 className={`text-red-600`}
                                 match={(value, _) =>
                                    !VALID_NAME_REGEX.test(value)
                                 }
                              >
                                 Моля въведете валидно име
                              </Form.Message>
                           </div>
                        </Form.Field>
                     </div>
                  </Form.Root>
               </div>
            </div>
         </section>
      </div>
   );
};

export default CompleteOrderPage;
