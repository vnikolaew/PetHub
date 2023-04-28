"use client";
import React from "react";
import { NextPage } from "next";
import { Breadcrumb } from "@pethub/components";
import Link from "next/link";

const RODENTS_ACCESSORY_CATEGORIES = [
   {
      href: "/accessories/rodents/toys",
      name: "Играчки и други",
   },
   {
      href: "/accessories/rodents/cages",
      name: "Клетки за гризачи",
   },
];

const RodentsAccessoriesPage: NextPage = () => {
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Аксесоари", path: "accessories" },
               { label: "Гризачи", path: "rodents" },
            ]}
         />
         <section className={`w-full my-8 flex flex-col items-center gap-12`}>
            <h1 className={`text-4xl`}>Аксесоари за гризачи</h1>
            <div className={`grid grid-cols-2 gap-16`}>
               {RODENTS_ACCESSORY_CATEGORIES.map(({ name, href }, i) => (
                  <Link key={i} href={href}>
                     <div
                        className={`flex px-20 py-8 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
                     >
                        <h2 className={`text-2xl whitespace-nowrap`}>{name}</h2>
                     </div>
                  </Link>
               ))}
            </div>
         </section>
      </div>
   );
};

export default RodentsAccessoriesPage;
