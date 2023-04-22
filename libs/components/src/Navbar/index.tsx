import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";
import UserDropdown from "./UserDropdown";

export interface NavbarProps {
   siteLogo: string | StaticImageData;
   avatarLogo: string | StaticImageData;
   shoppingCartLogo: string | StaticImageData;
}

export const Navbar: FC<NavbarProps> = ({
   siteLogo,
   avatarLogo,
   shoppingCartLogo,
}) => {
   return (
      <div className={`w-[100vw] mb-1`}>
         <nav
            className={`flex shadow-md border-b-gray-400 w-full items-center gap-2 p-2 m-0`}
         >
            <Link href={"/"}>
               <Image
                  className={`rounded-lg shadow-md`}
                  height={20}
                  width={150}
                  src={siteLogo}
                  alt={"Site logo"}
               />
            </Link>
            <SearchBar />
            <div
               className={`flex w-1/5 px-4 items-center gap-12 justify-center`}
            >
               <UserDropdown avatarLogo={avatarLogo} />
               <Link href={"/shopping-cart"}>
                  <Image
                     width={30}
                     height={30}
                     src={shoppingCartLogo}
                     alt={"Shopping Cart"}
                  />
               </Link>
            </div>
         </nav>
      </div>
   );
};
