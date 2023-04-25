"use client";
import React, { Fragment, useState } from "react";
import { NextPage } from "next";
import { Breadcrumb, SelectInput } from "@pethub/components";
import rightArrowLogo from "@pethub/assets/right-arrow-logo.png";
import * as Separator from "@radix-ui/react-separator";
import Image from "next/image";
import Link from "next/link";
import { LOREM_IPSUM_TEXT } from "@pethub/web/utils/string-constants";

const AdoptionCentresPage: NextPage = () => {
   const [showSearchResults, setShowSearchResults] = useState(false);
   const [searchResults, setSearchResults] = useState([]);

   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Осиновителни центрове", path: "adoption-centres" },
            ]}
         />
         <section className={`w-full my-8 flex flex-col items-center gap-6`}>
            <h1 className={`text-4xl`}>
               Осиновете чрез <span className={`font-semibold`}>PetHub!</span>{" "}
            </h1>
            <div className={`flex w-[80%] items-center justify-center gap-12`}>
               <div className={`flex mt-8 flex-col items-start gap-12`}>
                  <div>
                     <h1
                        className={`whitespace-nowrap font-semibold text-2xl text-raw-sienna`}
                     >
                        Моля въведете населено място
                     </h1>
                     <input
                        placeholder={"Varna, BG"}
                        autoComplete={"off"}
                        className={`text-lg mt-4 w-96 mt-1 px-4 py-1 block rounded-md shadow-md`}
                        type={"text"}
                     />
                  </div>

                  <div className={`flex flex-col items-start gap-4`}>
                     <h1
                        className={`whitespace-nowrap font-semibold text-2xl text-raw-sienna`}
                     >
                        Търсете приюти с:
                     </h1>
                     <SelectInput
                        placeholder={"Избери"}
                        options={[]}
                        onChange={(_) => {}}
                     />
                  </div>
                  <div className={`self-end`}>
                     <Image
                        width={40}
                        className={`self-end hover:opacity-80 transition-opacity duration-200 cursor-pointer`}
                        height={40}
                        onClick={(_) =>
                           setShowSearchResults(!showSearchResults)
                        }
                        src={rightArrowLogo}
                        alt={"Search for adoption centres"}
                     />
                  </div>
               </div>
               {showSearchResults && (
                  <Fragment>
                     <div className={`h-[400px] my-4`}>
                        <Separator.Root
                           className={`h-full text-black bg-black w-[1px]`}
                           orientation={"vertical"}
                        />
                     </div>
                     <div className={`flex flex-col items-center gap-6`}>
                        <h1
                           className={`whitespace-nowrap font-semibold text-2xl text-raw-sienna`}
                        >
                           Линкове към намерени приюти
                        </h1>
                        <div className={`grid grid-cols-2 gap-8`}>
                           {Array.from({ length: 4 }).map((_, i) => (
                              <div
                                 className={`flex flex-col items-start gap-4`}
                                 key={i}
                              >
                                 <Link
                                    className={`text-blue-700 text-lg underline`}
                                    href={"www.some-adoption-centre.com"}
                                 >
                                    link-to-adoption-centre.com
                                 </Link>
                                 <p className={`text-md leading-5`}>
                                    {LOREM_IPSUM_TEXT.slice(0, 200)} ...
                                 </p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </Fragment>
               )}
            </div>
         </section>
      </div>
   );
};

export default AdoptionCentresPage;
