import React, { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CookieConsent from "react-cookie-consent";

export interface CookieBannerProps {
   cookieName: string;
}

export const CookieBanner: FC<CookieBannerProps> = ({ cookieName }) => {
   const [hasConsentValue, setHasConsentValue] = useState(false);

   return (
      <AnimatePresence initial>
         {!hasConsentValue && (
            <motion.div
               animate={{ opacity: 100 }}
               initial={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
               exit={{ opacity: 0, height: "0%" }}
            >
               <CookieConsent
                  visible={"true"}
                  enableDeclineButton
                  expires={30_000}
                  style={{}}
                  cookieName={cookieName}
                  hideOnAccept
                  onAccept={(_) => setHasConsentValue(true)}
                  onDecline={() => setHasConsentValue(true)}
                  hideOnDecline
                  buttonText={"Приеми бисквитки"}
                  declineButtonText={"Отхвърли"}
                  contentClasses={`text-white  text-xl`}
                  containerClasses={`bg-black z-20 fixed bottom-0 flex w-full px-8 py-5 items-center justify-between`}
                  disableStyles={true}
                  buttonClasses={`bg-raw-sienna mx-8 rounded-md px-4 py-2 text-white shadow-md`}
                  declineButtonClasses={`bg-raw-sienna rounded-md px-4 py-2 bg-white shadow-md`}
                  declineButtonStyle={{}}
                  location={"bottom"}
               >
                  PetHub© използва бисквитки, за да подобри вашето изживяване.
               </CookieConsent>
            </motion.div>
         )}
      </AnimatePresence>
   );
};
