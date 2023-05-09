"use client";
import React from "react";
import { NextPage } from "next";
import { Breadcrumb } from "@pethub/components";
import Link from "next/link";
import { ChevronRightIcon } from "@radix-ui/react-icons";

const DogFoodsPage: NextPage = () => {
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Храни", path: "foods" },
               { label: "Кучета", path: "dogs" },
            ]}
         />
         <section className={`w-full my-8 flex flex-col items-center gap-6`}>
            <h1 className={`text-4xl`}>Храна за кучета</h1>
            <div
               className={`flex  text-2xl mt-6 gap-36 items-center justify-around`}
            >
               <Link href={"/foods/dogs/dry-food"}>
                  <div
                     className={`flex  px-20 bg-white py-12 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
                  >
                     <span>Суха храна</span>
                     <ChevronRightIcon
                        className={`pt-1`}
                        width={24}
                        height={24}
                     />
                  </div>
               </Link>

               <Link href={"/foods/dogs/cans-and-pouches"}>
                  <div
                     className={`flex px-16 py-12 bg-white border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
                  >
                     <span className={`whitespace-nowrap`}>
                        Консерви и паучове
                     </span>
                     <ChevronRightIcon
                        className={`pt-1`}
                        width={24}
                        height={24}
                     />
                  </div>
               </Link>
            </div>

            <div
               className={`flex text-2xl mt-6 gap-36 items-center justify-around`}
            >
               <Link href={"/foods/dogs/goodies"}>
                  <div
                     className={`flex px-20 py-12 bg-white border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
                  >
                     <span>Лакомства</span>
                     <ChevronRightIcon
                        className={`pt-1`}
                        width={24}
                        height={24}
                     />
                  </div>
               </Link>

               <Link href={"/foods/dogs/supplements"}>
                  <div
                     className={`flex px-10 py-12 border-black bg-white rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
                  >
                     <span>Витамини и добавки</span>
                     <ChevronRightIcon
                        className={`pt-1`}
                        width={24}
                        height={24}
                     />
                  </div>
               </Link>
            </div>
         </section>
      </div>
   );
};

export default DogFoodsPage;
