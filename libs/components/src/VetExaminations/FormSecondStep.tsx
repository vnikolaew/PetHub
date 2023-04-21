import React, { FC } from "react";
import Image from "next/image";
import citiesData from "@pethub/web/utils/data.json";
import rightArrowLogo from "@pethub/assets/right-arrow-logo.png";

export const FormSecondStep: FC = () => {
   return (
      <div className={`flex flex-col gap-12`}>
         <div className={`flex flex-col items-start gap-2`}>
            <label
               className={`text-raw-sienna font-semibold text-xl`}
               htmlFor={`petType`}
            >
               Ветеринарни клиники в тази област
            </label>
            <select
               placeholder={"Избери домашен любимец"}
               className={`text-md relative w-72 px-4 py-1 block rounded-md shadow-md`}
               name={"petType"}
               id={"petType"}
            >
               <option disabled value={""}>
                  -- Избери --
               </option>
               <option value={"dog"}>Куче</option>
               <option value={"cat"}>Котка</option>
               <option value={`fish`}>Риба</option>
               <option value={`rodent`}>Гризач</option>
               <option value={"bird"}>Птица</option>
            </select>
         </div>

         <div className={`flex flex-col relative items-start gap-2`}>
            <label
               className={`text-raw-sienna font-semibold text-xl`}
               htmlFor={`petType`}
            >
               Тип преглед
            </label>
            <select
               placeholder={"Избери домашен любимец"}
               className={`text-md relative w-72 px-4 py-1 block rounded-md shadow-md`}
               name={"petType"}
               id={"petType"}
            >
               <option disabled value={""}>
                  -- Избери тип --
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
