"use client";
import React from "react";
import { StaticImageData } from "next/image";
import { ProductDetailsPage, useProduct } from "@pethub/components";

export interface IProductDetails {
   name: string;
   id: string;
   image: string | StaticImageData;
   sizes: string[];
   price: number;
   averageRating: number;
   description: string;
   ratings: {
      from: string;
      image: string | StaticImageData;
      reviewText: string;
      rating: number;
   }[];
}

export default function PondFishFoodProductDetailsPage({
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
            { label: "Риби", path: "fish" },
            { label: "Езерни риби", path: "pond" },
            { label: product.name, path: product.name },
         ]}
      />
   );
}
