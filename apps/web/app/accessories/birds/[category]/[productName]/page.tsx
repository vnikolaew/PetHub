"use client";
import React from "react";
import sampleProductLogo from "@pethub/assets/sample-product-logo.png";
import { LOREM_IPSUM_TEXT } from "@pethub/web/utils/string-constants";
import { StaticImageData } from "next/image";
import { ProductDetailsPage } from "@pethub/components";

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

export default function BirdsAccessoryProductDetailsPage({
   params: { productName, category },
}: {
   params: { productName: string, category: string };
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
            { label: "Аксесоари", path: "accessories" },
            { label: "Птици", path: "birds" },
            { label: category, path: category },
            { label: product.name, path: product.name },
         ]}
      />
   );
}
