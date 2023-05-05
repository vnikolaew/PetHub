"use client";
import React, { FC, useState } from "react";
import {
   List,
   NavigationTab,
   ProductCard,
   ProductCardProps,
   useProductsContext,
} from "@pethub/components";
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
import { PetInfoType } from "@pethub/state";

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
               { logo: null!, label: "Други", href: "other" },
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

function generateRandomProducts(
   products: ProductCardProps[]
): ProductCardProps[] {
   const petTypes = [
      PetInfoType.Dog,
      PetInfoType.Cat,
      PetInfoType.Fish,
      PetInfoType.Rodent,
      PetInfoType.Bird,
   ];

   return [
      ...petTypes.map(
         (pt) =>
            products.filter((p) => p.petType === pt)[
               Math.round(Math.random() * 5)
            ]
      ),
      products[Math.round(Math.random() * 10)],
   ];
}

const IndexPage: FC = () => {
   const { products } = useProductsContext();
   const BEST_SELLERS = generateRandomProducts(products);
   const ON_SALE_PRODUCTS = products.filter(
      (p) => (p as any).product.discount !== undefined
   );
   const [hasConsentValue, setHasConsentValue] = useState(false);

   console.log(BEST_SELLERS);
   console.log(ON_SALE_PRODUCTS);

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
               className={`mt-2 flex flex-col gap-2 justify-center items-center text-woodsmoke w-3/4 text-4xl text-center mx-auto`}
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
                        <div className={`grid grid-cols-4 gap-6 mt-8`}>
                           {item.products.map((props, i) => (
                              <ProductCard key={i} {...props} />
                           ))}
                        </div>
                     </section>
                  )}
                  separator={
                     <Separator.Root
                        orientation={"horizontal"}
                        className={`text-gray-300 mt-8 w-full shado h-[1.3px] bg-gray-200`}
                     />
                  }
               />
            </div>
            {!hasConsentValue && (
               <CookieConsent
                  visible={"true"}
                  enableDeclineButton
                  expires={30_000}
                  style={{}}
                  cookieName={"PetHubConsentCookie"}
                  hideOnAccept
                  onAccept={(_) => setHasConsentValue(true)}
                  onDecline={() => setHasConsentValue(true)}
                  hideOnDecline
                  buttonText={"Приеми бисквитки"}
                  declineButtonText={"Отхвърли"}
                  contentClasses={`text-white  text-xl`}
                  containerClasses={`bg-black z-20 fixed bottom-0 flex w-full px-8 py-5 items-center justify-between`}
                  disableStyles={true}
                  buttonClasses={`bg-raw-sienna mx-8 rounded-md px-4 py-2 text-white shadow-md`}
                  declineButtonClasses={`bg-raw-sienna rounded-md px-4 py-2 bg-white shadow-md`}
                  declineButtonStyle={{}}
                  location={"bottom"}
               >
                  PetHub© използва бисквитки, за да подобри вашето изживяване.
               </CookieConsent>
            )}
         </div>
      </div>
   );
};

export default IndexPage;
