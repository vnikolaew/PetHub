import React, { FC } from "react";
import Image from "next/image";
import petAvatarLogo from "@pethub/assets/pet-avatar-logo.png";
import mapMarkerLogo from "@pethub/assets/map-marker-logo.png";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { IVetAppointment, PetAppointmentStatus } from "@pethub/state";
import { dateTimeFormatter } from "./UserOrderInfoCard";

export interface PetAppointmentInfoCardProps {
   appointment: IVetAppointment;
}

export const PetAppointmentInfoCard: FC<PetAppointmentInfoCardProps> = ({
   appointment,
}) => {
   return (
      <div
         className={`flex gap-2 rounded-xl shadow-md border border-gray-100 items-center py-4 px-10`}
      >
         <Image height={80} width={80} src={petAvatarLogo} alt={"Pet avatar"} />
         <span className={`text-2xl mr-6 font-semibold text-whiskey`}>
            {appointment.pet?.name}:{" "}
         </span>
         <span>Час за </span>
         <span className={`text-xl`}>{appointment.appointmentType}</span>
         <span>преглед от </span>
         <span className={`text-xl`}>
            {appointment.scheduledDateTime.toLocaleTimeString(["bg"], {
               hour: "2-digit",
               minute: "2-digit",
            })}
         </span>
         <span>, на </span>
         <span className={`text-lg`}>
            {dateTimeFormatter.format(appointment.scheduledDateTime)}
         </span>
         <div className={`flex items-center gap-1`}>
            <Image
               height={20}
               width={20}
               src={mapMarkerLogo}
               alt={"Map marker"}
            />
            <span>
               {appointment.location}, {appointment.vetClinic}
            </span>
         </div>
         <div className={`flex ml-2 gap-1 items-center`}>
            <Checkbox.Root
               className={`${
                  appointment.status === PetAppointmentStatus.Completed
                     ? "bg-green-200 border border-green-300"
                     : "bg-red-200 border border-red-300"
               } bg-white w-5 h-5 flex items-center justify-center shadow-sm rounded-[4px]`}
               disabled
               checked={appointment.status === PetAppointmentStatus.Completed}
            >
               <Checkbox.Indicator>
                  <CheckIcon />
               </Checkbox.Indicator>
            </Checkbox.Root>
            <span
               className={`${
                  appointment.status === PetAppointmentStatus.Due
                     ? "text-red-500"
                     : "text-green-500"
               } font-semibold`}
            >
               Извършен
            </span>
         </div>
      </div>
   );
};
