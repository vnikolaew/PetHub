import React, { FC } from "react";
import * as Form from "@radix-ui/react-form";
import Image from "next/image";
import calendarLogo from "@pethub/assets/calendar-logo.png";
import { IPet, PetType } from "@pethub/web/app/signup/page";

interface AddPetFormProps {
   petIndex: number;
   onFieldChange: React.ChangeEventHandler<HTMLInputElement>;
   pet: IPet;
}

export const AddPetForm: FC<AddPetFormProps> = ({
   petIndex,
   onFieldChange,
   pet,
}) => {
   return (
      <div
         className={`flex-col border border-gray-100 p-3 px-6 rounded-xl shadow-md flex items-start gap-2`}
      >
         <Form.Field
            className={`flex items-center justify-between w-full`}
            name={`pet[${petIndex}].type`}
         >
            <Form.Label className={`text-md`}>Вид домашен любимец</Form.Label>
            <Form.Control asChild>
               <select
                  id={"petType"}
                  name={`pet[${petIndex}].type`}
                  onChange={onFieldChange as any}
                  className={`text-md relative w-32 mt-1 px-4 py-1 block rounded-md shadow-md`}
                  autoComplete={"off"}
               >
                  <option value={"dog"}>Куче</option>
                  <option value={"cat"}>Котка</option>
                  <option value={"fish"}>Риба</option>
                  <option value={"rodent"}>Гризач</option>
                  <option value={"bird"}>Птица</option>
               </select>
            </Form.Control>
         </Form.Field>

         <Form.Field
            className={`flex items-center gap-8 justify-between w-full`}
            name={`pet[${petIndex}].name`}
         >
            <Form.Label className={`text-md`}>
               Име на домашен любимец
            </Form.Label>
            <Form.Message match={(value, _) => value.length > 6}>
               Моля въведете валидно име
            </Form.Message>
            <Form.Control
               onChange={onFieldChange}
               value={pet.name}
               name={`pet[${petIndex}].name`}
               asChild
            >
               <input
                  placeholder={""}
                  autoComplete={"off"}
                  className={`text-md w-32 mt-1 px-4 py-1 block rounded-md shadow-md`}
                  type={"text"}
               />
            </Form.Control>
         </Form.Field>

         <Form.Field
            className={`flex items-center justify-between w-full`}
            name={`pet[${petIndex}].birthDate`}
         >
            <Form.Label className={`text-md`}>Дата на раждане</Form.Label>
            <Form.Message match={(value, _) => false}>
               Моля въведете валидна дата
            </Form.Message>
            <div className={`flex items-center gap-4`}>
               <Form.Control
                  onChange={onFieldChange}
                  value={pet.name}
                  name={`pet[${petIndex}].name`}
                  asChild
               >
                  <input
                     placeholder={""}
                     autoComplete={"off"}
                     className={`text-sm w-24 mt-1 px-4 py-1 block rounded-md shadow-md`}
                     type={"date"}
                  />
               </Form.Control>
               <Image
                  height={20}
                  width={20}
                  src={calendarLogo}
                  alt={"Calendar logo"}
               />
            </div>
         </Form.Field>
      </div>
   );
};
