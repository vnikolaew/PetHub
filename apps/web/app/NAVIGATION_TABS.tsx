import dogsFoodLogo from "@pethub/assets/dogs-food-logo.png";
import dogFoodLogo from "@pethub/assets/dog-food-logo.png";
import catFoodLogo from "@pethub/assets/cat-food-logo.png";
import birdFoodLogo from "@pethub/assets/bird-food-logo.png";
import rodentFoodLogo from "@pethub/assets/rodent-food-logo.png";
import fishFoodLogo from "@pethub/assets/fish-food-logo.png";
import ropeLogo from "@pethub/assets/rope-logo.png";
import vetToolLogo from "@pethub/assets/vet-tool-logo.png";
import dogHouseLogo from "@pethub/assets/dog-house-logo.png";

export const NAVIGATION_TABS = [
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
