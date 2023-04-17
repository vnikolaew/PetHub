"use client";
import { dancingScript, robotoSlab, bonaNova } from "../fonts";
import "./styles.css";
import logo from "../public/assets/site-logo.jpg";
import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { Navbar } from "@pethub/components";

export const metadata: Metadata = {
   title: "PetHub Co",
   icons: [logo.src],
};

function PethubLayout({ children }: PropsWithChildren) {
   return (
      <html lang={"bg"}>
         <body>
            <main className={`app ${bonaNova.className}`}>
               <Navbar logo={logo.src} />
               {children}
            </main>
         </body>
      </html>
   );
}

export default PethubLayout;
