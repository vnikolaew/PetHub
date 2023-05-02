"use client";
import React from "react";
import { StaticImageData } from "next/image";
import { ProductDetailsPage, useProductsContext } from "@pethub/components";
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

export default function PelletedFoodProductDetailsPage({
   params: { productName },
}: {
   params: { productName: string };
}) {
   const products = useProductsContext();
   const product: IProductDetails = products.find(
      (p) => p.product.name === productName
   )!.product;

   return (
      <ProductDetailsPage
         product={product}
         breadcrumbs={[
            { label: "PetHub", path: "/" },
            { label: "Храна", path: "foods" },
            { label: "Птици", path: "birds" },
            { label: "Гранулирани храни", path: "general" },
            { label: product.name, path: product.name },
         ]}
      />
   );
}
