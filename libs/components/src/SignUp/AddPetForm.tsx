import React, { FC } from "react";
import * as Form from "@radix-ui/react-form";
import Image from "next/image";
import calendarLogo from "@pethub/assets/calendar-logo.png";
import { IPet } from "@pethub/web/app/signup/page";
import { SelectInput } from "../common";
import { PetType } from "@pethub/state";

interface AddPetFormProps {
   petIndex: number;
   onFieldChange: (name: string, value: string) => void;
   pet: IPet;
}

const PET_TYPE_OPTIONS: { value: PetType; label: string }[] = [
   {
      value: PetType.Dog,
      label: "куче",
   },
   {
      value: PetType.Cat,
      label: "котка",
   },
   {
      value: PetType.Fish,
      label: "риба",
   },
   {
      value: PetType.Rodent,
      label: "гризач",
   },
   {
      value: PetType.Bird,
      label: "птица",
   },
];

export const AddPetForm: FC<AddPetFormProps> = ({
   petIndex,
   onFieldChange,
   pet,
}) => {
   return (
      <div
         className={`flex-col w-full border border-gray-100 p-3 px-6 rounded-xl shadow-md flex items-start gap-2`}
      >
         <Form.Field
            className={`flex items-center gap-2 justify-between w-full`}
            name={`pet[${petIndex}].type`}
         >
            <Form.Label className={`text-md whitespace-nowrap`}>
               Вид домашен любимец
            </Form.Label>
            <Form.Control asChild>
               <SelectInput
                  onChange={(value) => {
                     console.log(value);
                     onFieldChange(`pet[${petIndex}].type`, value);
                  }}
                  placeholder={"Избери вид ..."}
                  options={PET_TYPE_OPTIONS}
               />
            </Form.Control>
         </Form.Field>

         <Form.Field
            className={`flex flex-col items-end gap-1 w-full`}
            name={`pet[${petIndex}].name`}
         >
            <div className={`flex items-center gap-8 justify-between w-full`}>
               <Form.Label className={`text-md`}>
                  Име на домашен любимец
               </Form.Label>
               <Form.Control asChild>
                  <input
                     placeholder={""}
                     value={pet.name}
                     onChange={(e) =>
                        onFieldChange(e.target.name, e.target.value)
                     }
                     name={`pet[${petIndex}].name`}
                     autoComplete={"off"}
                     className={`text-md flex-1 w-32 mt-1 px-4 py-1 block rounded-md shadow-md`}
                     type={"text"}
                  />
               </Form.Control>
            </div>
            <Form.Message
               className={`text-red-600 text-sm`}
               match={(value, _) => value.length < 3}
            >
               Моля въведете валидно име
            </Form.Message>
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
               <Form.Control asChild>
                  <input
                     placeholder={""}
                     value={pet.birthDate.toISOString().split("T")[0]}
                     name={`pet[${petIndex}].birthDate`}
                     onChange={(e) =>
                        onFieldChange(e.target.name, e.target.value)
                     }
                     autoComplete={"off"}
                     className={`text-sm flex-1 mt-1 px-4 py-1 block rounded-md shadow-md`}
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
