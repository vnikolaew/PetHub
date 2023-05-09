"use client";
import React from "react";
import { NextPage } from "next";
import { Breadcrumb } from "@pethub/components";
import Link from "next/link";

const COMMON_URL_PREFIX = "/accessories/dogs";

const DOGS_ACCESSORY_CATEGORIES = [
   {
      href: `${COMMON_URL_PREFIX}/combs-and-brushes`,
      name: "Гребени и четки",
   },
   {
      href: `${COMMON_URL_PREFIX}/straps-and-breastplates`,
      name: "Поводи, каишки и нагръдници",
   },
   {
      href: `${COMMON_URL_PREFIX}/clothes`,
      name: "Дрехи",
   },
   {
      href: `${COMMON_URL_PREFIX}/bags-and-cages`,
      name: "Чанти и клетки",
   },
   {
      href: `${COMMON_URL_PREFIX}/beds-and-houses`,
      name: "Легла и къщички",
   },
   {
      href: `${COMMON_URL_PREFIX}/cups`,
      name: "Купички",
   },
   {
      href: `${COMMON_URL_PREFIX}/toys`,
      name: "Играчки",
   },
   {
      href: `${COMMON_URL_PREFIX}/muzzles`,
      name: "Намордници",
   },
];

const DogsAccessoriesPage: NextPage = () => {
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Аксесоари", path: "accessories" },
               { label: "Кучета", path: "dogs" },
            ]}
         />
         <section className={`w-full my-8 flex flex-col items-center gap-12`}>
            <h1 className={`text-4xl`}>Аксесоари за кучета</h1>
            <div className={`grid grid-cols-2 gap-8`}>
               {DOGS_ACCESSORY_CATEGORIES.map((category, i) => (
                  <Link key={i} href={category.href}>
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

export default DogsAccessoriesPage;
