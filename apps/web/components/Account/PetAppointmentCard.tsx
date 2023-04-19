import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import petAvatarLogo from "../../public/assets/pet-avatar-logo.png";
import mapMarkerLogo from "../../public/assets/map-marker-logo.png";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export enum PetAppointmentStatus {
   Completed = 0,
   Due = 1,
}

export interface IPetAppointment {
   petName: string;
   petAvatar?: string | StaticImageData;
   appointmentType: string;
   appointmentDateTime: Date;
   city: string;
   vetClinic: string;
   status: PetAppointmentStatus;
}

export interface PetAppointmentInfoCardProps {
   appointment: IPetAppointment;
}

const PetAppointmentInfoCard: FC<PetAppointmentInfoCardProps> = ({
   appointment,
}) => {
   return (
      <div
         className={`flex gap-2 rounded-xl shadow-md border border-gray-100 items-center py-3 px-12`}
      >
         <Image
            height={40}
            width={40}
            src={appointment.petAvatar ?? petAvatarLogo}
            alt={"Pet avatar"}
         />
         <span className={`text-xl`}>{appointment.petName}: </span>
         <span>Час за </span>
         <span className={`text-xl`}>{appointment.appointmentType}</span>
         <span>от </span>
         <span className={`text-xl`}>
            {appointment.appointmentDateTime.toLocaleTimeString([], {
               hour: "2-digit",
               minute: "2-digit",
            })}
         </span>
         <span>, на </span>
         <span className={`text-lg`}>
            {appointment.appointmentDateTime.toLocaleDateString("en-GB")}
         </span>
         <div className={`flex items-center gap-1`}>
            <Image
               height={20}
               width={20}
               src={mapMarkerLogo}
               alt={"Map marker"}
            />
            <span>
               {appointment.city}, {appointment.vetClinic}
            </span>
         </div>
         <div className={`flex ml-2 gap-1 items-center`}>
            <Checkbox.Root
               className={`bg-white w-5 h-5 flex items-center justify-center shadow-sm rounded-[4px]`}
               disabled
               checked={appointment.status === PetAppointmentStatus.Completed}
            >
               <Checkbox.Indicator>
                  <CheckIcon />
               </Checkbox.Indicator>
            </Checkbox.Root>
            <span>Извършен</span>
         </div>
      </div>
   );
};

export default PetAppointmentInfoCard;
