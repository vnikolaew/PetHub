"use client";
import React from "react";
import { NextPage } from "next";
import { ProductsGenericPage, useProducts } from "@pethub/components";

const BirdsPelletedFoodPage: NextPage = () => {
   const { page, products } = useProducts();
   console.log(products);

   return (
      <ProductsGenericPage
         breadcrumbs={[
            { label: "PetHub", path: "/" },
            { label: "Храна", path: "foods" },
            { label: "Птици", path: "birds" },
            { label: "Гранулирани храни", path: "general" },
         ]}
         basePath={window.location.pathname}
         products={products.map((p) => p.product)}
         page={page}
      />
   );
};

export default BirdsPelletedFoodPage;
