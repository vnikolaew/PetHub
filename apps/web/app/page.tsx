"use client";
import React, { FC } from "react";
import { List, NavigationTab, ProductCard, ProductCardProps, useProductsContext } from "@pethub/components";
import sampleLogo from "@pethub/assets/sample-logo.svg";

import * as Separator from "@radix-ui/react-separator";
import { PetInfoType } from "@pethub/state";
import { NAVIGATION_TABS } from "@pethub/web/app/NAVIGATION_TABS";

function generateRandomProducts(
   products: ProductCardProps[],
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
               ],
      ),
      products[Math.round(Math.random() * 10)],
   ];
}

const IndexPage: FC = () => {
   const { products } = useProductsContext();
   const BEST_SELLERS = generateRandomProducts(products);
   const ON_SALE_PRODUCTS = products.filter(
      (p) => (p as any).product.discount !== undefined,
   );

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
         </div>
      </div>
   );
};

export default IndexPage;
