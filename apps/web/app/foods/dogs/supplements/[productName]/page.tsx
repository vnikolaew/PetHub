"use client";
import React from "react";
import sampleProductLogo from "@pethub/assets/sample-product-logo.png";
import { ProductDetailsPage } from "@pethub/components";
import { LOREM_IPSUM_TEXT } from "@pethub/web/utils/string-constants";
import { IProductDetails } from "@pethub/state";

export default function DogsSupplementProductDetailsPage({
   params: { productName },
}: {
   params: { productName: string };
}) {
   const product: IProductDetails = {
      name: productName,
      image: sampleProductLogo,
      id: "some-product-id",
      price: 30.5,
      sizes: ["XS", "S", "L"],
      averageRating: Math.round(Math.random() * 5),
      description: LOREM_IPSUM_TEXT.slice(0, 200),
      ratings: [],
   };

   return (
      <ProductDetailsPage
         product={product}
         breadcrumbs={[
            { label: "PetHub", path: "/" },
            { label: "Храна", path: "foods" },
            { label: "Кучета", path: "dogs" },
            { label: "Витамини и добавки", path: "supplements" },
            { label: product.name, path: product.name },
         ]}
      />
   );
}
