"use client";
import React from "react";
import { NextPage } from "next";
import { Breadcrumb } from "@pethub/components";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const BirdFoodsPage: NextPage = () => {
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Храни", path: "foods" },
               { label: "Птици", path: "birds" },
            ]}
         />
         <section className={`w-full my-8 flex flex-col items-center gap-6`}>
            <h1 className={`text-4xl`}>Храна за птици</h1>
            <div
               className={`flex text-xl mt-6 gap-12 items-center justify-center`}
            >
               <Link href={"/foods/birds/basic"}>
                  <div
                     className={`flex px-20 py-12 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
                  >
                     <span>Храна за птици</span>
                     <ChevronRightIcon
                        className={`pt-1`}
                        width={24}
                        height={24}
                     />
                  </div>
               </Link>

               <Link href={"/foods/birds/general"}>
                  <div
                     className={`flex px-10 py-12 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
                  >
                     <span className={`whitespace-nowrap`}>
                        Гранулирани храни за птици
                     </span>
                     <ChevronRightIcon
                        className={`pt-1`}
                        width={24}
                        height={24}
                     />
                  </div>
               </Link>
            </div>

            <div className={`flex text-xl mt-6 items-center justify-center`}>
               <Link href={"/foods/birds/goodies"}>
                  <div
                     className={`flex px-10 py-12 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
                  >
                     <span className={`whitespace-nowrap`}>
                        Лакомства за папагали
                     </span>
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

export default BirdFoodsPage;
