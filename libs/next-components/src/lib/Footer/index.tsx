import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface Social {
   type: string;
   logo: string | StaticImageData;
   link: string;
}

interface FooterProps {
   socials: Social[];
}

export const Footer: FC<FooterProps> = ({ socials }) => {
   return (
      <footer className={`mt-6`}>
         <div
            className={`flex p-8 flex-row shadow-md border-t-2 border-gray-100 items-start justify-between gap-6`}
         >
            <section className={`ml-0`}>
               <div className={`flex flex-col items-center space-y-6`}>
                  <h2 className={`text-2xl`}>Контакти</h2>
                  <div className={`flex items-center space-x-6`}>
                     {socials.map((social, i) => (
                        <a
                           target={"_blank"}
                           key={i}
                           href={`https://${social.link}`}
                        >
                           <Image
                              height={24}
                              width={24}
                              src={social.logo}
                              alt={social.type}
                           />
                        </a>
                     ))}
                  </div>
               </div>
            </section>
            <section
               className={`ml-0 flex flex-col items-start gap-4 max-w-[500px]`}
            >
               <h2 className={`text-2xl`}>За нас</h2>
               <p className={`text-gray-500`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam volutpat nunc vitae massa condimentum, at varius enim
                  tincidunt. Suspendisse ut tempor libero.
               </p>
            </section>
            <section
               className={`ml-0 flex flex-col items-start gap-4 max-w-[500px]`}
            >
               <h2 className={`text-2xl`}>Политика за поверителност</h2>
               <p className={`text-gray-500`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam volutpat nunc vitae massa condimentum, at varius enim
                  tincidunt.
               </p>
            </section>
            <section className={``}>
               <h2 className={`text-2xl`}>Помощ</h2>
            </section>
         </div>
      </footer>
   );
};
