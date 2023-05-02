"use client";
import React from "react";
import { NextPage } from "next";
import { ProductsGenericPage, useProducts } from "@pethub/components";

const DogsCansAndPouchesPage: NextPage = () => {
   const { page, products } = useProducts();
   console.log(products);

   return (
      <ProductsGenericPage
         breadcrumbs={[
            { label: "PetHub", path: "/" },
            { label: "Храна", path: "foods" },
            { label: "Кучета", path: "dogs" },
            { label: "Консерви и паучове", path: "cans-and-pouches" },
         ]}
         basePath={window.location.pathname}
         products={products.map((p) => p.product)}
         page={page}
      />
   );
};

export default DogsCansAndPouchesPage;
