import React, { FC, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import Image, { StaticImageData } from "next/image";
import verClinicLogo from "../../public/assets/vet-clinic-logo.png";
import { EnterIcon, IdCardIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export interface UserDropdownProps {
   avatarLogo: string | StaticImageData;
}

const UserDropdown: FC<UserDropdownProps> = ({ avatarLogo }) => {
   const [open, setOpen] = useState(false);

   return (
      <Popover.Root onOpenChange={setOpen} open={open}>
         <Popover.Trigger asChild>
            <Image
               className={`cursor-pointer hover:text-gray-400 stroke-gray-400 fill-gray-400`}
               width={30}
               height={30}
               src={avatarLogo}
               alt={"User Avatar"}
            />
         </Popover.Trigger>
         {/*TODO: Add animations and transitions ...*/}
         <Popover.Portal>
            <Popover.Content className={`z-10`} sideOffset={5}>
               <div
                  className={`flex bg-white shadow-md rounded-md px-6 py-6 z-10 flex-col gap-6`}
               >
                  <div
                     className={`flex border-b border-gray-300 flex-col items-center w-full justify-center mx-auto`}
                  >
                     <Link onClick={(_) => setOpen(false)} href={"/signin"}>
                        <button
                           className={`flex hover:opacity-80 transition-all duration-200 shadow-md mb-6 px-6 py-2 bg-whiskey text-white border-2 border-whiskey rounded-lg outline-none items-center gap-2`}
                        >
                           <span className={`text-lg`}>Влизане</span>
                           <EnterIcon height={20} width={20} color={"white"} />
                        </button>
                     </Link>
                     <div className={`flex flex-col items-center mb-2`}>
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
                  <Link
                     onClick={(_) => setOpen(false)}
                     href={`/account?tab=my-purchases`}
                  >
                     <div
                        className={`flex pb-4 border-b border-gray-300 items-center justify-start gap-8`}
                     >
                        <IdCardIcon height={40} width={40} color={"black"} />
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
                        <span className={`text-lg`}>История на прегледите</span>
                     </div>
                  </Link>
               </div>
               <Popover.Close></Popover.Close>
               <Popover.Arrow className={`fill-white`} />
            </Popover.Content>
         </Popover.Portal>
      </Popover.Root>
   );
};

export default UserDropdown;
