"use client";
import React from "react";
import { NextPage } from "next";
import { Breadcrumb } from "../../components";
import { BreadcrumbSegment } from "../../components/Breadcrumb/types.";

const AboutUsPage: NextPage = () => {
   const segments: BreadcrumbSegment[] = [
      { label: "PetHub", path: "/" },
      { label: "За нас", path: "about" },
   ];

   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb segments={segments} />
      </div>
   );
};

export default AboutUsPage;
