"use client";
import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { Breadcrumb } from "../../components";
import dogFoodLogo from "../../public/assets/dog-food-logo.png";
import catFoodLogo from "../../public/assets/cat-food-logo.png";
import birdFoodLogo from "../../public/assets/bird-food-logo.png";
import fishFoodLogo from "../../public/assets/fish-food-logo.png";
import rodentFoodLogo from "../../public/assets/rodent-food-logo.png";
import Link from "next/link";

const AccessoriesPage: NextPage = () => {
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Accessories", path: "accessories" },
            ]}
         />
         <section className={`w-full my-6 flex flex-col items-center gap-6`}>
            <h1 className={`text-4xl`}>Аксесоари за домашния любимец</h1>
            <div className={`flex mt-6 gap-36 items-center justify-around`}>
               <Link href={"/foods/dogs"}>
                  <div
                     className={`flex px-36 py-10 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
                  >
                     <Image
                        height={60}
                        width={60}
                        src={dogFoodLogo}
                        alt={"Dog Food"}
                     />
                     <h2 className={`text-2xl`}>Кучета</h2>
                  </div>
               </Link>

               <Link href={"/foods/cats"}>
                  <div
                     className={`flex px-36 py-10 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
                  >
                     <Image
                        height={60}
                        width={60}
                        src={catFoodLogo}
                        alt={"Cat Food"}
                     />
                     <h2 className={`text-2xl`}>Котки</h2>
                  </div>
               </Link>
            </div>

            <div className={`flex mt-2 gap-36 items-center justify-around`}>
               <div
                  className={`flex px-36 py-10 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
               >
                  <Image
                     height={60}
                     width={60}
                     src={birdFoodLogo}
                     alt={"Dog Food"}
                  />
                  <h2 className={`text-2xl`}>Птици</h2>
               </div>

               <div
                  className={`flex px-36 py-10 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
               >
                  <Image
                     height={60}
                     width={60}
                     src={fishFoodLogo}
                     alt={"Cat Food"}
                  />
                  <h2 className={`text-2xl`}>Риби</h2>
               </div>

               <div
                  className={`flex px-36 py-10 border-black rounded-2xl border-2 w-[400px] items-center gap-2 justify-center`}
               >
                  <Image
                     height={60}
                     width={60}
                     src={rodentFoodLogo}
                     alt={"Cat Food"}
                  />
                  <h2 className={`text-2xl`}>Гризачи</h2>
               </div>
            </div>
         </section>
      </div>
   );
};

export default AccessoriesPage;