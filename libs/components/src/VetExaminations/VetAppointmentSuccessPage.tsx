import React, { FC } from "react";
import { PetType } from "@pethub/web/app/signup/page";
import Link from "next/link";
import { CheckIcon } from "@radix-ui/react-icons";

export interface IVetAppointment {
   petType: PetType;
   petName: string;
   dateTime: Date;
   location: string;
   petClinic: string;
   appointmentType: string;
}

export interface VetAppointmentSuccessPageProps {
   appointment: IVetAppointment;
}

export const VetAppointmentSuccessPage: FC<VetAppointmentSuccessPageProps> = ({
   appointment,
}) => {
   return (
      <div className={`min-h-[70vh] flex items-center justify-center`}>
         <div className={`flex flex-col gap-4 items-center`}>
            <div className={`flex items-center gap-4`}>
               <h2 className={`text-2xl`}>
                  Успешно запазихте час за {appointment.petName} в клиника{" "}
                  {appointment.petClinic}!
               </h2>
               <CheckIcon
                  height={36}
                  width={36}
                  className={`text-green-600 `}
               />
            </div>
            <Link
               className={`text-blue-700 text-lg underline`}
               href={"/account?tab=history"}
            >
               Към история на прегледите
            </Link>
         </div>
      </div>
   );
};
