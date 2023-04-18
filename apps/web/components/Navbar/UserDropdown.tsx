import React, { FC } from "react";
import * as Popover from "@radix-ui/react-popover";
import Image, { StaticImageData } from "next/image";
import verClinicLogo from "../../public/assets/vet-clinic-logo.png";
import { EnterIcon, IdCardIcon } from "@radix-ui/react-icons";

export interface UserDropdownProps {
   avatarLogo: string | StaticImageData;
}

const UserDropdown: FC<UserDropdownProps> = ({ avatarLogo }) => {
   return (
      <Popover.Root>
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
                     <button
                        className={`flex hover:opacity-80 transition-all duration-200 shadow-md mb-6 px-6 py-2 bg-whiskey text-white border-2 border-whiskey rounded-lg outline-none items-center gap-2`}
                     >
                        <span className={`text-lg`}>Влизане</span>
                        <EnterIcon height={20} width={20} color={"white"} />
                     </button>
                  </div>
                  <div className={`flex pb-4 border-b border-gray-300 items-center justify-start gap-8`}>
                     <IdCardIcon height={40} width={40} color={"black"} />
                     <span className={`text-lg`}>Моите поръчки</span>
                  </div>

                  <div className={`flex pb-4 border-b border-gray-300 items-center justify-start gap-8`}>
                     <Image alt={'Vet clinic'} src={verClinicLogo} height={40} width={40} color={"black"} />
                     <span className={`text-lg`}>История на прегледите</span>
                  </div>
               </div>
               <Popover.Close></Popover.Close>
               <Popover.Arrow className={`fill-white`} />
            </Popover.Content>
         </Popover.Portal>
      </Popover.Root>
   );
};

export default UserDropdown;
