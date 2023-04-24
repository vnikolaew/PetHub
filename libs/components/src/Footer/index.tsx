import React, { FC } from "react";
import Link from "next/link";
import { LOREM_IPSUM_TEXT } from "@pethub/web/utils/string-constants";

export interface Social {
   type: string;
   logo: React.ReactNode;
   link: string;
}

export interface FooterProps {
   socials: Social[];
}

export const Footer: FC<FooterProps> = ({ socials }) => {
   return (
      <footer className={`mt-24`}>
         <div
            className={`flex p-10 flex-row shadow-md border-t-2 border-gray-100 items-start justify-between gap-6`}
         >
            <section className={`ml-0`}>
               <div className={`flex flex-col items-center space-y-6`}>
                  <h2 className={`text-2xl`}>
                     <Link href={"/contacts"}>Контакти</Link>
                  </h2>
                  <div className={`flex items-center space-x-3`}>
                     {socials.map(({ type, link, logo }, i) => (
                        <a key={i} href={`https://${link}`}>
                           {logo}
                        </a>
                     ))}
                  </div>
               </div>
            </section>
            <section
               className={`ml-0 flex flex-col items-start gap-4 max-w-[500px]`}
            >
               <Link href={"/about"}>
                  <h2 className={`text-2xl`}>За нас</h2>
               </Link>
               <p className={`text-gray-500`}>
                  {LOREM_IPSUM_TEXT.slice(0, 200)}
               </p>
            </section>
            <section
               className={`ml-0 flex flex-col items-start gap-4 max-w-[500px]`}
            >
               <Link href={"/privacy"}>
                  <h2 className={`text-2xl`}>Политика за поверителност</h2>
               </Link>
               <p className={`text-gray-500`}>
                  {LOREM_IPSUM_TEXT.slice(0, 160)}
               </p>
            </section>
            <section className={``}>
               <h2 className={`text-2xl`}>
                  <Link href={"/help"}>Помощ</Link>
               </h2>
            </section>
         </div>
      </footer>
   );
};
