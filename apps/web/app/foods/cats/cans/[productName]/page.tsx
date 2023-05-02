"use client";
import React from "react";
import { StaticImageData } from "next/image";
import { IProductRating } from "@pethub/state";
import {
   ProductDetailsPage,
   useProduct,
   useProductsContext,
} from "@pethub/components";

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
   params: { productName },
}: {
   params: { productName: string };
}) {
   const product = useProduct(productName)!.product;

   return (
      <ProductDetailsPage
         product={product!}
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
