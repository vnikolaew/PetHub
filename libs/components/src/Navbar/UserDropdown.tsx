import React, { FC, useState } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import Image, { StaticImageData } from "next/image";
import verClinicLogo from "@pethub/assets/vet-clinic-logo.png";
import { EnterIcon, ExitIcon, IdCardIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCurrentUser } from "@pethub/state";

export interface UserDropdownProps {
   avatarLogo: string | StaticImageData;
}

const UserDropdown: FC<UserDropdownProps> = ({ avatarLogo }) => {
   const [open, setOpen] = useState(false);
   const { user, setUser } = useCurrentUser(({ user, setUser }) => ({
      user,
      setUser,
   }));

   return (
      <HoverCard.Root
         closeDelay={100}
         openDelay={200}
         onOpenChange={setOpen}
         open={open}
      >
         <HoverCard.Trigger>
            <Link href={`/account?tab=me`}>
               <div className={`flex cursor-pointer items-end gap-4`}>
                  <Image
                     className={`hover:text-gray-400 stroke-gray-400 fill-gray-400`}
                     width={30}
                     height={30}
                     src={avatarLogo}
                     alt={"User Avatar"}
                  />
                  {user && (
                     <span className={`text-lg self-end`}>
                        {user.firstName}
                     </span>
                  )}
               </div>
            </Link>
         </HoverCard.Trigger>
         <HoverCard.Portal>
            <AnimatePresence>
               {open && (
                  <HoverCard.Content asChild className={`z-50`} sideOffset={10}>
                     <motion.div
                        key={"modal"}
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
                        exit={{
                           opacity: 0,
                           height: "0%",
                           scale: 0.8,
                        }}
                        transition={{ duration: 0.2 }}
                        className={`flex bg-white shadow-md rounded-md px-6 py-6 z-10 flex-col gap-6`}
                     >
                        {!user && (
                           <div
                              className={`flex border-b border-gray-300 flex-col items-center w-full justify-center mx-auto`}
                           >
                              <Link
                                 onClick={(_) => setOpen(false)}
                                 href={`/signin?redirect=${window.location.pathname.slice(
                                    1
                                 )}`}
                              >
                                 <button
                                    className={`flex hover:opacity-80 transition-all duration-200 shadow-md mb-6 px-6 py-2 bg-whiskey text-white border-2 border-whiskey rounded-lg outline-none items-center gap-2`}
                                 >
                                    <span className={`text-lg`}>Влизане</span>
                                    <EnterIcon
                                       height={20}
                                       width={20}
                                       color={"white"}
                                    />
                                 </button>
                              </Link>
                              <div
                                 className={`flex flex-col items-center mb-2`}
                              >
                                 <h2 className={`text-md font-semibold`}>
                                    Нямате акаунт?
                                 </h2>
                                 <Link
                                    className={`text-blue-700 -mt-2 text-md underline font-semibold`}
                                    onClick={(_) => setOpen(false)}
                                    href={"/signup"}
                                 >
                                    Регистрирайте се тук
                                 </Link>
                              </div>
                           </div>
                        )}
                        <Link
                           onClick={(_) => setOpen(false)}
                           href={`/account?tab=my-purchases`}
                        >
                           <div
                              className={`flex pb-4 border-b border-gray-300 items-center justify-start gap-8`}
                           >
                              <IdCardIcon
                                 height={40}
                                 width={40}
                                 color={"black"}
                              />
                              <span className={`text-lg`}>Моите поръчки</span>
                           </div>
                        </Link>

                        <Link
                           onClick={(_) => setOpen(false)}
                           href={`/account?tab=history`}
                        >
                           <div
                              className={`flex pb-4 border-b border-gray-300 items-center justify-start gap-8`}
                           >
                              <Image
                                 alt={"Vet clinic"}
                                 src={verClinicLogo}
                                 height={40}
                                 width={40}
                                 color={"black"}
                              />
                              <span className={`text-lg`}>
                                 История на прегледите
                              </span>
                           </div>
                        </Link>
                        {user && (
                           <Link
                              onClick={(_) => {
                                 setOpen(false);
                                 setUser(null!);
                              }}
                              href={`/signin`}
                           >
                              <div
                                 className={`flex pb-4 border-b border-gray-300 items-center justify-start gap-8`}
                              >
                                 <ExitIcon height={24} width={24} />
                                 <span className={`text-lg`}>
                                    Излез от профила
                                 </span>
                              </div>
                           </Link>
                        )}
                        {/*<Popover.Close />*/}
                        <HoverCard.Arrow className={`fill-white`} />
                     </motion.div>
                  </HoverCard.Content>
               )}
            </AnimatePresence>
         </HoverCard.Portal>
      </HoverCard.Root>
   );
};

export default UserDropdown;
