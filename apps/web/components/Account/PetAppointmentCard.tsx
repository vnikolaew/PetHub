import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import petAvatarLogo from "../../public/assets/pet-avatar-logo.png";
import mapMarkerLogo from "../../public/assets/map-marker-logo.png";
import * as Checkbox from "@radix-ui/react-checkbox"
import { CheckIcon } from "@radix-ui/react-icons";

enum PetAppointmentStatus {
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
      <div className={`flex gap-2 items-center py-3 px-1`}>
         <Image
            height={30}
            width={30}
            src={appointment.petAvatar ?? petAvatarLogo}
            alt={"Pet avatar"}
         />
         <span className={`text-lg`}>{appointment.petName}: </span>
         <span>Час за </span>
         <span className={`text-lg`}>{appointment.appointmentType}</span>
         <span>от </span>
         <span className={`text-lg`}>
            {appointment.appointmentDateTime.toLocaleTimeString([], {
               hour: "2-digit",
               minute: "2-digit",
            })}
         </span>
         <span>, на </span>
         <span className={`text-lg`}>
            {appointment.appointmentDateTime.toLocaleDateString("en-GB")}
         </span>
         <Image height={30} width={30} src={mapMarkerLogo} alt={"Map marker"} />
         <span>{appointment.city}, {appointment.vetClinic}</span>
         <div className={`flex gap-2 items-center`}>
            <Checkbox.Root disabled checked={appointment.status === PetAppointmentStatus.Completed}>
               <Checkbox.Indicator >
                  <CheckIcon />
               </Checkbox.Indicator>
            </Checkbox.Root>
            <span>Извършен</span>
         </div>
      </div>
   );
};

export default PetAppointmentInfoCard;
