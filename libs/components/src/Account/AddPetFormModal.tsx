import React, { FC, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { PawLogo } from "@pethub/components";
import * as Separator from "@radix-ui/react-separator";
import { IPet, PetType, useCurrentUser } from "@pethub/state";
import * as Form from "@radix-ui/react-form";
import Image from "next/image";
import calendarLogo from "@pethub/assets/calendar-logo.png";

export const AddPetFormModal: FC = () => {
   const [formValues, setFormValues] = useState<IPet>({
      name: "",
      type: PetType.Dog,
      birthDate: new Date(),
   });
   const [isOpen, setIsOpen] = useState(false);
   const addPet = useCurrentUser((state) => state.addPet);

   const handleFormChange = ({ target: { name, value, valueAsDate } }: any) => {
      switch (name) {
         case "name": {
            setFormValues((v) => ({ ...v, name: value }));
            break;
         }
         case "type": {
            const petType = `${value[0].toUpperCase()}${value.slice(1)}`;
            setFormValues((v) => ({ ...v, type: petType as PetType }));
            break;
         }
         case "birthDate": {
            setFormValues((v) => ({ ...v, birthDate: valueAsDate! }));
            break;
         }
      }
   };

   function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      addPet(formValues);
      setIsOpen(false);
   }

   return (
      <Dialog.Root onOpenChange={setIsOpen} open={isOpen}>
         <Dialog.Trigger asChild>
            <button
               // onClick={(_) => setShowAddPetModal(true)}
               className={`flex hover:opacity-80 transition-all duration-200 shadow-md mb-6 px-3 py-1 bg-whiskey text-white border-2 border-whiskey rounded-lg outline-none items-center gap-3`}
            >
               <PawLogo size={20} color={"white"} />
               <span className={`text-lg`}>Добави домашен любимец</span>
            </button>
         </Dialog.Trigger>
         <Dialog.Portal>
            <Dialog.Overlay
               className={`bg-black animate-overlayShow bg-opacity-60 fixed inset-0`}
            />
            <Dialog.Content
               className={`bg-white focus:outline-none animate-contentShow rounded-md shadow-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[470px] px-6 py-4`}
            >
               <Dialog.Title className={`text-lg`}>
                  Добавяне на домашен любимец към профила
               </Dialog.Title>
               <Separator.Root
                  className={`w-[100%] mt-3 h-[1px] bg-gray-200`}
                  orientation={"horizontal"}
               />
               <Dialog.Description className={`w-full`}>
                  <div
                     className={`flex-col border border-gray-100 py-6 px-6 rounded-xl shadow-md flex items-start gap-2`}
                  >
                     <Form.Root
                        onSubmit={handleFormSubmit}
                        className={`flex w-full flex-col gap-6 items-start`}
                     >
                        <Form.Field
                           className={`flex flex-col items-start gap-1 justify-between w-full`}
                           name={`type`}
                        >
                           <Form.Label className={`text-md`}>
                              Вид домашен любимец
                           </Form.Label>
                           <Form.Control asChild>
                              <select
                                 id={"petType"}
                                 name={`type`}
                                 onChange={handleFormChange}
                                 className={`text-md relative w-[80%] px-4 py-1 block rounded-md shadow-md`}
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
                           className={`flex flex-col items-start gap-1 justify-between w-full`}
                           name={`name`}
                        >
                           <Form.Label className={`text-md`}>
                              Име на домашен любимец
                           </Form.Label>
                           <Form.Control
                              onChange={handleFormChange}
                              value={formValues.name}
                              name={`name`}
                              asChild
                           >
                              <input
                                 placeholder={""}
                                 autoComplete={"off"}
                                 className={`text-md w-[80%] px-4 py-1 block rounded-md shadow-md`}
                                 type={"text"}
                              />
                           </Form.Control>
                           <Form.Message
                              className={`text-red-600 text-sm`}
                              match={(value, _) => value.length < 6}
                           >
                              Моля въведете валидно име
                           </Form.Message>
                        </Form.Field>

                        <Form.Field
                           className={`flex flex-col items-start gap-1 justify-between w-full`}
                           name={`birthDate`}
                        >
                           <Form.Label className={`text-md`}>
                              Дата на раждане
                           </Form.Label>
                           <Form.Message match={(value, _) => false}>
                              Моля въведете валидна дата
                           </Form.Message>
                           <div className={`flex w-full items-center gap-2`}>
                              <Form.Control name={`birthDate`} asChild>
                                 <input
                                    placeholder={""}
                                    onChange={handleFormChange}
                                    // value={pet.birthDate.toDateString()}
                                    autoComplete={"off"}
                                    className={`text-sm w-[80%] px-4 py-1 block rounded-md shadow-md`}
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
                        <Form.Submit className={`mx-auto mt-4`} asChild>
                           <button
                              type={"submit"}
                              className={`flex text-xl hover:opacity-90 transition-all duration-200 shadow-md mt-3 px-8 py-1 bg-cornflower-blue text-white border-2 border-cornflower-blue rounded-lg outline-none items-center gap-2`}
                           >
                              Добави
                           </button>
                        </Form.Submit>
                     </Form.Root>
                  </div>
               </Dialog.Description>
               <div></div>
               <Dialog.Close asChild>
                  <button
                     className={`w-6 absolute hover:bg-red-100 transition-all duration-200 top-5 focus:ring-1 focus:outline-none focus:ring-red-500/50 right-3 rounded-full h-6 inline-flex items-center justify-center`}
                  >
                     <Cross2Icon className={`text-red-600`} />
                  </button>
               </Dialog.Close>
            </Dialog.Content>
         </Dialog.Portal>
      </Dialog.Root>
   );
};
