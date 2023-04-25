"use client";
import React, { FC } from "react";
import Image from "next/image";
import { NavigationTab } from "@pethub/components";
import sampleLogo from "../public/assets/sample-logo.svg";
import ropeLogo from "../public/assets/rope-logo.png";
import vetToolLogo from "../public/assets/vet-tool-logo.png";
import dogHouseLogo from "../public/assets/dog-house-logo.png";
import dogsFoodLogo from "../public/assets/dogs-food-logo.png";
import sampleProductLogo from "../public/assets/sample-product-logo.png";
import * as Separator from "@radix-ui/react-separator";
import Link from "next/link";

const NAVIGATION_TABS = [
   {
      logo: dogsFoodLogo!,
      label: "Храна",
      baseRoute: "foods",
      subMenu: [
         {
            label: "Кучета",
            logo: null!,
            href: "dogs",
            subMenu: [
               { logo: null!, label: "Суха храна", href: "dry-foods" },
               {
                  logo: null!,
                  label: "Консерви и паучове",
                  href: "cans-and-pouches",
               },
               { logo: null!, label: "Лакомства", href: "goodies" },
               {
                  logo: null!,
                  label: "Витамини и добавки",
                  href: "supplements",
               },
            ],
         },
         {
            label: "Котки",
            logo: null!,
            href: "cats",
            subMenu: [
               { logo: null!, label: "Храна за малки котенца" },
               { logo: null!, label: "Консерви" },
               { logo: null!, label: "Суха храна" },
               { logo: null!, label: "Лакомства и витамини" },
            ],
         },
         {
            label: "Птици",
            logo: null!,
            href: "birds",
            subMenu: [
               { logo: null!, label: "Храна за птици" },
               { logo: null!, label: "Гранулирани храни за птици" },
               { logo: null!, label: "Лакомства за папагали" },
            ],
         },
         {
            label: "Гризачи",
            logo: null!,
            href: "rodents",
            subMenu: [
               { logo: null!, label: "Храни за гризачи" },
               { logo: null!, label: "Лакомства и витамини" },
            ],
         },
         {
            label: "Риби",
            logo: null!,
            href: "fish",
            subMenu: [
               { logo: null!, label: "Храна за езерни риби" },
               { logo: null!, label: "Храна за морски аквариуми" },
            ],
         },
      ],
   },
   {
      logo: ropeLogo!,
      label: "Аксесоари",
      baseRoute: "accessories",
      subMenu: [
         {
            label: "Кучета",
            logo: null!,
            href: "dogs",
            subMenu: [
               { logo: null!, label: "Гребени и четки" },
               { logo: null!, label: "Поводи, каишки и нагръдници" },
               { logo: null!, label: "Дрехи" },
               { logo: null!, label: "Чанти и клетки" },
               { logo: null!, label: "Легла и къщички" },
               { logo: null!, label: "Купички" },
               { logo: null!, label: "Играчки" },
               { logo: null!, label: "Намордници" },
            ],
         },
         {
            label: "Котки",
            logo: null!,
            href: "cats",
            subMenu: [
               { logo: null!, label: "Котешка тоалетна" },
               { logo: null!, label: "Гребени и четки" },
               { logo: null!, label: "Играчки и катерушки" },
               { logo: null!, label: "Поводи, каишки и нагръдници" },
               { logo: null!, label: "Легла" },
               { logo: null!, label: "Купички" },
               { logo: null!, label: "Чанти" },
            ],
         },
         {
            label: "Птици",
            logo: null!,
            href: "birds",
            subMenu: [
               { logo: null!, label: "Играчки, хранилки и други" },
               { logo: null!, label: "Клетки" },
            ],
         },
         {
            label: "Гризачи",
            logo: null!,
            href: "rodents",
            subMenu: [
               { logo: null!, label: "Играчки и други" },
               { logo: null!, label: "Клетки за гризачи" },
            ],
         },
         {
            label: "Риби",
            logo: null!,
            href: "fish",
            subMenu: [
               { logo: null!, label: "Аквариуми" },
               { logo: null!, label: "Декорации" },
               { logo: null!, label: "Други" },
            ],
         },
      ],
   },
   {
      logo: vetToolLogo,
      baseRoute: "vet-examinations",
      label: "Ветеринарни прегледи",
   },
   {
      logo: dogHouseLogo!,
      baseRoute: "adoption-centres",
      label: "Осиновителни центрове",
   },
];

const IndexPage: FC = () => {
   return (
      <div>
         <div className="wrapper">
            <div className="container grid grid-cols-4 w-full mx-auto justify-between items-center">
               {NAVIGATION_TABS.map((tab, i) => (
                  <NavigationTab
                     {...tab}
                     logo={tab.logo ?? sampleLogo}
                     key={i}
                  />
               ))}
            </div>
            <div
               className={`mt-2 flex flex-col gap-2 justify-center items-center text-woodsmoke w-full text-4xl text-center mx-auto`}
            >
               <section className={`mt-4`} id={"best-selling-products"}>
                  <h1 className={`text-3xl`}>Най-продавани продукти</h1>
                  <div className={`flex gap-20 mt-4 items-center`}>
                     {Array.from({ length: 6 }).map((_, i) => (
                        <div
                           className={`flex gap-4 flex-col items-center justify-center`}
                           key={i}
                        >
                           <h2 className={`text-lg`}>
                              Sample product #{i + 1}
                           </h2>
                           <Image
                              height={120}
                              width={120}
                              src={sampleProductLogo}
                              alt={`Sample product #${i + 1}`}
                           />
                        </div>
                     ))}
                  </div>
               </section>
               <Separator.Root
                  orientation={"horizontal"}
                  className={`text-gray-300 mt-4 w-[90%] h-[1.5px] bg-gray-300`}
               />
               <section className={`mt-4`} id={"best-selling-products"}>
                  <h1 className={`text-3xl`}>Намалени продукти</h1>
                  <div className={`flex gap-20 mt-4 items-center`}>
                     {Array.from({ length: 6 }).map((_, i) => (
                        <Link
                           key={i}
                           href={`/foods/dogs/dry-food/sample-product-${i + 1}`}
                        >
                           <div
                              className={`flex gap-4 flex-col items-center justify-center`}
                           >
                              <h2 className={`text-lg`}>
                                 Sample product #{i + 1}
                              </h2>
                              <Image
                                 height={120}
                                 width={120}
                                 src={sampleProductLogo}
                                 alt={`Sample product #${i + 1}`}
                              />
                           </div>
                        </Link>
                     ))}
                  </div>
               </section>
               {/*<Separator.Root*/}
               {/*   orientation={"horizontal"}*/}
               {/*   className={`text-gray-300 mt-4 w-[90%] h-[1px] bg-gray-300`}*/}
               {/*/>*/}
            </div>
         </div>
      </div>
   );
};

export default IndexPage;
