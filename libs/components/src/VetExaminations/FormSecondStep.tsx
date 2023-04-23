import React, { FC } from "react";
import Image from "next/image";
import rightArrowLogo from "@pethub/assets/right-arrow-logo.png";
import vetClinics from "@pethub/web/utils/vet-clinics.json";
import { SelectInput } from "../common";
import { useVetAppointment } from "@pethub/state";

export const FormSecondStep: FC = () => {
   const { setVetClinic, setAppointmentType, setCurrentStep } =
      useVetAppointment(
         ({ setVetClinic, setAppointmentType, setCurrentStep }) => ({
            setVetClinic,
            setAppointmentType,
            setCurrentStep,
         })
      );

   return (
      <div className={`flex flex-col gap-12`}>
         <div className={`flex flex-col items-start gap-2`}>
            <label
               className={`text-raw-sienna font-semibold text-xl`}
               htmlFor={`petType`}
            >
               Ветеринарни клиники в тази област
            </label>
            <SelectInput
               placeholder={"Изберете ветеринарна клиника"}
               options={vetClinics.vetClinics.map((clinic) => ({
                  value: clinic,
                  label: clinic,
               }))}
               onChange={setVetClinic}
            />
         </div>
         <div className={`flex flex-col relative items-start gap-2`}>
            <label
               className={`text-raw-sienna font-semibold text-xl`}
               htmlFor={`petType`}
            >
               Тип преглед
            </label>
            <SelectInput
               placeholder={"Избери"}
               options={[
                  {
                     label: "Стандартен",
                     value: "Стандартен",
                  },
                  {
                     label: "Специален",
                     value: "Специален",
                  },
               ]}
               onChange={setAppointmentType}
            />
            <Image
               className={`self-end mt-8 hover:opacity-80 transition-opacity duration-200 cursor-pointer`}
               onClick={(_) => setCurrentStep(3)}
               height={40}
               width={40}
               src={rightArrowLogo}
               alt={"Right Arrow Logo"}
            />
         </div>
      </div>
   );
};
