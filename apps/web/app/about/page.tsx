"use client";
import React from "react";
import { NextPage } from "next";
import { Breadcrumb, type BreadcrumbSegment } from "@pethub/components";
import aboutUsSampleImage from "@pethub/assets/about-us-sample-image.png";
import Image from "next/image";
import { LOREM_IPSUM_TEXT } from "@pethub/utils/string-constants";

const AboutUsPage: NextPage = () => {
   const segments: BreadcrumbSegment[] = [
      { label: "PetHub", path: "/" },
      { label: "За нас", path: "about" },
   ];

   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb segments={segments} />
         <section
            className={`w-[70vw] mx-auto my-12 mb-16 flex flex-col items-center gap-12`}
         >
            <h1 className={`text-3xl flex items-center gap-2`}>За нас</h1>
            <div className={`flex items-center gap-12`}>
               <Image width={400} src={aboutUsSampleImage} alt={"About us"} />
               <p className={`text-lg`}>{LOREM_IPSUM_TEXT}</p>
            </div>

            <div className={`flex items-center gap-12`}>
               <p className={`text-lg`}>{LOREM_IPSUM_TEXT}</p>
               <Image width={400} src={aboutUsSampleImage} alt={"About us"} />
            </div>
         </section>
      </div>
   );
};

export default AboutUsPage;
