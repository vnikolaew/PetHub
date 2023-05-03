"use client";
import React from "react";
import { ProductDetailsPage, useProduct } from "@pethub/components";
import { CATEGORY_NAMES } from "@pethub/web/app/accessories/fish/[category]/CATEGORY_NAMES";

export default function FishAccessoryProductDetailsPage({
   params: { productName, category },
}: {
   params: { productName: string; category: string };
}) {
   const product = useProduct(productName)!.product;

   return (
      <ProductDetailsPage
         product={product!}
         breadcrumbs={[
            { label: "PetHub", path: "/" },
            { label: "Аксесоари", path: "accessories" },
            { label: "Риби", path: "fish" },
            {
               label: CATEGORY_NAMES.find((c) => c.href === category)!.name,
               path: category,
            },
            { label: product.name, path: product.name },
         ]}
      />
   );
}
