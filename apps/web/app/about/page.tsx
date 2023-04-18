'use client'
import React from "react";
import { NextPage } from "next";
import { Breadcrumb } from "../../components";

const AboutUsPage: NextPage = () => {
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "About Us", path: "about" },
            ]}
         />
      </div>
   );
};

export default AboutUsPage;
