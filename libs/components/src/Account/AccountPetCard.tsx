import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

export interface IPetInfo {
   petId: string;
   avatar: string | StaticImageData;
   name: string;
   breed: string;
   birthDate: Date;
   description: string;
}

export interface AccountPetCardProps {
   pet: IPetInfo;
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
   dateStyle: "medium",
});

export const AccountPetCard: FC<AccountPetCardProps> = ({ pet }) => {
   return (
      <div
         className={`flex items-start gap-12 p-5 rounded-xl shadow-md border border-gray-100`}
      >
         <div className={`flex flex-col items-center gap-2`}>
            <Image
               height={100}
               width={100}
               src={pet.avatar}
               alt={"Pet avatar"}
            />
            <h2 className={`text-2xl`}>{pet.name}</h2>
         </div>
         <div className={`flex w-[300px] flex-1 flex-col items-start gap-2`}>
            <div className={`flex w-full justify-between items-center gap-2`}>
               <h2 className={`text-lg font-semibold`}>Вид </h2>
               <span className={`text-lg`}>{pet.breed}</span>
            </div>

            <div className={`flex w-full justify-between items-center gap-2`}>
               <h2 className={`text-lg font-semibold`}>Дата на раждане </h2>
               <span className={`text-lg inline`}>
                  {dateFormatter.format(pet.birthDate)}
               </span>
            </div>

            <div className={`flex w-full justify-between items-center gap-2`}>
               <h2 className={`text-lg font-semibold`}>Възраст </h2>
               <span className={`text-lg `}>
                  {new Date().getFullYear() - pet.birthDate.getFullYear()}
               </span>
            </div>
         </div>
         <div className={`flex w-[500px] flex-col items-start gap-4`}>
            <h2 className={`text-lg font-semibold`}>Описание </h2>
            <p className={`p-2 rounded-md border border-black`}>
               {pet.description}
            </p>
         </div>
      </div>
   );
};
