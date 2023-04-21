"use client";
import React from "react";
import { NextPage } from "next";
import { Breadcrumb } from "@pethub/components";

const CompleteOrderPage: NextPage = () => {
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Количка", path: "shopping-cart" },
               { label: "Завършване на поръчката", path: "complete-order" },
            ]}
         />
         <section
            className={`w-full my-6 flex flex-col items-center gap-6`}
         ></section>
      </div>
   );
};

export default CompleteOrderPage;
