"use client";
import React from "react";
import { NextPage } from "next";
import { Breadcrumb } from "@pethub/components";
import Link from "next/link";

const COMMON_URL_PREFIX = "/accessories/cats";

const CATS_ACCESSORY_CATEGORIES = [
   {
      href: `${COMMON_URL_PREFIX}/toilet`,
      name: "Котешка тоалетна",
   },
   {
      href: `${COMMON_URL_PREFIX}/combs-and-brushes`,
      name: "Гребени и четки",
   },
   {
      href: `${COMMON_URL_PREFIX}/toys`,
      name: "Играчки и катерушки",
   },
   {
      href: `${COMMON_URL_PREFIX}/straps-and-breastplates`,
      name: "Поводи, каишки и нагръдници",
   },
   {
      href: `${COMMON_URL_PREFIX}/beds`,
      name: "Легла",
   },
   {
      href: `${COMMON_URL_PREFIX}/cups`,
      name: "Купички",
   },
   {
      href: `${COMMON_URL_PREFIX}/bags`,
      name: "Чанти",
   },
];

const CatsAccessoriesPage: NextPage = () => {
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Аксесоари", path: "accessories" },
               { label: "Котки", path: "cats" },
            ]}
         />
         <section className={`w-full my-8 flex flex-col items-center gap-12`}>
            <h1 className={`text-4xl`}>Аксесоари за котки</h1>
            <div className={`grid grid-cols-2 gap-8`}>
               {CATS_ACCESSORY_CATEGORIES.map((category, i) => (
                  <Link
                     className={
                        i === CATS_ACCESSORY_CATEGORIES.length - 1 &&
                        i % 2 === 0
                           ? "col-span-2 self-center place-center mx-auto"
                           : ""
                     }
                     key={i}
                     href={category.href}
                  >
                     <div
                        className={`flex px-20 py-8 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
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

export default CatsAccessoriesPage;
