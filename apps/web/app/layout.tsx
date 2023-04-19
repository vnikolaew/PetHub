"use client";
import { bonaNova } from "../fonts";
import "./styles.css";
import logo from "../public/assets/site-logo.webp";
import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { Footer, Navbar, Social } from "../components";
import avatarLogo from "../public/assets/user-logo.svg";
import shoppingCartLogo from "../public/assets/shopping-cart-logo.svg";
import FacebookLogo from "../components/Logos/FacebookLogo";
import InstagramLogo from "../components/Logos/InstagramLogo";
import YoutubeLogo from "../components/Logos/YoutubeLogo";

export const metadata: Metadata = {
   title: "PetHub Co",
   icons: [logo.src],
};

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
               <Footer socials={SOCIALS} />
            </footer>
         </body>
      </html>
   );
}

export default PethubLayout;
