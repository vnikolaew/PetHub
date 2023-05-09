"use client";
import React from "react";
import { NextPage } from "next";
import { Breadcrumb } from "@pethub/components";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const FishFoodsPage: NextPage = () => {
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Храни", path: "foods" },
               { label: "Риби", path: "fish" },
            ]}
         />

         <section className={`w-full my-8 flex flex-col items-center gap-6`}>
            <h1 className={`text-4xl`}>Храна за риби</h1>
            <div
               className={`flex text-xl mt-6 gap-36 items-center justify-around`}
            >
               <Link href={"/foods/fish/pond"}>
                  <div
                     className={`flex bg-white px-20 py-12 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
                  >
                     <span>Храна за езерни риби</span>
                     <ChevronRightIcon
                        className={`pt-1`}
                        width={24}
                        height={24}
                     />
                  </div>
               </Link>

               <Link href={"/foods/fish/aquarium"}>
                  <div
                     className={`flex bg-white px-10 py-12 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
                  >
                     <span className={`whitespace-nowrap`}>
                        Храна за морски аквариуми
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

export default FishFoodsPage;
