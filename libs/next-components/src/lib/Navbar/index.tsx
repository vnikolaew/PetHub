import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import SearchBar from "./SearchBar";

interface NavbarProps {
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
            <Image
               className={`rounded-lg shadow-md`}
               height={20}
               width={150}
               src={siteLogo}
               alt={"Site logo"}
            />
            <SearchBar />
            <div
               className={`flex w-1/5 px-8 items-center gap-24 justify-center`}
            >
               <Image
                  width={30}
                  height={30}
                  src={avatarLogo}
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
