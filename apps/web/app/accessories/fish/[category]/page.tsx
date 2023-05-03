"use client";
import React from "react";
import { ProductsGenericPage, useProducts } from "@pethub/components";
import { CATEGORY_NAMES } from "@pethub/web/app/accessories/fish/[category]/CATEGORY_NAMES";

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
            {
               label: CATEGORY_NAMES.find((c) => c.href === category)!.name,
               path: category,
            },
         ]}
         basePath={window.location.pathname}
         products={products.map((p) => p.product)}
         page={page}
      />
   );
}
