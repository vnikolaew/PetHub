import React, { FC } from "react";
import mapMarkerLogo from "@pethub/assets/map-marker-logo.png";
import rightArrowLogo from "@pethub/assets/right-arrow-logo.png";
import citiesData from "@pethub/web/utils/data.json";
import Image from "next/image";
import { useCurrentUser } from "@pethub/state";
import { useVetAppointment } from "@pethub/state";
import { SelectInput } from "../common";

export const FormFirstStep: FC = () => {
   const pets = useCurrentUser((store) => store.user?.pets) ?? [];
   const { setPet, setLocation, vetAppointment, setCurrentStep } =
      useVetAppointment(
         ({ setPet, setLocation, vetAppointment, setCurrentStep }) => ({
            setPet,
            setLocation,
            vetAppointment,
            setCurrentStep,
         })
      );
   console.log(vetAppointment);

   return (
      <div className={`flex flex-col gap-12`}>
         <div className={`flex flex-col items-start gap-2`}>
            <label
               className={`text-raw-sienna font-semibold text-xl`}
               htmlFor={`petType`}
            >
               Запазете час за:
            </label>
            <SelectInput
               placeholder={"Избери домашен любимец"}
               options={pets.map(({ name }) => ({ value: name, label: name }))}
               onChange={(value) => setPet(pets.find((p) => p.name === value)!)}
            />
         </div>

         <div className={`flex flex-col relative items-start gap-2`}>
            <Image
               className={`absolute top-0 -left-8`}
               height={24}
               width={24}
               src={mapMarkerLogo}
               alt={"Map marker"}
            />
            <label
               className={`text-raw-sienna font-semibold text-xl`}
               htmlFor={`petType`}
            >
               Моля въведете населено място:
            </label>
            <SelectInput
               placeholder={"Избери населено място"}
               options={citiesData.cities.map((city) => ({
                  value: city,
                  label: city,
               }))}
               onChange={(value) => setLocation(value)}
            />
            <Image
               className={`self-end mt-8 hover:opacity-80 transition-opacity duration-200 cursor-pointer`}
               onClick={(_) => setCurrentStep(2)}
               height={40}
               width={40}
               src={rightArrowLogo}
               alt={"Right Arrow Logo"}
            />
         </div>
      </div>
   );
};
