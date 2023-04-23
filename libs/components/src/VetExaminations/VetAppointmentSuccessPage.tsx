import React, { FC, useEffect } from "react";
import Link from "next/link";
import { CheckIcon } from "@radix-ui/react-icons";
import { useCurrentUser, useVetAppointment } from "@pethub/state";

export const VetAppointmentSuccessPage: FC = () => {
   const vetAppointment = useVetAppointment((store) => store.vetAppointment);
   const addVetAppointment = useCurrentUser((store) => store.addVetAppointment);

   useEffect(() => {
      addVetAppointment(vetAppointment);
   }, []);

   return (
      <div className={`min-h-[70vh] flex items-center justify-center`}>
         <div className={`flex flex-col gap-4 items-center`}>
            <div className={`flex items-center gap-4`}>
               <h2 className={`text-2xl`}>
                  Успешно запазихте час за{" "}
                  <span className={`font-bold`}>
                     {vetAppointment.pet?.name}
                  </span>{" "}
                  в клиника{" "}
                  <span className={`font-bold`}>
                     {vetAppointment.vetClinic}!
                  </span>
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
