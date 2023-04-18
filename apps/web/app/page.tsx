"use client";
import React, { FC } from "react";
import birdLogo from "../public/assets/bird-logo.svg";
import Image from "next/image";
import { Metadata } from "next";
import { NavigationTab } from "../components";
import sampleLogo from "../public/assets/sample-logo.svg";

export const metadata: Metadata = {
   title: "Home Page",
   category: "pets",
   description: "PetHub.com's home page.",
};

const NAVIGATION_TABS = [
   {
      logo: null!,
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
      logo: null!,
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
      logo: null!,
      baseRoute: "vet-examinations",
      label: "Ветеринарни прегледи",
   },
   {
      logo: null!,
      baseRoute: "adoption-centres",
      label: "Осиновителни центрове",
   },
];

const Index: FC = () => {
   return (
      <div>
         <div className="wrapper">
            <div className="container grid grid-cols-4 w-full mx-auto justify-between items-center">
               {NAVIGATION_TABS.map((tab, i) => (
                  <NavigationTab {...tab} logo={sampleLogo} key={i} />
               ))}
            </div>
            <div
               className={`mt-2 flex flex-col gap-2 justify-center items-center text-woodsmoke w-full text-4xl text-center mx-auto`}
            >
               <h1>Welcome to PetHub!</h1>
               <Image width={40} height={40} src={birdLogo} alt={"bird logo"} />
            </div>
         </div>
      </div>
   );
};

export default Index;
