"use client";
import { bonaNova } from "../fonts";
import "./styles.css";
import logo from "@pethub/assets/site-logo.webp";
import React, { PropsWithChildren } from "react";
import avatarLogo from "@pethub/assets/user-logo.svg";
import shoppingCartLogo from "@pethub/assets/cart-logo.png";
import {
   FacebookLogo,
   InstagramLogo,
   YoutubeLogo,
   Footer,
   Navbar,
   Social,
   ProductsProvider,
   CookieBanner,
} from "@pethub/components";

const SOCIALS: Social[] = [
   {
      logo: <FacebookLogo size={30} />,
      link: "www.facebook.com",
      type: "facebook",
   },
   {
      logo: <InstagramLogo size={36} />,
      link: "www.instagram.com",
      type: "instagram",
   },
   {
      logo: <YoutubeLogo className={`fill-red-600`} color={"red"} size={30} />,
      link: "www.youtube.com",
      type: "youtube",
   },
];

function PethubLayout({ children }: PropsWithChildren) {
   return (
      <html lang={"bg"}>
         <body className={`bg-albescent-white`}>
            <ProductsProvider>
               <Navbar
                  shoppingCartLogo={shoppingCartLogo}
                  avatarLogo={avatarLogo}
                  siteLogo={logo}
               />
               <main
                  className={`app mb-24 bg-albescent-white min-h-[70vh] ${bonaNova.className}`}
               >
                  {children}
               </main>
               <Footer socials={SOCIALS} />
               <CookieBanner cookieName={"PetHubConsentCookie"} />
            </ProductsProvider>
         </body>
      </html>
   );
}

export default PethubLayout;
