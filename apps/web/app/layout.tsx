"use client";
import { bonaNova } from "../fonts";
import "./styles.css";
import logo from "../public/assets/site-logo.webp";
import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { Footer, Navbar } from "@pethub/components";
import avatarLogo from "../public/assets/user-logo.svg";
import facebookLogo from "../public/assets/facebook.png";
import instagramLogo from "../public/assets/instagram.png";
import youtubeLogo from "../public/assets/youtube.png";
import shoppingCartLogo from "../public/assets/shopping-cart-logo.svg";

export const metadata: Metadata = {
   title: "PetHub Co",
   icons: [logo.src],
};

function PethubLayout({ children }: PropsWithChildren) {
   return (
      <html lang={"bg"}>
         <body>
            <header>
               <Navbar
                  shoppingCartLogo={shoppingCartLogo}
                  avatarLogo={avatarLogo}
                  siteLogo={logo}
               />
            </header>
            <main className={`app min-h-[70vh] ${bonaNova.className}`}>
               {children}
            </main>
            <footer>
               <Footer
                  socials={[
                     {
                        logo: facebookLogo,
                        link: "www.facebook.com",
                        type: "facebook",
                     },
                     {
                        logo: instagramLogo,
                        link: "www.instagram.com",
                        type: "instagram",
                     },
                     {
                        logo: youtubeLogo,
                        link: "www.youtube.com",
                        type: "youtube",
                     },
                  ]}
               />
            </footer>
         </body>
      </html>
   );
}

export default PethubLayout;
