import React, { FC, useState } from "react";
import Image, { StaticImageData } from "next/image";
import SearchBar from "./SearchBar";
import * as Tooltip from "@radix-ui/react-tooltip";
import Link from "next/link";
import { motion } from "framer-motion";
import UserDropdown from "./UserDropdown";
import { useShoppingCart } from "@pethub/state";
import ShoppingCartDropdown from "./ShoppingCartDropdown";
import * as Separator from "@radix-ui/react-separator";

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
   const products = useShoppingCart((state) => state.products);
   const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);

   return (
      <header className={`sticky bg-white z-20 top-0`}>
         <div className={`w-[100vw] bg-white z-50  mb-1`}>
            <nav
               className={`flex bg-raw-sienna shadow-md border-b-gray-400 w-full items-center gap-2 p-2 m-0`}
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
                  className={`flex bg-white rounded-full shadow-md py-2 w-auto mx-8 px-16 items-center gap-12 justify-center`}
               >
                  <UserDropdown avatarLogo={avatarLogo} />
                  <Separator.Root
                     className={`bg-black text-black h-[30px] w-[1px]`}
                     orientation={"vertical"}
                  />
                  <Tooltip.Provider>
                     <Tooltip.Root
                        onOpenChange={setIsShoppingCartOpen}
                        open={isShoppingCartOpen}
                        delayDuration={300}
                     >
                        <Tooltip.Trigger className={`relative`}>
                           <div
                              className={`w-4 absolute -top-1/4 -right-1/3 h-4 rounded-full text-xs bg-red-500 text-white flex items-center justify-center`}
                           >
                              {products.length}
                           </div>
                           <Image
                              width={30}
                              height={30}
                              src={shoppingCartLogo}
                              alt={"Shopping Cart"}
                           />
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                           <Tooltip.Content
                              asChild
                              side={"bottom"}
                              sideOffset={10}
                              className={`rounded-md z-50 w-auto h-auto px-3 py-1 bg-white shadow-md select-none`}
                              // forceMount
                           >
                              <motion.div
                                 key={"cart"}
                                 animate={{
                                    opacity: 1,
                                    translateY: "0px",
                                    scale: 1,
                                 }}
                                 initial={{
                                    opacity: 0,
                                    translateY: "-2px",
                                    scale: 0.8,
                                 }}
                                 transition={{ duration: 0.2 }}
                              >
                                 <ShoppingCartDropdown
                                    onClose={() => setIsShoppingCartOpen(false)}
                                 />
                                 <Tooltip.Arrow className={`fill-white`} />
                              </motion.div>
                           </Tooltip.Content>
                        </Tooltip.Portal>
                     </Tooltip.Root>
                  </Tooltip.Provider>
               </div>
            </nav>
         </div>
      </header>
   );
};
