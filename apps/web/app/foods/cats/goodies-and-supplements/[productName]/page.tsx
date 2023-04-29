"use client";
import React from "react";
import sampleProductLogo from "@pethub/assets/sample-product-logo.png";
import { ALL_PRODUCTS, ProductDetailsPage } from "@pethub/components";
import { LOREM_IPSUM_TEXT } from "@pethub/web/utils/string-constants";
import { StaticImageData } from "next/image";
import { IProductRating } from "@pethub/state";

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

export default function CatsGoodiesProductDetailsPage({
   params: { productName },
}: {
   params: { productName: string };
}) {
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
            { label: "Суха храна", path: "dry-food" },
            { label: product.name, path: product.name },
         ]}
      />
   );
}
