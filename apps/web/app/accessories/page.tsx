"use client";
import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { Breadcrumb } from "@pethub/components";
import dogFoodLogo from "@pethub/assets/dog-food-logo.png";
import catFoodLogo from "@pethub/assets/cat-food-logo.png";
import birdFoodLogo from "@pethub/assets/bird-food-logo.png";
import fishFoodLogo from "@pethub/assets/fish-food-logo.png";
import rodentFoodLogo from "@pethub/assets/rodent-food-logo.png";
import Link from "next/link";

const ACCESSORY_CARDS_ROWS = [
   [
      {
         href: "/accessories/dogs",
         label: "Кучета",
         image: dogFoodLogo,
      },
      {
         href: "/accessories/cats",
         label: "Котки",
         image: catFoodLogo,
      },
   ],
   [
      {
         href: "/accessories/birds",
         label: "Птици",
         image: birdFoodLogo,
      },
      {
         href: "/accessories/fish",
         label: "Риби",
         image: fishFoodLogo,
      },
      {
         href: "/accessories/rodents",
         label: "Гризачи",
         image: rodentFoodLogo,
      },
   ],
];

const AccessoriesPage: NextPage = () => {
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Аксесоари", path: "accessories" },
            ]}
         />
         <section className={`w-full my-6 flex flex-col items-center gap-6`}>
            <h1 className={`text-4xl`}>Аксесоари за домашния любимец</h1>
            {ACCESSORY_CARDS_ROWS.map((row, i) => (
               <div
                  key={i}
                  className={`flex mt-6 gap-12 items-center justify-center`}
               >
                  {row.map((card, i) => (
                     <Link key={i} href={card.href}>
                        <div
                           className={`flex bg-white px-20 py-10 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
                        >
                           <Image
                              height={60}
                              width={60}
                              src={card.image}
                              alt={"Dog Food"}
                           />
                           <h2 className={`text-2xl`}>{card.label}</h2>
                        </div>
                     </Link>
                  ))}
               </div>
            ))}
         </section>
      </div>
   );
};

export default AccessoriesPage;
