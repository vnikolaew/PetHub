import React, { FC, Fragment, useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

function withTime(
   date: Date,
   hours: number,
   minutes: number,
   seconds = 0.0
): Date {
   const newDate = new Date(date);
   newDate.setHours(hours);
   newDate.setMinutes(minutes);
   newDate.setSeconds(seconds);
   return newDate;
}

export const getFreeExamHours: (date: Date) => Date[] = (date) =>
   [
      [9, 45],
      [11, 30],
      [14, 0.0],
   ].map(([hours, minutes], i) => withTime(date, hours, minutes));

const FREE_EXAM_HOURS = getFreeExamHours(new Date());

export interface FormFourthStepProps {
   onSubmit: () => void;
}

export const FormFourthStep: FC<FormFourthStepProps> = ({ onSubmit }) => {
   const [selectedDateTimeIndex, setSelectedDateTimeIndex] =
      useState<number>(0);

   const selectedDate = FREE_EXAM_HOURS[selectedDateTimeIndex];

   return (
      <div className={`flex px-8 flex-col gap-12`}>
         <div className={`flex flex-col items-center gap-2`}>
            <label
               className={`text-raw-sienna font-semibold text-xl`}
               htmlFor={`petType`}
            >
               Изберете час
            </label>
            <RadioGroup.Root
               onValueChange={(index) =>
                  setSelectedDateTimeIndex(Number(index))
               }
               value={selectedDateTimeIndex.toString()}
               className={`flex mt-4 items-center gap-12`}
            >
               <div className={`flex flex-col items-start gap-2`}>
                  {FREE_EXAM_HOURS.map((date, i) => (
                     <div className={`flex items-center gap-1`} key={i}>
                        <RadioGroup.Item
                           className={`bg-white hover:bg-slate-50 w-4 h-4 rounded-full shadow-md`}
                           id={`time-${i}`}
                           value={i.toString()}
                        >
                           <RadioGroup.Indicator
                              className={`flex w-full h-full relative after:content-[''] after:block after:w-[7px] after:h-[7px] after:rounded-full after:bg-violet-600 items-center justify-center`}
                           />
                        </RadioGroup.Item>
                        <label className={`ml-1 text-xl`} htmlFor={`time-${i}`}>
                           {date.toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                           })}
                        </label>
                     </div>
                  ))}
               </div>
            </RadioGroup.Root>
            <div className={`self-end justify-self-end`}>
               <button
                  onClick={onSubmit}
                  className={`flex mt-16 text-lg hover:opacity-90 transition-all duration-200 shadow-lg px-12 py-0.5 bg-cornflower-blue text-white border-2 border-cornflower-blue rounded-lg outline-none items-center gap-2`}
               >
                  Запази час
               </button>
            </div>
         </div>
      </div>
   );
};
