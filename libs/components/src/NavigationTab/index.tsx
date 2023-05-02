import React, { FC, Fragment } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export interface NavigationTabItem {
   logo?: string | StaticImageData;
   label: string;
   baseRoute: string;
   subMenu?: (Omit<NavigationTabItem, "baseRoute"> & { href?: string })[];
}

export interface NavigationTabProps
   extends NavigationTabItem,
      React.DetailedHTMLProps<
         React.HTMLAttributes<HTMLDivElement>,
         HTMLDivElement
      > {}

export const NavigationTab: FC<NavigationTabProps> = ({
   logo,
   label,
   baseRoute,
   className,
   subMenu,
   ...rest
}) => {
   return (
      <DropdownMenu.Root>
         {subMenu?.length ? (
            <DropdownMenu.Trigger asChild>
               <button onClick={(_) => console.log(_)} className={``}>
                  <div
                     className={`py-5 flex gap-4 items-center border border-gray-100 rounded-lg justify-center ${className}`}
                     {...rest}
                  >
                     <Image
                        width={30}
                        height={30}
                        src={logo!}
                        alt={"Sample logo"}
                     />
                     <h2 className={`text-[1.4rem]`}>{label}</h2>

                     <ChevronDownIcon className={``} width={16} />
                  </div>
               </button>
            </DropdownMenu.Trigger>
         ) : (
            <Link
               className={`py-5 flex gap-4 items-center border border-gray-100 rounded-lg justify-center ${className}`}
               href={`/${baseRoute}`}
            >
               <Image width={30} height={30} src={logo!} alt={"Sample logo"} />
               <h2 className={`text-[1.4rem]`}>{label}</h2>
            </Link>
         )}
         <DropdownMenu.Portal>
            <DropdownMenu.Content
               asChild
               className={`rounded-2xl min-w-[300px]`}
            >
               <motion.div
                  animate={{
                     opacity: 1,
                     height: "100%",
                     scale: 1,
                  }}
                  initial={{
                     opacity: 0,
                     height: "0%",
                     scale: 0.8,
                  }}
                  transition={{ duration: 0.2 }}
               >
                  {subMenu?.map((item, i) =>
                     item.subMenu?.length ? (
                        <DropdownMenu.Sub key={i}>
                           <DropdownMenu.SubTrigger
                              className={`w-full outline-none z-10 bg-white transition-colors duration-200 cursor-pointer hover:bg-gray-50 border-b border-gray-100 m-0 shadow-sm flex items-center justify-between px-6 py-5`}
                           >
                              <span>
                                 <Image
                                    width={20}
                                    height={20}
                                    src={item.logo!}
                                    alt={"Sample logo"}
                                 />
                              </span>
                              <Link href={`/${baseRoute}/${item.href}`}>
                                 <div className={`text-lg`}>{item.label}</div>
                              </Link>
                              <ChevronRightIcon width={16} />
                           </DropdownMenu.SubTrigger>
                           <DropdownMenu.Portal>
                              <DropdownMenu.SubContent
                                 asChild
                                 sideOffset={2}
                                 alignOffset={20}
                              >
                                 <motion.div
                                    animate={{
                                       opacity: 1,
                                       height: "100%",
                                       scale: 1,
                                    }}
                                    initial={{
                                       opacity: 0,
                                       height: "0%",
                                       scale: 0.8,
                                    }}
                                    transition={{ duration: 0.2 }}
                                 >
                                    {item.subMenu?.map((subItem, i) => (
                                       <Link
                                          key={i}
                                          href={`/${baseRoute}/${item.href}/${subItem.href}`}
                                       >
                                          <DropdownMenu.Item
                                             className={`w-full outline-none bg-white min-w-[200px] text-sm text-gray-400 transition-colors duration-200 cursor-pointer hover:bg-gray-50 border-b border-gray-50 shadow-sm flex items-center gap-2 justify-start px-4 py-3`}
                                          >
                                             <span>
                                                <Image
                                                   width={20}
                                                   height={20}
                                                   src={logo!}
                                                   alt={"Sample logo"}
                                                />
                                             </span>
                                             <div className={`text-md`}>
                                                {subItem.label}
                                             </div>
                                          </DropdownMenu.Item>
                                       </Link>
                                    ))}
                                 </motion.div>
                              </DropdownMenu.SubContent>
                           </DropdownMenu.Portal>
                        </DropdownMenu.Sub>
                     ) : (
                        <DropdownMenu.Item
                           className={`w-full z-10 bg-white transition-colors duration-200 cursor-pointer hover:bg-gray-50 border-b border-gray-100 shadow-sm flex items-center justify-between px-4 py-5`}
                           key={i}
                        >
                           <span>
                              <Image
                                 width={20}
                                 height={20}
                                 src={logo!}
                                 alt={"Sample logo"}
                              />
                           </span>
                           <div className={`text-lg`}>{item.label}</div>
                           <ChevronRightIcon width={16} />
                        </DropdownMenu.Item>
                     )
                  )}
               </motion.div>
            </DropdownMenu.Content>
         </DropdownMenu.Portal>
      </DropdownMenu.Root>
   );
};
