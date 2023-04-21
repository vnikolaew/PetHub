import React, { FC } from "react";
import mapMarkerLogo from "@pethub/assets/map-marker-logo.png";
import rightArrowLogo from "@pethub/assets/right-arrow-logo.png";
import citiesData from "@pethub/web/utils/data.json";
import Image from "next/image";

export const FormFirstStep: FC = () => {
   return (
      <div className={`flex flex-col gap-12`}>
         <div className={`flex flex-col items-start gap-2`}>
            <label
               className={`text-raw-sienna font-semibold text-xl`}
               htmlFor={`petType`}
            >
               Запазете час за:
            </label>
            <select
               placeholder={"Избери домашен любимец"}
               className={`text-md relative w-72 px-4 py-1 block rounded-md shadow-md`}
               name={"petType"}
               id={"petType"}
            >
               <option disabled value={""}>
                  -- Избери домашен любимец --
               </option>
               <option value={"dog"}>Куче</option>
               <option value={"cat"}>Котка</option>
               <option value={`fish`}>Риба</option>
               <option value={`rodent`}>Гризач</option>
               <option value={"bird"}>Птица</option>
            </select>
         </div>

         <div className={`flex flex-col relative items-start gap-2`}>
            <Image
               className={`absolute top-0 -left-10`}
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
            <select
               placeholder={"Избери домашен любимец"}
               className={`text-md relative w-72 px-4 py-1 block rounded-md shadow-md`}
               name={"petType"}
               id={"petType"}
            >
               <option disabled value={""}>
                  -- Избери населено място --
               </option>
               {citiesData.cities.map((city, i) => (
                  <option key={city} value={city}>
                     {city}
                  </option>
               ))}
            </select>
            <Image
               className={`self-end mt-8 hover:opacity-80 transition-opacity duration-200 cursor-pointer`}
               height={40}
               width={40}
               src={rightArrowLogo}
               alt={"Right Arrow Logo"}
            />
         </div>
      </div>
   );
};
