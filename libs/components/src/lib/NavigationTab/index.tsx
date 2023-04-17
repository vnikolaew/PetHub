import React, { FC } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import sampleLogo from "./assets/sample-logo.png";
import Image from "next/image";
import Link from "next/link";

export interface NavigationTabItem {
   logo?: React.ReactNode;
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

const NavigationTab: FC<NavigationTabProps> = ({
   logo,
   label,
   baseRoute,
   className,
   subMenu,
   ...rest
}) => {
   return (
      <DropdownMenu.Root>
         <DropdownMenu.Trigger asChild>
            <button className={`focus:z-10`}>
               <div
                  className={`py-5 flex gap-2 items-center border border-gray-100 rounded-lg justify-center ${className}`}
                  {...rest}
               >
                  {logo}
                  <h2 className={`text-2xl`}>{label}</h2>
                  <ChevronDownIcon width={16} />
               </div>
            </button>
         </DropdownMenu.Trigger>
         <DropdownMenu.Portal>
            <DropdownMenu.Content className={`rounded-2xl min-w-[300px]`}>
               {subMenu?.map((item, i) =>
                  item.subMenu?.length ? (
                     <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger
                           className={`w-full z-10 bg-white transition-colors duration-200 cursor-pointer hover:bg-gray-50 border-b border-gray-100 shadow-sm flex items-center justify-between px-4 py-5`}
                        >
                           <span>
                              <Image
                                 width={20}
                                 height={20}
                                 src={sampleLogo}
                                 alt={"Sample logo"}
                              />
                           </span>
                           <div className={`text-lg`}>{item.label}</div>
                           <ChevronRightIcon width={16} />
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                           <DropdownMenu.SubContent
                              sideOffset={2}
                              alignOffset={20}
                           >
                              {item.subMenu?.map((subItem, i) => (
                                 <Link
                                    key={i}
                                    href={`/${baseRoute}/${item.href}/${subItem.href}`}
                                 >
                                    <DropdownMenu.Item
                                       className={`w-full bg-white min-w-[200px] text-sm text-gray-400 transition-colors duration-200 cursor-pointer hover:bg-gray-50 border-b border-gray-50 shadow-sm flex items-center gap-2 justify-start px-4 py-3`}
                                    >
                                       <span>
                                          <Image
                                             width={20}
                                             height={20}
                                             src={sampleLogo}
                                             alt={"Sample logo"}
                                          />
                                       </span>
                                       <div className={`text-md`}>
                                          {subItem.label}
                                       </div>
                                    </DropdownMenu.Item>
                                 </Link>
                              ))}
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
                              src={sampleLogo}
                              alt={"Sample logo"}
                           />
                        </span>
                        <div className={`text-lg`}>{item.label}</div>
                        <ChevronRightIcon width={16} />
                     </DropdownMenu.Item>
                  )
               )}
            </DropdownMenu.Content>
         </DropdownMenu.Portal>
      </DropdownMenu.Root>
   );
};

export default NavigationTab;
