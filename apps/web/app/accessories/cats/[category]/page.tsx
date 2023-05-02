"use client";
import React from "react";
import { ProductsGenericPage, useProducts } from "@pethub/components";

export default function CatsAccessoriesPage({
   params: { category },
}: {
   params: { category: string };
}) {
   const { page, products } = useProducts();

   return (
      <ProductsGenericPage
         breadcrumbs={[
            { label: "PetHub", path: "/" },
            { label: "Аксесоари", path: "accessories" },
            { label: "Котки", path: "cats" },
            { label: category, path: category },
         ]}
         basePath={window.location.pathname}
         products={products.map((p) => p.product)}
         page={page}
      />
   );
}
