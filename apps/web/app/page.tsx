"use client";
import React, { FC } from "react";
import { List, NavigationTab } from "@pethub/components";
import sampleLogo from "@pethub/assets/sample-logo.svg";
import ropeLogo from "@pethub/assets/rope-logo.png";
import vetToolLogo from "@pethub/assets/vet-tool-logo.png";
import dogHouseLogo from "@pethub/assets/dog-house-logo.png";
import dogsFoodLogo from "../public/assets/dogs-food-logo.png";
import dogFoodLogo from "../public/assets/dog-food-logo.png";
import catFoodLogo from "../public/assets/cat-food-logo.png";
import birdFoodLogo from "../public/assets/bird-food-logo.png";
import rodentFoodLogo from "../public/assets/rodent-food-logo.png";
import fishFoodLogo from "../public/assets/fish-food-logo.png";

import sampleProductLogo from "../public/assets/sample-product-logo.png";
import * as Separator from "@radix-ui/react-separator";
import ProductCard, {
   PetType,
   ProductCardProps,
   ProductType,
} from "../../../libs/components/src/products/ProductCard";

const BEST_SELLERS: ProductCardProps[] = Array.from({
   length: 6,
}).map<ProductCardProps>((_, i) => ({
   product: {
      image: sampleProductLogo,
      price: Math.round(Math.random() * 100),
      ratings: [],
      id: `id-${i}`,
      sizes: [],
      name: `Sample product ${i}`,
      get averageRating() {
         return (
            this.ratings.reduce((acc, curr) => acc + curr.rating, 0) /
            this.ratings.length
         );
      },
      description: `Sample description ${i}`,
   },
   category: "dry-food",
   petType: PetType.Dogs,
   productType: ProductType.Food,
}));

const ON_SALE_PRODUCTS: ProductCardProps[] = Array.from({
   length: 6,
}).map<ProductCardProps>((_, i) => ({
   product: {
      image: sampleProductLogo,
      price: Math.round(Math.random() * 30),
      ratings: [],
      id: `id-${i}`,
      sizes: [],
      name: `Sample product on sale ${i}`,
      get averageRating() {
         return (
            this.ratings.reduce((acc, curr) => acc + curr.rating, 0) /
            this.ratings.length
         );
      },
      description: `Sample description ${i}`,
   },
   category: "goodies",
   petType: PetType.Birds,
   productType: ProductType.Food,
}));

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
               <section className={`mt-4`} id={"best-selling-products"}>
                  <h1 className={`text-3xl`}>Най-продавани продукти</h1>
                  <div className={`flex gap-20 mt-8 items-center`}>
                     {BEST_SELLERS.map((props, i) => (
                        <ProductCard key={i} {...props} />
                     ))}
                  </div>
               </section>
               <Separator.Root
                  orientation={"horizontal"}
                  className={`text-gray-300 mt-8 w-[90%] h-[1.5px] bg-gray-300`}
               />
               <section className={`mt-4`} id={"best-selling-products"}>
                  <h1 className={`text-3xl`}>Намалени продукти</h1>
                  <div className={`flex gap-20 mt-8 items-center`}>
                     {ON_SALE_PRODUCTS.map((props, i) => (
                        <ProductCard key={i} {...props} />
                     ))}
                  </div>
               </section>
            </div>
         </div>
      </div>
   );
};

export default IndexPage;
