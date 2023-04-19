"use client";
import React from "react";
import { Breadcrumb } from "../../components";
import { NextPage } from "next";
import phoneLogo from "../../public/assets/phone-logo.png";
import mailLogo from "../../public/assets/mail-logo.png";

import Image from "next/image";
import Link from "next/link";
import FacebookLogo from "../../components/Logos/FacebookLogo";
import InstagramLogo from "../../components/Logos/InstagramLogo";
import YoutubeLogo from "../../components/Logos/YoutubeLogo";
import { LOREM_IPSUM_TEXT } from "../../utils/string-constants";

const ContactsPage: NextPage = () => {
   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Контакти", path: "contacts" },
            ]}
         />
         <section className={`w-full my-12 flex flex-col items-center gap-6`}>
            <h1 className={`text-4xl`}>Контакти</h1>
            <div
               className={`w-2/5 rounded-xl flex flex-col items-center gap-16 justify-start p-10 px-16 shadow-md border border-gray-200`}
            >
               <div className={`flex items-center gap-4`}>
                  <Image
                     height={40}
                     width={40}
                     src={mailLogo}
                     alt={"Mail logo"}
                  />
                  <p className={`text-md`}>{LOREM_IPSUM_TEXT.slice(0, 100)}</p>
               </div>

               <div className={`flex items-center gap-4`}>
                  <Image
                     height={40}
                     width={40}
                     src={phoneLogo}
                     alt={"Mail logo"}
                  />
                  <p className={`text-md`}>{LOREM_IPSUM_TEXT.slice(0, 100)}</p>
               </div>
               <div
                  className={`mx-auto flex items-center gap-3 justify-between`}
               >
                  <Link href={"https://www.facebook.com"}>
                     <FacebookLogo />
                  </Link>

                  <Link href={"https://www.instagram.com"}>
                     <InstagramLogo size={50} />
                  </Link>

                  <Link href={"https://www.youtube.com"}>
                     <YoutubeLogo className={`fill-red-600`} color={"red"} />
                  </Link>
               </div>
            </div>
         </section>
      </div>
   );
};

export default ContactsPage;
