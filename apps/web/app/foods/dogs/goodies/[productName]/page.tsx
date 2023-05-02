"use client";
import React from "react";
import { ProductDetailsPage, useProductsContext } from "@pethub/components";
import { StaticImageData } from "next/image";

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

export default function DogsDryFoodProductDetailsPage({
   params: { productName },
}: {
   params: { productName: string };
}) {
   const products = useProductsContext();
   const product = products!.find((p) => p.product.id === productName)!.product;

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
