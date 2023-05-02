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

export default function AquariumFishFoodProductDetailsPage({
   params: { productName },
}: {
   params: { productName: string };
}) {
   const product = useProduct(productName);

   return (
      <ProductDetailsPage
         product={product!.product}
         breadcrumbs={[
            { label: "PetHub", path: "/" },
            { label: "Храна", path: "foods" },
            { label: "Риби", path: "fish" },
            { label: "Аквариум", path: "aquarium" },
            { label: product!.product.name, path: product!.product.id },
         ]}
      />
   );
}
