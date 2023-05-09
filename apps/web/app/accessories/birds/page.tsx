"use client";
import React from "react";
import { NextPage } from "next";
import { Breadcrumb } from "@pethub/components";
import Link from "next/link";

const COMMON_URL_PREFIX = "/accessories/birds";

const BIRDS_ACCESSORY_CATEGORIES = [
   {
      href: `${COMMON_URL_PREFIX}/toys-and-feeders`,
      name: "Играчки, хранилки и други",
   },
   {
      href: `${COMMON_URL_PREFIX}/cages`,
      name: "Клетки",
   },
];

const BirdsAccessoriesPage: NextPage = () => {
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Аксесоари", path: "accessories" },
               { label: "Птици", path: "birds" },
            ]}
         />
         <section className={`w-full my-8 flex flex-col items-center gap-12`}>
            <h1 className={`text-4xl`}>Аксесоари за птици</h1>
            <div className={`grid grid-cols-2 gap-16`}>
               {BIRDS_ACCESSORY_CATEGORIES.map((category, i) => (
                  <Link
                     className={
                        i === BIRDS_ACCESSORY_CATEGORIES.length - 1 &&
                        i % 2 === 0
                           ? "col-span-2 self-center place-center mx-auto"
                           : ""
                     }
                     key={i}
                     href={category.href}
                  >
                     <div
                        className={`flex bg-white px-20 py-8 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
                     >
                        <h2 className={`text-2xl whitespace-nowrap`}>
                           {category.name}
                        </h2>
                     </div>
                  </Link>
               ))}
            </div>
         </section>
      </div>
   );
};

export default BirdsAccessoriesPage;
