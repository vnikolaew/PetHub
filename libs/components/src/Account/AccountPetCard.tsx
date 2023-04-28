import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { IPet } from "@pethub/state";

export interface IPetInfo {
   petId: string;
   avatar: string | StaticImageData;
   name: string;
   breed: string;
   birthDate: Date;
   description: string;
}

export interface AccountPetCardProps {
   pet: IPet;
}

export const dateTimeFormatter = new Intl.DateTimeFormat("bg", {
   dateStyle: "long",
});

export const AccountPetCard: FC<AccountPetCardProps> = ({ pet }) => {
   return (
      <div
         className={`flex items-start gap-12 p-5 rounded-xl shadow-md border border-gray-100`}
      >
         <div className={`flex flex-col items-center gap-4`}>
            <Image
               height={100}
               width={100}
               src={pet.avatar}
               alt={"Pet avatar"}
            />
            <h2 className={`text-2xl text-raw-sienna font-semibold`}>
               {pet.name}
            </h2>
         </div>
         <div className={`flex w-[300px] flex-1 flex-col items-start gap-2`}>
            <div className={`flex w-full justify-between items-center gap-2`}>
               <h2 className={`text-lg font-semibold`}>Вид </h2>
               <span
                  className={`text-lg ${
                     pet.breed.length ? "text-black" : "text-gray-400"
                  }`}
               >
                  {pet.breed?.length ? pet.breed : "Неуточнен"}
               </span>
            </div>

            <div className={`flex w-full justify-between items-center gap-8`}>
               <h2 className={`text-lg font-semibold whitespace-nowrap`}>
                  Дата на раждане{" "}
               </h2>
               <span className={`text-lg inline whitespace-nowrap`}>
                  {dateTimeFormatter.format(pet.birthDate)}
               </span>
            </div>

            <div className={`flex w-full justify-between items-center gap-2`}>
               <h2 className={`text-lg font-semibold`}>Възраст </h2>
               <span className={`text-lg `}>
                  {new Date().getFullYear() - pet.birthDate.getFullYear()}{" "}
                  години
               </span>
            </div>
         </div>
         <div className={`flex w-[500px] flex-col items-center gap-4`}>
            <h2 className={`text-lg font-semibold`}>Описание </h2>
            <p
               className={`p-2 px-4 rounded-md text-center w-full shadow-md border border-gray-200 ${
                  pet.description.length ? "text-black" : "text-gray-500"
               }`}
            >
               {pet.description && pet.description?.length
                  ? pet.description
                  : "Липсва."}
            </p>
         </div>
      </div>
   );
};
