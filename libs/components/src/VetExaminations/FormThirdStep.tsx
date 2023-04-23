import React, { FC, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import rightArrowLogo from "@pethub/assets/right-arrow-logo.png";
import { useVetAppointment } from "@pethub/state";

export const FormThirdStep: FC = () => {
   const [selectedDate, setSelectedDate] = useState(new Date());
   const { setCurrentStep, setDateTime } = useVetAppointment(
      ({ setDateTime, setCurrentStep }) => ({
         setDateTime,
         setCurrentStep,
      })
   );

   return (
      <div className={`flex flex-col gap-12`}>
         <div className={`flex flex-col items-center gap-2`}>
            <label
               className={`text-raw-sienna font-semibold text-xl`}
               htmlFor={`petType`}
            >
               Изберете една от свободните дати
            </label>
            <div>
               <DatePicker
                  className={`text-md text-center relative w-48 mt-8 px-4 py-1 block rounded-md shadow-md`}
                  filterDate={(date: Date) => date.getDate() % 3 === 0}
                  selected={selectedDate}
                  onChange={(date, e) => {
                     setDateTime(date!);
                     setSelectedDate(date!);
                  }}
               />
            </div>
            <Image
               className={`self-end mt-28 hover:opacity-80 transition-opacity duration-200 cursor-pointer`}
               onClick={(_) => setCurrentStep(4)}
               height={40}
               width={40}
               src={rightArrowLogo}
               alt={"Right Arrow Logo"}
            />
         </div>
      </div>
   );
};
