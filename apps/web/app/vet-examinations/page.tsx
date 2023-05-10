"use client";
import React, { Fragment, useState } from "react";
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
import { useVetAppointment } from "@pethub/state";

enum FormState {
   IN_PROGRESS = "In progress",
   SUCCEEDED = "Succeeded",
   FAILED = "Failed",
}

const VetExaminationsPage: NextPage = () => {
   const [formState, setFormState] = useState<FormState>(FormState.IN_PROGRESS);
   const { setCurrentStep, currentStep } = useVetAppointment(
      ({ currentStepInForm, setCurrentStep }) => ({
         currentStep: currentStepInForm,
         setCurrentStep,
      })
   );

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
               <div
                  className={`flex bg-white rounded-md shadow-md px-12 py-6 mt-16 mb-20 items-start gap-8`}
               >
                  {currentStep >= 1 && (
                     <Fragment>
                        <FormFirstStep />
                        <Separator.Root
                           className={`h-[250px] w-[1px] text-black bg-black`}
                           orientation={"vertical"}
                        />
                     </Fragment>
                  )}
                  {currentStep >= 2 && (
                     <Fragment>
                        <FormSecondStep />
                        <Separator.Root
                           className={`h-[250px] w-[1px] text-black bg-black`}
                           orientation={"vertical"}
                        />
                     </Fragment>
                  )}
                  {currentStep >= 3 && (
                     <Fragment>
                        <FormThirdStep />
                        <Separator.Root
                           className={`h-[250px] w-[1px] text-black bg-black`}
                           orientation={"vertical"}
                        />
                     </Fragment>
                  )}
                  {currentStep === 4 && (
                     <FormFourthStep
                        onSubmit={() => {
                           setCurrentStep(1);
                           setFormState(FormState.SUCCEEDED);
                        }}
                     />
                  )}
               </div>
            </section>
         </div>
      );
   }
   if (formState === FormState.SUCCEEDED) {
      return (
         <div className={`mt-12 mx-16`}>
            <Breadcrumb
               segments={[
                  { label: "PetHub", path: "/" },
                  { label: "Ветеринарни прегледи", path: "vet-examinations" },
               ]}
            />
            <section className={`w-full my-6 flex flex-col items-center gap-2`}>
               <VetAppointmentSuccessPage />
            </section>
         </div>
      );
   }

   return null;
};

export default VetExaminationsPage;
