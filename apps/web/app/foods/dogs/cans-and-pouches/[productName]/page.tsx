"use client";
import React, { useState } from "react";
import sampleProductLogo from "@pethub/assets/sample-product-logo.png";
import { LOREM_IPSUM_TEXT } from "@pethub/web/utils/string-constants";
import { StaticImageData } from "next/image";
import { useShoppingCart } from "@pethub/state";
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

export default function CansAndPouchesProductDetailsPage({
   params,
}: {
   params: { productName: string };
}) {
   const { productName } = params;
   const addProduct = useShoppingCart((state) => state.addProduct);
   const [productQuantity, setProductQuantity] = useState(1);
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
            { label: "Консерви и паучове", path: "cans-and-pouches" },
            { label: product.name, path: product.name },
         ]}
      />
   );
}
