"use client";
import React, { useState } from "react";
import sampleProductLogo from "@pethub/assets/sample-product-logo.png";
import { LOREM_IPSUM_TEXT } from "@pethub/web/utils/string-constants";
import { StaticImageData } from "next/image";
import { IProductRating, useShoppingCart } from "@pethub/state";
import { ALL_PRODUCTS, ProductDetailsPage } from "@pethub/components";

export interface IProductDetails {
   name: string;
   id: string;
   image: string | StaticImageData;
   sizes: string[];
   price: number;
   averageRating: number;
   description: string;
   ratings: IProductRating[];
}

export default function CansProductDetailsPage({
   params,
}: {
   params: { productName: string };
}) {
   const { productName } = params;
   const product: IProductDetails = ALL_PRODUCTS.find(
      (p) => p.product.name === productName
   )!.product;

   return (
      <ProductDetailsPage
         product={product}
         breadcrumbs={[
            { label: "PetHub", path: "/" },
            { label: "Храна", path: "foods" },
            { label: "Кучета", path: "dogs" },
            { label: "Консерви и паучове", path: "cans-and-pouches" },
            { label: product.name, path: product.name },
         ]}
      />
   );
}
