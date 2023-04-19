"use client";
import React, { FC, PropsWithChildren } from "react";
import { NextPage } from "next";
import { Breadcrumb } from "../../components";
import * as Tabs from "@radix-ui/react-tabs";
import * as Separator from "@radix-ui/react-separator";
import * as Form from "@radix-ui/react-form";

import userAvatarLogo from "../../public/assets/user-avatar-logo.png";
import petAvatarLogo from "../../public/assets/pet-avatar-logo.png";

import Image from "next/image";
import AccountPetCard, {
   IPetInfo,
} from "../../components/Account/AccountPetCard";
import PawLogo from "../../components/Logos/PawLogo";
import { useRouter, useSearchParams } from "next/navigation";
import PetAppointmentCard, {
   IPetAppointment,
   PetAppointmentStatus,
} from "../../components/Account/PetAppointmentCard";
import UserOrderInfoCard, {
   IUserOrder,
} from "../../components/Account/UserOrderInfoCard";
import {
   LOREM_IPSUM_TEXT,
   VALID_PASSWORD_REGEX,
} from "../../utils/string-constants";

const USER = {
   profilePicture: userAvatarLogo,
   firstName: "John",
   lastName: "Doe",
   email: "jdoe123@pethub.com",
};

const USER_PETS: IPetInfo[] = [
   {
      petId: "1",
      name: "Rocky",
      birthDate: new Date(2018, 12, 12),
      breed: "Husky",
      avatar: petAvatarLogo,
      description: LOREM_IPSUM_TEXT.slice(0, 200),
   },
];

const USER_APPOINTMENTS: IPetAppointment[] = [
   {
      petName: "Rocky",
      petAvatar: petAvatarLogo,
      appointmentType: "стандартна",
      appointmentDateTime: new Date(2023, 5, 5),
      city: "Варна",
      vetClinic: "Окръжна болница",
      status: PetAppointmentStatus.Due,
   },
];

const USER_ORDERS: IUserOrder[] = [
   {
      orderTotal: 100.0,
      timestamp: new Date(),
      address: "ул. Васил Левски 120 вх.А",
      orderNumber: "220",
      status: "Завършена",
   },
];

const MyAccountPage: NextPage = () => {
   const params = useSearchParams();
   const router = useRouter();

   return (
      <div className={`mt-12 mx-16`}>
         <Breadcrumb
            segments={[
               { label: "PetHub", path: "/" },
               { label: "Моят профил", path: "account" },
            ]}
         />
         <section className={`w-full my-6 flex flex-col items-center gap-6`}>
            <h1 className={`text-4xl`}>Добре дощли в профила си!</h1>
            <Tabs.Root
               onValueChange={(value) =>
                  router.replace(`/account?tab=${value}`)
               }
               value={params.get("tab") ?? "pets"}
               className={`w-full flex flex-col items-center mx-auto`}
               defaultValue={params.get("tab") ?? "pets"}
            >
               <Tabs.List className={`mx-auto`}>
                  <TabsTrigger value={"me"}>Аз</TabsTrigger>
                  <TabsTrigger value={"pets"}>
                     Моите домашни любимци
                  </TabsTrigger>
                  <TabsTrigger value={"my-purchases"}>
                     Моите поръчки
                  </TabsTrigger>
                  <TabsTrigger value={"history"}>
                     История на прегледите
                  </TabsTrigger>
               </Tabs.List>
               <Separator.Root
                  orientation={"horizontal"}
                  className={`text-gray-300 mx-auto mt-0 w-[90%] h-[1.5px] bg-gray-300`}
               />
               <Tabs.Content value={"me"}>
                  <div className={`flex items-center p-12 gap-12`}>
                     <Image
                        width={100}
                        height={100}
                        // height={60}
                        src={USER.profilePicture}
                        alt={"User avatar"}
                     />
                     <div className={`flex flex-col items-start gap-2`}>
                        <h2 className={`text-2xl`}>{USER.firstName}</h2>
                        <h2 className={`text-2xl`}>{USER.lastName}</h2>
                     </div>
                     <div className={`flex flex-col items-start gap-2`}>
                        <h2 className={`text-2xl`}>Имейл адрес</h2>
                        <h2 className={`text-xl text-gray-600`}>
                           {USER.email}
                        </h2>
                     </div>
                     <div
                        className={`flex-col ml-4 mt-12 flex items-center gap-2`}
                     >
                        <h2 className={`text-2xl font-semibold`}>
                           Смени парола
                        </h2>
                        <Form.Root>
                           <Form.Field
                              className={`flex gap-3 items-center justify-between`}
                              name={"password"}
                           >
                              <Form.Label
                                 className={`text-gray-400 inline-block text-lg`}
                              >
                                 Нова парола
                              </Form.Label>
                              <Form.Message
                                 match={(value, _) =>
                                    VALID_PASSWORD_REGEX.test(value)
                                 }
                              >
                                 Моля въведете валидна парола
                              </Form.Message>
                              <Form.Control asChild>
                                 <input
                                    placeholder={""}
                                    autoComplete={"off"}
                                    className={`text-lg w-64 mt-1 px-4 py-1 block rounded-md shadow-md`}
                                    name={"password"}
                                    type={"password"}
                                 />
                              </Form.Control>
                           </Form.Field>

                           <Form.Field
                              className={`flex gap-3 mt-2 items-center justify-between`}
                              name={"passwordConfirm"}
                           >
                              <Form.Label
                                 className={`text-gray-400 inline-block text-lg`}
                              >
                                 Повтори нова парола
                              </Form.Label>
                              <Form.Message
                                 match={(value, formData) =>
                                    VALID_PASSWORD_REGEX.test(value) &&
                                    formData.get("password")?.toString() ===
                                       value
                                 }
                              >
                                 Моля въведете валидна парола
                              </Form.Message>
                              <Form.Control asChild>
                                 <input
                                    placeholder={""}
                                    autoComplete={"off"}
                                    className={`text-lg w-64 mt-1 px-4 py-1 block rounded-md shadow-md`}
                                    name={"password"}
                                    type={"password"}
                                 />
                              </Form.Control>
                           </Form.Field>
                           <Form.Submit className={`mx-auto mt-4`} asChild>
                              <button
                                 className={`flex text-xl hover:opacity-80 transition-all duration-200 shadow-md mt-6 px-8 py-1.5 bg-whiskey text-white border-2 border-whiskey rounded-lg outline-none items-center gap-2`}
                              >
                                 Промяна
                              </button>
                           </Form.Submit>
                        </Form.Root>
                     </div>
                  </div>
               </Tabs.Content>
               <Tabs.Content value={"pets"}>
                  <div
                     className={`w-[80%] flex gap-4 flex-col items-center mx-auto mt-6`}
                  >
                     {USER_PETS.map((pet, id) => (
                        <AccountPetCard key={id} pet={pet} />
                     ))}
                     <button
                        className={`flex hover:opacity-80 transition-all duration-200 shadow-md mb-6 px-3 py-1 bg-whiskey text-white border-2 border-whiskey rounded-lg outline-none items-center gap-3`}
                     >
                        <PawLogo size={20} color={"white"} />
                        <span className={`text-lg`}>
                           Добави домашен любимец
                        </span>
                     </button>
                  </div>
               </Tabs.Content>
               <Tabs.Content value={"my-purchases"}>
                  <div className={`mt-6 mx-auto flex-col flex items-center`}>
                     {USER_ORDERS.map((order, i) => (
                        <UserOrderInfoCard order={order} key={i} />
                     ))}
                  </div>
               </Tabs.Content>
               <Tabs.Content value={"history"}>
                  <div className={`mt-6 mx-auto flex-col flex items-center`}>
                     {USER_APPOINTMENTS.map((appointment, i) => (
                        <PetAppointmentCard appointment={appointment} key={i} />
                     ))}
                  </div>
               </Tabs.Content>
            </Tabs.Root>
         </section>
      </div>
   );
};

interface TabsTriggerProps extends PropsWithChildren {
   value: string;
}

const TabsTrigger: FC<TabsTriggerProps> = ({ value, children }) => {
   return (
      <Tabs.Trigger asChild value={value}>
         <div
            className={`rounded-t-md cursor-pointer text-lg inline-block bg-gray-300 border border-black px-2 py-1`}
         >
            {children}
         </div>
      </Tabs.Trigger>
   );
};

export default MyAccountPage;
