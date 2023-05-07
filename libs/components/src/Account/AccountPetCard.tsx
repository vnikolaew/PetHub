import React, { FC, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { IPet, useCurrentUser } from "@pethub/state";
import { Pencil2Icon } from "@radix-ui/react-icons";

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
   const [isEditing, setIsEditing] = useState(false);
   const { pets, changePetDescription } = useCurrentUser(
      ({ user: { pets }, changePetDescription }) => ({
         pets,
         changePetDescription,
      })
   );
   const [newDescription, setNewDescription] = useState("");

   return (
      <div
         className={`flex bg-white items-start gap-12 p-5 rounded-xl shadow-md border border-gray-100`}
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
            {isEditing ? (
               <div className={`flex flex-col w-full items-end gap-3`}>
                  <textarea
                     value={newDescription}
                     placeholder={"Моят малък сладък домашен любимец"}
                     onChange={(e) => setNewDescription(e.target.value)}
                     className={`p-2 relative line-clamp-2 px-4 rounded-md w-full shadow-md border border-gray-200 ${
                        pet.description.length ? "text-black" : "text-gray-500"
                     }`}
                  />
                  <button
                     type={"submit"}
                     onClick={(_) => {
                        setIsEditing(false);
                        setNewDescription("");
                        changePetDescription(pet.id, newDescription);
                     }}
                     className={`flex text-xl hover:opacity-80 transition-all duration-200 shadow-md px-12 py-1 bg-cornflower-blue text-white border-2 border-cornflower-blue rounded-lg outline-none items-center gap-2`}
                  >
                     Запази
                  </button>
               </div>
            ) : (
               <p
                  className={`p-2 relative line-clamp-2 px-4 rounded-md text-center w-full shadow-md border border-gray-200 ${
                     pet.description.length ? "text-black" : "text-gray-500"
                  }`}
               >
                  <div
                     onClick={(_) => setIsEditing(!isEditing)}
                     className={`flex transition-opacity duration-200 hover:opacity-80 cursor-pointer absolute top-2 right-2 items-center justify-center p-1 bg-gray-200 rounded-md`}
                  >
                     <Pencil2Icon height={16} width={16} />
                  </div>
                  {pet.description && pet.description?.length
                     ? pet.description
                     : "Липсва."}
               </p>
            )}
         </div>
      </div>
   );
};
