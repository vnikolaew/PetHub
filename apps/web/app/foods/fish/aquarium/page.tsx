"use client";
import React from "react";
import { NextPage } from "next";
import { ProductsGenericPage, useProducts } from "@pethub/components";

const AquariumFishFoodsPage: NextPage = () => {
   const { page, products } = useProducts();
   console.log(products);

   return (
      <ProductsGenericPage
         breadcrumbs={[
            { label: "PetHub", path: "/" },
            { label: "Храна", path: "foods" },
            { label: "Риби", path: "fish" },
            { label: "Аквариум", path: "aquarium" },
         ]}
         basePath={window.location.pathname}
         products={products.map((p) => p.product)}
         page={page}
      />
   );
};

export default AquariumFishFoodsPage;
