"use client";
import React, { useState } from "react";
import { NextPage } from "next";
import {
   Breadcrumb,
   FormFirstStep,
   FormFourthStep,
   FormSecondStep,
   FormThirdStep,
   VetAppointmentSuccessPage,
} from "@pethub/components";
import infoLogo from "@pethub/assets/info-logo.png";
import Image from "next/image";
import Link from "next/link";
import * as Separator from "@radix-ui/react-separator";
import { PetType } from "@pethub/web/app/signup/page";

enum FormState {
   IN_PROGRESS = "In progress",
   SUCCEEDED = "Succeeded",
   FAILED = "Failed",
}

const VetExaminationsPage: NextPage = () => {
   const [formState, setFormState] = useState<FormState>(FormState.IN_PROGRESS);

   if (formState === FormState.IN_PROGRESS) {
      return (
         <div className={`mt-12 mx-16`}>
            <Breadcrumb
               segments={[
                  { label: "PetHub", path: "/" },
                  { label: "Ветеринарни прегледи", path: "vet-examinations" },
               ]}
            />
            <section className={`w-full my-6 flex flex-col items-center gap-2`}>
               <h1 className={`text-4xl`}>
                  Запазете час във ветеринарна клиника
               </h1>
               <div className={`flex items-center gap-8`}>
                  <div className={`flex items-center gap-2`}>
                     <Image
                        height={20}
                        width={20}
                        src={infoLogo}
                        alt={"Info logo"}
                     />
                     <span className={`text-xl text-gray-400`}>
                        Вече имате запазен час?
                     </span>
                  </div>
                  <Link
                     className={`text-blue-700 text-md underline`}
                     href={"/account?tab=history"}
                  >
                     Към история на прегледите
                  </Link>
               </div>
               <div className={`flex mt-16 mb-20 items-start gap-8`}>
                  <FormFirstStep />
                  <Separator.Root
                     className={`h-[250px] w-[1px] text-black bg-black`}
                     orientation={"vertical"}
                  />
                  <FormSecondStep />
                  <Separator.Root
                     className={`h-[250px] w-[1px] text-black bg-black`}
                     orientation={"vertical"}
                  />
                  <FormThirdStep />
                  <Separator.Root
                     className={`h-[250px] w-[1px] text-black bg-black`}
                     orientation={"vertical"}
                  />
                  <FormFourthStep
                     onSubmit={() => setFormState(FormState.SUCCEEDED)}
                  />
               </div>
            </section>
         </div>
      );
   }
   if (formState === FormState.SUCCEEDED) {
      return (
         <VetAppointmentSuccessPage
            appointment={{
               petName: "Rocky",
               appointmentType: "regular",
               dateTime: new Date(),
               location: "Варна",
               petClinic: "Окръжна болница",
               petType: PetType.Dog,
            }}
         />
      );
   }
};

export default VetExaminationsPage;
