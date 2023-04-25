"use client";
import React from "react";
import { NextPage } from "next";
import { useSearchParams } from "next/navigation";
import { ProductsGenericPage } from "@pethub/components";
import sampleImageLogo from "@pethub/assets/sample-product-logo.png";

const DogsSupplementsPage: NextPage = () => {
   const params = useSearchParams();
   const page = Number(params.get("page") ?? "1");

   return (
      <ProductsGenericPage
         basePath={window.location.pathname}
         products={Array.from({ length: 8 })
            .map((_, i) => (page - 1) * 8 + i + 1)
            .map((i) => ({
               name: `Sample product ${i}`,
               image: sampleImageLogo,
               averageRating: Math.round(Math.random() * 5),
               description: `Sample product description ${i}`,
               price: 30.5,
               ratings: [],
               id: `sample-product-${i}`,
               sizes: ["XS", "S", "L"],
            }))}
         page={page}
      />
   );
};

export default DogsSupplementsPage;
