"use client";
import React, { FC } from "react";
import { NextPage } from "next";
import { Breadcrumb } from "../../components";
import lockLogo from "../../public/assets/lock-logo.png";
import pawLogo from "../../public/assets/paw-logo.png";
import Image from "next/image";
import { LOREM_IPSUM_TEXT } from "../../utils/string-constants";

const PrivacyPolicyPage: NextPage = () => {
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Политика на поверителност", path: "privacy" },
            ]}
         />

         <section
            className={`w-[80vw] mx-auto my-12 flex flex-col items-center gap-12`}
         >
            <h1 className={`text-3xl flex items-center gap-2`}>
               Политика за поверителност
            </h1>
            <section className={`grid gap-12 grid-cols-[6fr_1fr_5fr]`}>
               <div className={`flex flex-col gap-6`}>
                  <PrivacyPolicySection
                     heading={"Какви лични данни събираме и защо ги събираме?"}
                     content={LOREM_IPSUM_TEXT}
                  />
                  <PrivacyPolicySection
                     heading={"Бисквитки"}
                     content={LOREM_IPSUM_TEXT.slice(0, 200)}
                  />
                  <PrivacyPolicySection
                     heading={"Вградено съдържание от други уебсайтове"}
                     content={LOREM_IPSUM_TEXT.slice(0, 300)}
                  />
               </div>
               <div className={`flex flex-col gap-4 pt-16 px-4`}>
                  {Array.from({ length: 6 }).map((_, i) => (
                     <div
                        key={i}
                        className={`flex ${
                           i % 2 === 0 ? "justify-start" : "justify-end"
                        }`}
                     >
                        <Image height={30} src={pawLogo} alt={"Dog Paw"} />
                     </div>
                  ))}
               </div>
               <div className={`flex flex-col gap-6`}>
                  <PrivacyPolicySection
                     heading={"С кого споделяме вашите данни?"}
                     content={LOREM_IPSUM_TEXT.slice(0, 200)}
                  />
                  <PrivacyPolicySection
                     heading={"Колко дълго съхраняваме вашите данни?"}
                     content={LOREM_IPSUM_TEXT.slice(0, 300)}
                  />
                  <PrivacyPolicySection
                     heading={"Какви права имате върху вашите данни?"}
                     content={LOREM_IPSUM_TEXT}
                  />
               </div>
            </section>
         </section>
      </div>
   );
};

export interface PrivacyPolicySectionProps {
   heading: string;
   content: string;
}

const PrivacyPolicySection: FC<PrivacyPolicySectionProps> = ({
   heading,
   content,
}) => (
   <div className={`flex flex-col items-start`}>
      <div className={`flex items-center gap-2`}>
         <Image
            color={"black"}
            height={24}
            width={24}
            src={lockLogo}
            alt={"Lock"}
         />
         <h1 className={`text-xl`}>{heading}</h1>
      </div>
      <p className={`text-md ml-8 mt-4`}>{content}</p>
   </div>
);

export default PrivacyPolicyPage;
