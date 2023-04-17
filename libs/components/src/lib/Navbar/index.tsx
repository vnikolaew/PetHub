import React, { FC } from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import userLogo from "./assets/user-logo.png";
import shoppingCartLogo from "./assets/shiopping-cart-logo.png";

export interface NavbarProps {
   logo: string;
}

export const Navbar: FC<NavbarProps> = ({ logo }) => {
   return (
      <div className={`w-[100vw] mb-1`}>
         <nav
            className={`flex shadow-md border-b-gray-400 w-full items-center gap-2 p-2 m-0`}
         >
            <Image
               className={`rounded-lg shadow-md`}
               height={20}
               width={150}
               src={logo}
               alt={"Site logo"}
            />
            <SearchBar />
            <div className={`flex w-1/5 px-8 items-center justify-around`}>
               <Image
                  width={30}
                  height={30}
                  src={userLogo}
                  alt={"User Avatar"}
               />
               <Image
                  width={30}
                  height={30}
                  src={shoppingCartLogo}
                  alt={"Shopping Cart"}
               />
            </div>
         </nav>
      </div>
   );
};
