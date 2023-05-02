"use client";
import React from "react";
import { ProductsGenericPage, useProducts } from "@pethub/components";

export default function FishAccessoriesPage({
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
            { label: "Риби", path: "fish" },
            { label: category, path: category },
         ]}
         basePath={window.location.pathname}
         products={products.map((p) => p.product)}
         page={page}
      />
   );
}
