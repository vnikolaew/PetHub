"use client";
import React, { FC } from "react";
import { List, NavigationTab, useProductsContext } from "@pethub/components";
import sampleLogo from "@pethub/assets/sample-logo.svg";
import ropeLogo from "@pethub/assets/rope-logo.png";
import vetToolLogo from "@pethub/assets/vet-tool-logo.png";
import dogHouseLogo from "@pethub/assets/dog-house-logo.png";
import dogsFoodLogo from "@pethub/assets/dogs-food-logo.png";
import dogFoodLogo from "@pethub/assets/dog-food-logo.png";
import catFoodLogo from "@pethub/assets/cat-food-logo.png";
import birdFoodLogo from "@pethub/assets/bird-food-logo.png";
import rodentFoodLogo from "@pethub/assets/rodent-food-logo.png";
import fishFoodLogo from "@pethub/assets/fish-food-logo.png";

import * as Separator from "@radix-ui/react-separator";
import CookieConsent from "react-cookie-consent";
import { ProductCard } from "@pethub/components";

const NAVIGATION_TABS = [
   {
      logo: dogsFoodLogo!,
      label: "Храна",
      baseRoute: "foods",
      subMenu: [
         {
            label: "Кучета",
            logo: dogFoodLogo!,
            href: "dogs",
            subMenu: [
               { logo: null!, label: "Суха храна", href: "dry-food" },
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
            logo: catFoodLogo!,
            href: "cats",
            subMenu: [
               {
                  logo: null!,
                  label: "Храна за малки котенца",
                  href: "kitties",
               },
               { logo: null!, label: "Консерви", href: "cans" },
               { logo: null!, label: "Суха храна", href: "dry-food" },
               {
                  logo: null!,
                  label: "Лакомства и витамини",
                  href: "goodies-and-supplements",
               },
            ],
         },
         {
            label: "Птици",
            logo: birdFoodLogo!,
            href: "birds",
            subMenu: [
               { logo: null!, label: "Храна за птици", href: "general" },
               {
                  logo: null!,
                  label: "Гранулирани храни за птици",
                  href: "general",
               },
               { logo: null!, label: "Лакомства за папагали", href: "goodies" },
            ],
         },
         {
            label: "Гризачи",
            logo: rodentFoodLogo!,
            href: "rodents",
            subMenu: [
               { logo: null!, label: "Храни за гризачи", href: "general" },
               { logo: null!, label: "Лакомства и витамини", href: "goodies" },
            ],
         },
         {
            label: "Риби",
            logo: fishFoodLogo!,
            href: "fish",
            subMenu: [
               {
                  logo: null!,
                  label: "Храна за езерни риби",
                  href: "pond",
               },
               {
                  logo: null!,
                  label: "Храна за морски аквариуми",
                  href: "aquarium",
               },
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
            logo: dogFoodLogo!,
            href: "dogs",
            subMenu: [
               {
                  logo: null!,
                  label: "Гребени и четки",
                  href: "combs-and-brushes",
               },
               {
                  logo: null!,
                  label: "Поводи, каишки и нагръдници",
                  href: "straps-and-breastplates",
               },
               { logo: null!, label: "Дрехи", href: "clothes" },
               { logo: null!, label: "Чанти и клетки", href: "bags-and-cages" },
               {
                  logo: null!,
                  label: "Легла и къщички",
                  href: "beds-and-houses",
               },
               { logo: null!, label: "Купички", href: "cups" },
               { logo: null!, label: "Играчки", href: "toys" },
               { logo: null!, label: "Намордници", href: "muzzles" },
            ],
         },
         {
            label: "Котки",
            logo: catFoodLogo!,
            href: "cats",
            subMenu: [
               { logo: null!, label: "Котешка тоалетна", href: "toilet" },
               {
                  logo: null!,
                  label: "Гребени и четки",
                  href: "combs-and-brushes",
               },
               { logo: null!, label: "Играчки и катерушки", href: "toys" },
               {
                  logo: null!,
                  label: "Поводи, каишки и нагръдници",
                  href: "straps-and-breastplates",
               },
               { logo: null!, label: "Легла", href: "beds" },
               { logo: null!, label: "Купички", href: "cups" },
               { logo: null!, label: "Чанти", href: "bags" },
            ],
         },
         {
            label: "Птици",
            logo: birdFoodLogo!,
            href: "birds",
            subMenu: [
               {
                  logo: null!,
                  label: "Играчки, хранилки и други",
                  href: "toys-and-feeders",
               },
               { logo: null!, label: "Клетки", href: "cages" },
            ],
         },
         {
            label: "Гризачи",
            logo: rodentFoodLogo!,
            href: "rodents",
            subMenu: [
               { logo: null!, label: "Играчки и други", href: "toys" },
               { logo: null!, label: "Клетки за гризачи", href: "cages" },
            ],
         },
         {
            label: "Риби",
            logo: fishFoodLogo!,
            href: "fish",
            subMenu: [
               { logo: null!, label: "Аквариуми", href: "aquariums" },
               { logo: null!, label: "Декорации", href: "decorations" },
               { logo: null!, label: "Други", href: "others" },
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
   const products = useProductsContext();

   const RANDOM_INDEX = 500;
   const BEST_SELLERS = products.slice(RANDOM_INDEX, RANDOM_INDEX + 6);
   const ON_SALE_PRODUCTS = products.slice(RANDOM_INDEX, RANDOM_INDEX + 6);

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
               <List
                  items={[
                     {
                        products: BEST_SELLERS,
                        heading: "Най-продавани продукти",
                     },
                     {
                        products: ON_SALE_PRODUCTS,
                        heading: "Намалени продукти",
                     },
                  ]}
                  render={(item) => (
                     <section className={`mt-4`} id={"best-selling-products"}>
                        <h1 className={`text-3xl`}>{item.heading}</h1>
                        <div className={`flex gap-20 mt-8 items-center`}>
                           {item.products.map((props, i) => (
                              <ProductCard key={i} {...props} />
                           ))}
                        </div>
                     </section>
                  )}
                  separator={
                     <Separator.Root
                        orientation={"horizontal"}
                        className={`text-gray-300 mt-8 w-[90%] h-[1.5px] bg-gray-300`}
                     />
                  }
               />
            </div>
            <CookieConsent
               enableDeclineButton
               expires={30_000}
               buttonText={"Yes"}
               declineButtonText={"No"}
               contentClasses={``}
               containerClasses={`bg-black fixed bottom-0 flex w-full px-8 py-4 items-center justify-between`}
               disableStyles={true}
               buttonClasses={`bg-raw-sienna p-2 text-white shadow-md`}
               declineButtonClasses={`bg-raw-sienna p-2 bg-white shadow-md`}
               declineButtonStyle={{}}
               location={"bottom"}
            >
               Cookie Consent
            </CookieConsent>
         </div>
      </div>
   );
};

export default IndexPage;
