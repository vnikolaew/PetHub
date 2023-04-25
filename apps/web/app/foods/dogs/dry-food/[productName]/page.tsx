"use client";
import React, { Fragment } from "react";
import sampleProductLogo from "@pethub/assets/sample-product-logo.png";
import { Breadcrumb, SelectInput } from "@pethub/components";
import { LOREM_IPSUM_TEXT } from "@pethub/web/utils/string-constants";
import Image, { StaticImageData } from "next/image";
import {
   ChevronLeftIcon,
   ChevronRightIcon,
   StarIcon,
   StarFilledIcon,
   CheckIcon,
   Cross1Icon,
} from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import Link from "next/link";

export interface IProductDetails {
   name: string;
   image: string | StaticImageData;
   sizes: string[];
   price: number;
   averageRating: number;
   description: string;
   ratings: {
      from: string;
      image: string | StaticImageData;
      reviewText: string;
      rating: number;
   }[];
}

export default function ProductDetailsPage({
   params,
}: {
   params: { productName: string };
}) {
   const { productName } = params;
   const product: IProductDetails = {
      name: productName,
      image: sampleProductLogo,
      price: 30.5,
      sizes: ["XS", "S", "L"],
      averageRating: Math.round(Math.random() * 5),
      description: LOREM_IPSUM_TEXT.slice(0, 200),
      ratings: [],
   };

   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Храна", path: "foods" },
               { label: "Кучета", path: "dogs" },
               { label: "Суха храна", path: "dry-food" },
               { label: productName, path: productName },
            ]}
         />
         <section className={`flex flex-col mt-8 items-start gap-12`}>
            <div className={`flex items-start gap-8`}>
               <Image
                  width={350}
                  height={350}
                  className={`rounded-lg shadow-md`}
                  src={product.image}
                  alt={"Product image"}
               />
               <div
                  className={`flex flex-col items-start gap-6 justify-between`}
               >
                  <h2 className={`text-2xl`}>{product.name}</h2>
                  <div className={`flex items-center gap-12`}>
                     <span className={`text-xl`}>Рeйтинг: </span>
                     <div className={`flex items-center gap-1`}>
                        {Array.from({
                           length: Math.round(product.averageRating),
                        }).map((_, i) => (
                           <StarFilledIcon
                              color={"orange"}
                              className={`fill-orange bg-orange`}
                              height={30}
                              width={30}
                              key={i}
                           />
                        ))}
                        {Array.from({
                           length: 5 - Math.round(product.averageRating),
                        }).map((_, i) => (
                           <StarIcon
                              color={"orange"}
                              className={`fill-orange bg-orange`}
                              height={30}
                              width={30}
                              key={i}
                           />
                        ))}
                     </div>
                  </div>
                  <div className={`flex items-center gap-12`}>
                     <span className={`text-xl`}>Размер: </span>
                     <SelectInput
                        placeholder={"Избери"}
                        options={product.sizes.map((size) => ({
                           label: size,
                           value: size,
                        }))}
                        onChange={(_) => {}}
                     />
                  </div>
                  <div className={`flex mt-4 items-center gap-12`}>
                     <input
                        defaultValue={"1"}
                        min={0}
                        autoComplete={"off"}
                        className={`text-lg w-1/5 px-4 py-1 block rounded-md shadow-md`}
                        type={"number"}
                     />
                     <AlertDialog.Root>
                        <AlertDialog.Trigger asChild>
                           <button
                              type={"submit"}
                              className={`flex text-xl hover:opacity-80 transition-all duration-200 shadow-lg px-12 py-1.5 bg-cornflower-blue text-white border-2 border-cornflower-blue rounded-lg outline-none items-center gap-2`}
                           >
                              Добави в кошница
                           </button>
                        </AlertDialog.Trigger>
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
                                 <div className={`flex items-center gap-1`}>
                                    Артикулът е добавен към кошницата!{" "}
                                    <CheckIcon
                                       height={20}
                                       width={20}
                                       color={"green"}
                                    />
                                 </div>
                                 <Link
                                    className={`text-lg text-blue-700 underline`}
                                    href={`/shopping-cart`}
                                 >
                                    Към кошница
                                 </Link>
                              </AlertDialog.Description>
                              <div
                                 className={`flex items-center w-full mt-4 gap-4`}
                              >
                                 <AlertDialog.Cancel asChild>
                                    <button
                                       className={`text-white hover:opacity-90 transition-all duration-200 shadow-md bg-raw-sienna py-1 rounded-lg text-lg w-1/2`}
                                    >
                                       Премахни от кошница
                                    </button>
                                 </AlertDialog.Cancel>
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
               </div>
               <div className={`flex flex-col items-start gap-4`}>
                  <div className={`flex items-center gap-4`}>
                     <h2 className={`text-2xl`}>Описание</h2>
                     <Separator.Root
                        className={`w-[2px] bg-black h-[40px]`}
                        orientation={"vertical"}
                     />
                     <h2 className={`text-2xl text-blue-700 underline`}>
                        Отзиви ({product.ratings.length})
                     </h2>
                  </div>
                  <div>
                     <p className={`text-md max-w-[600px]`}>
                        {product.description}
                     </p>
                  </div>
               </div>
            </div>
            <div className={`flex flex-col w-full items-start gap-2`}>
               <h2 className={`text-2xl font-semibold text-raw-sienna`}>
                  Може да харесате
               </h2>
               <Separator.Root
                  className={`w-full bg-gray-100 h-[1px]`}
                  orientation={"horizontal"}
               />
               <div className={`flex mt-2 self-center items-center gap-8`}>
                  <ChevronLeftIcon height={20} width={20} />
                  {Array.from({ length: 8 }).map((_, i) => (
                     <Fragment key={i}>
                        <Link
                           href={`/foods/dogs/dry-food/sample-product-${i + 1}`}
                        >
                           <div
                              className={`flex gap-4 flex-col items-center justify-center`}
                              key={i}
                           >
                              <Image
                                 height={80}
                                 width={80}
                                 src={sampleProductLogo}
                                 alt={`Sample product #${i + 1}`}
                              />
                              <h2 className={`text-md`}>
                                 Sample product #{i + 1}
                              </h2>
                           </div>
                        </Link>
                     </Fragment>
                  ))}
                  <ChevronRightIcon height={20} width={20} />
               </div>
            </div>
         </section>
      </div>
   );
}
