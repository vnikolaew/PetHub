"use client";
import React from "react";
import { ProductDetailsPage, useProduct } from "@pethub/components";

export default function DogsSupplementProductDetailsPage({
   params: { productName },
}: {
   params: { productName: string };
}) {
   const product = useProduct(productName)!;

   return (
      <ProductDetailsPage
         product={product!.product}
         breadcrumbs={[
            { label: "PetHub", path: "/" },
            { label: "Храна", path: "foods" },
            { label: "Кучета", path: "dogs" },
            { label: "Витамини и добавки", path: "supplements" },
            { label: product.product.name, path: product.product.name },
         ]}
      />
   );
}
