"use client";
import React, { useState } from "react";
import { NextPage } from "next";
import { v4 as uuidv4 } from "uuid";
import * as Form from "@radix-ui/react-form";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { AddPetForm, Breadcrumb } from "@pethub/components";
import {
   VALID_EMAIL_REGEX,
   VALID_NAME_REGEX,
   VALID_PASSWORD_REGEX,
} from "../../utils/string-constants";
import { PetInfoType, useCurrentUser, useShoppingCart } from "@pethub/state";
import { useRouter } from "next/navigation";
import samplePetLogo from "@pethub/assets/pet-avatar-logo.png";
import userLogo from "@pethub/assets/user-logo.svg";

export enum PetType {
   Dog = "Dog",
   Cat = "Cat",
   Bird = "Bird",
   Fish = "Fish",
   Rodent = "Rodent",
}

export interface IPet {
   type: PetInfoType;
   name: string;
   birthDate: Date;
}

export interface ISignUpFormValues {
   firstName: string;
   lastName: string;
   email: string;
   password: string;
   hasPets: boolean;
   pets: IPet[];
}

const SignUpPage: NextPage = () => {
   const { setUser } = useCurrentUser();
   const clearShoppingCart = useShoppingCart(
      (state) => state.clearShoppingCart
   );
   const router = useRouter();
   const [formValues, setFormValues] = useState<ISignUpFormValues>({
      email: "",
      firstName: "",
      lastName: "",
      hasPets: false,
      pets: [],
      password: "",
   });

   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setUser({
         ...{
            ...formValues,
            pets: formValues.pets.map((p) => ({
               ...p,
               id: uuidv4(),
               description: "",
               avatar: samplePetLogo,
               breed: "",
            })),
         },
         vetAppointments: [],
         profilePicture: userLogo,
         orders: [],
      });
      clearShoppingCart();
      router.push(`/`);
   };

   const handleChangePetsCount = ({
      target: { valueAsNumber: value },
   }: React.ChangeEvent<HTMLInputElement>) =>
      setFormValues((v) => ({
         ...v,
         pets:
            v.pets.length > value
               ? v.pets.slice(0, value)
               : Array.from({
                    length: value,
                 }).map((_) => ({
                    name: "",
                    type: PetInfoType.Dog,
                    birthDate: new Date(),
                 })),
      }));

   const handlePetInfoChange = (name: string, value: string) => {
      // Input name is in the form `pet[1].name` ...

      const endIndex = name.lastIndexOf("]");
      const petIndex = Number.parseInt(name.slice(4, endIndex));

      const petProp = name.slice(endIndex + 2) as keyof IPet;
      const formattedValue = petProp === "birthDate" ? new Date(value) : value;

      if (petIndex >= formValues.pets.length) return;
      setFormValues((v) => ({
         ...v,
         pets: v.pets.map((pet, i) =>
            i === petIndex
               ? {
                    ...pet,
                    [petProp]: formattedValue,
                 }
               : pet
         ),
      }));
   };

   const handleFormChange = ({
      target: { name, value },
   }: React.ChangeEvent<HTMLInputElement>) =>
      setFormValues((v) => ({
         ...v,
         [name]: value,
      }));

   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Регистрация", path: "signup" },
            ]}
         />
         <section className={`w-full my-6 flex flex-col items-center gap-6`}>
            <h1 className={`text-4xl`}>
               Създай акаунт в <span className={`font-semibold`}>PetHub</span>{" "}
            </h1>
            <div className={`flex mt-6 gap-36 items-center p-6 justify-around`}>
               <Form.Root
                  onSubmit={handleFormSubmit}
                  className={`flex items-start gap-16`}
               >
                  <div className={`flex flex-col gap-6 items-start`}>
                     <Form.Field
                        className={`flex items-center justify-between w-full`}
                        name={"firstName"}
                     >
                        <Form.Label className={`text-xl`}>Име*</Form.Label>
                        <div className={`flex w-96 flex-col items-start gap-2`}>
                           <Form.Control
                              onChange={handleFormChange}
                              value={formValues.firstName}
                              name={"firstName"}
                              asChild
                           >
                              <input
                                 placeholder={"John"}
                                 autoComplete={"off"}
                                 className={`text-lg w-full mt-1 px-4 py-1 block rounded-md shadow-md`}
                                 type={"text"}
                              />
                           </Form.Control>
                           <Form.Message
                              className={`text-red-600`}
                              match={(value, _) =>
                                 !VALID_NAME_REGEX.test(value)
                              }
                           >
                              Моля въведете валидно име
                           </Form.Message>
                        </div>
                     </Form.Field>

                     <Form.Field
                        className={`flex items-center justify-between w-full`}
                        name={"lastName"}
                     >
                        <Form.Label className={`text-xl`}>Фамилия*</Form.Label>
                        <div className={`flex w-96 flex-col items-start gap-2`}>
                           <Form.Control
                              onChange={handleFormChange}
                              value={formValues.lastName}
                              name={"lastName"}
                              asChild
                           >
                              <input
                                 placeholder={"Doe"}
                                 autoComplete={"off"}
                                 className={`text-lg w-full mt-1 px-4 py-1 block rounded-md shadow-md`}
                                 type={"text"}
                              />
                           </Form.Control>
                           <Form.Message
                              className={`text-red-600`}
                              match={(value, _) =>
                                 !VALID_NAME_REGEX.test(value)
                              }
                           >
                              Моля въведете валидна фамилия
                           </Form.Message>
                        </div>
                     </Form.Field>
                     <Form.Field
                        className={`flex gap-6 items-center justify-between w-full`}
                        name={"email"}
                     >
                        <Form.Label className={`text-xl`}>
                           Имейл адрес*
                        </Form.Label>

                        <div className={`flex w-96 flex-col items-start gap-2`}>
                           <Form.Control
                              onChange={handleFormChange}
                              value={formValues.email}
                              name={"email"}
                              type={"email"}
                              asChild
                           >
                              <input
                                 placeholder={"jdoe@pethub.com"}
                                 autoComplete={"off"}
                                 className={`text-lg w-full  mt-1 px-4 py-1 block rounded-md shadow-md`}
                              />
                           </Form.Control>
                           <Form.Message
                              className={`text-red-600`}
                              match={(value, _) =>
                                 !VALID_EMAIL_REGEX.test(value)
                              }
                           >
                              Моля въведете валиден имейл
                           </Form.Message>
                        </div>
                     </Form.Field>

                     <Form.Field
                        className={`flex mt-2 items-center justify-between w-full`}
                        name={"password"}
                     >
                        <Form.Label className={`text-xl`}>Парола*</Form.Label>
                        <div className={`flex w-96 flex-col items-start gap-2`}>
                           <Form.Control
                              onChange={handleFormChange}
                              value={formValues.password}
                              name={"password"}
                              type={"password"}
                              asChild
                           >
                              <input
                                 placeholder={""}
                                 autoComplete={"off"}
                                 className={`text-lg w-full  mt-1 px-4 py-1 block rounded-md shadow-md`}
                              />
                           </Form.Control>
                           <Form.Message
                              className={`text-red-600`}
                              match={(value, _) =>
                                 !VALID_PASSWORD_REGEX.test(value)
                              }
                           >
                              Моля въведете валидна парола
                           </Form.Message>
                        </div>
                     </Form.Field>
                  </div>
                  <div className={`flex-col flex items-start gap-3`}>
                     <RadioGroup.Root
                        className={`flex items-center gap-12`}
                        onValueChange={(value) => {
                           const hasPets = value == "yes";
                           setFormValues((v) => ({
                              ...v,
                              hasPets,
                              pets: hasPets ? v.pets : [],
                           }));
                        }}
                        value={formValues.hasPets ? "yes" : "no"}
                     >
                        <label className={`text-xl`}>
                           Имате ли домашен любимец?
                        </label>
                        <div className={`flex items-center gap-1`}>
                           <RadioGroup.Item
                              className={`bg-white hover:bg-slate-50 w-4 h-4 rounded-full shadow-md`}
                              id={"hasPet"}
                              value={"yes"}
                           >
                              <RadioGroup.Indicator
                                 className={`flex w-full h-full relative after:content-[''] after:block after:w-[7px] after:h-[7px] after:rounded-full after:bg-violet-600 items-center justify-center`}
                              />
                           </RadioGroup.Item>
                           <label className={`ml-1 text-xl`} htmlFor={"hasPet"}>
                              Да
                           </label>
                        </div>

                        <div className={`flex items-center gap-1`}>
                           <RadioGroup.Item
                              className={`bg-white hover:bg-slate-50 w-4 h-4 rounded-full shadow-md`}
                              id={"hasPet2"}
                              value={"no"}
                           >
                              <RadioGroup.Indicator
                                 className={`flex w-full h-full relative after:content-[''] after:block after:w-[7px] after:h-[7px] after:rounded-full after:bg-violet-600 items-center justify-center`}
                              />
                           </RadioGroup.Item>
                           <label
                              className={`ml-1 text-xl`}
                              htmlFor={"hasPet2"}
                           >
                              Не
                           </label>
                        </div>
                     </RadioGroup.Root>
                     {formValues.hasPets && (
                        <Form.Field
                           className={`flex mt-2 items-center gap-6 justify-start w-full`}
                           name={"petsCount"}
                        >
                           <Form.Label
                              htmlFor={"petsCount"}
                              className={`text-xl`}
                           >
                              Колко домашни любимци имате?
                           </Form.Label>
                           <Form.Message match={(value, _) => false}>
                              Моля въведете валидно число
                           </Form.Message>
                           <Form.Control name={"petsCount"} asChild>
                              <input
                                 placeholder={""}
                                 onChange={handleChangePetsCount}
                                 autoComplete={"off"}
                                 className={`text-lg w-24 mt-1 px-4 py-1 block rounded-md shadow-md`}
                                 value={formValues.pets.length}
                                 min={0}
                                 max={100}
                                 type={"number"}
                              />
                           </Form.Control>
                        </Form.Field>
                     )}
                     <div
                        className={`flex-col mt-4 w-full flex items-start gap-8`}
                     >
                        {formValues.pets.map((pet, i) => (
                           <AddPetForm
                              key={i}
                              petIndex={i}
                              onFieldChange={handlePetInfoChange}
                              pet={pet}
                           />
                        ))}
                     </div>
                     <Form.Submit className={`mx-auto mt-4`} asChild>
                        <button
                           type={"submit"}
                           className={`flex text-xl hover:opacity-80 transition-all duration-200 shadow-md mt-6 px-12 py-1.5 bg-cornflower-blue text-white border-2 border-cornflower-blue rounded-lg outline-none items-center gap-2`}
                        >
                           Регистриране
                        </button>
                     </Form.Submit>
                  </div>
               </Form.Root>
            </div>
         </section>
      </div>
   );
};

export default SignUpPage;
