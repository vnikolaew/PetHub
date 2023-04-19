'use client'
import React from "react";
import { Breadcrumb } from "../../../components";
import Link from "next/link";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { NextPage } from "next";

const CatFoodsPage: NextPage = () => {
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Храни", path: "foods" },
               { label: "Котки", path: "cats" },
            ]}
         />

         <section className={`w-full my-12 flex flex-col items-center gap-6`}>
            <h1 className={`text-4xl`}>Храна за котки</h1>
            <div
               className={`flex text-2xl mt-6 gap-36 items-center justify-around`}
            >
               <Link href={"/foods/dogs/dry-foods"}>
                  <div
                     className={`flex px-20 py-12 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
                  >
                     <span>Храна за малки котенца</span>
                     <ChevronRightIcon
                        className={`pt-1`}
                        width={24}
                        height={24}
                     />
                  </div>
               </Link>

               <Link href={"/foods/dogs/cans-and-pouches"}>
                  <div
                     className={`flex px-20 py-12 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
                  >
                     <span>Консерви</span>
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
                     className={`flex px-20 py-12 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
                  >
                     <span>Суха храна</span>
                     <ChevronRightIcon
                        className={`pt-1`}
                        width={24}
                        height={24}
                     />
                  </div>
               </Link>

               <Link href={"/foods/dogs/supplements"}>
                  <div
                     className={`flex px-10 py-12 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
                  >
                     <span>Лакомства и витамини</span>
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

export default CatFoodsPage;
