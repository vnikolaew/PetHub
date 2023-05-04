"use client";
import React from "react";
import { StaticImageData } from "next/image";
import { ProductDetailsPage, useProduct } from "@pethub/components";
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

export default function BirdsGoodiesProductDetailsPage({
   params: { productName },
}: {
   params: { productName: string };
}) {
   const product = useProduct(productName)!.product!;

   return (
      <ProductDetailsPage
         product={product!}
         breadcrumbs={[
            { label: "PetHub", path: "/" },
            { label: "Храна", path: "foods" },
            { label: "Птици", path: "birds" },
            { label: "Лакомства", path: "goodies" },
            { label: product!.name, path: product!.name },
         ]}
      />
   );
}
