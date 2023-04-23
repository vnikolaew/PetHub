"use client";
import React from "react";
import { NextPage } from "next";
import { Breadcrumb } from "@pethub/components";
import Link from "next/link";

const DOGS_ACCESSORY_CATEGORIES = [
   {
      href: "/accessories",
      name: "Гребени и четки",
   },
   {
      href: "/accessories",
      name: "Поводи, каишки и нагръдници",
   },
   {
      href: "/accessories",
      name: "Дрехи",
   },
   {
      href: "/accessories",
      name: "Чанти и клетки",
   },
   {
      href: "/accessories",
      name: "Легла и къщички",
   },
   {
      href: "/accessories",
      name: "Купички",
   },
   {
      href: "/accessories",
      name: "Играчки",
   },
   {
      href: "/accessories",
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

export default DogsAccessoriesPage;
